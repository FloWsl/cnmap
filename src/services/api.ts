import { POI, Theme } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'
};

export interface APIResponse<T> {
  data: T;
  meta?: {
    total: number;
    page: number;
    pageSize: number;
  };
}

export const api = {
  async getPOIs(params?: {
    search?: string;
    categories?: string[];
    isRecruiting?: boolean;
    page?: number;
    pageSize?: number;
  }): Promise<APIResponse<POI[]>> {
    const queryParams = new URLSearchParams();
    if (params?.search) queryParams.set('search', params.search);
    if (params?.categories?.length) queryParams.set('categories', params.categories.join(','));
    if (params?.isRecruiting !== undefined) queryParams.set('isRecruiting', String(params.isRecruiting));
    if (params?.page) queryParams.set('page', String(params.page));
    if (params?.pageSize) queryParams.set('pageSize', String(params.pageSize));

    const response = await fetch(`${API_BASE_URL}/pois?${queryParams}`, { headers });
    if (!response.ok) {
      throw new Error('Failed to fetch POIs');
    }
    return response.json();
  },

  async getThemes(): Promise<APIResponse<Theme[]>> {
    const response = await fetch(`${API_BASE_URL}/themes`, { headers });
    if (!response.ok) {
      throw new Error('Failed to fetch themes');
    }
    return response.json();
  },

  async getPOIById(id: string): Promise<POI> {
    const response = await fetch(`${API_BASE_URL}/pois/${id}`, { headers });
    if (!response.ok) {
      throw new Error('Failed to fetch POI');
    }
    return response.json();
  }
};

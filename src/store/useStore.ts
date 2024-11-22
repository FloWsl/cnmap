import { create } from 'zustand';
import { Point, POI, ViewMode } from '../types';
import { api } from '../services/api';

interface Store {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  userLocation: Point | null;
  setUserLocation: (location: Point | null) => void;
  selectedPOI: POI | null;
  setSelectedPOI: (poi: POI | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  filteredPOIs: POI[];
  isLoading: boolean;
  error: string | null;
  fetchPOIs: () => Promise<void>;
  clearError: () => void;
}

export const useStore = create<Store>((set, get) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
  userLocation: null,
  setUserLocation: (location) => set({ userLocation: location }),
  selectedPOI: null,
  setSelectedPOI: (poi) => set({ selectedPOI: poi }),
  searchQuery: '',
  setSearchQuery: async (query) => {
    set({ searchQuery: query });
    await get().fetchPOIs();
  },
  activeFilters: [],
  toggleFilter: async (filter) => {
    set((state) => ({
      activeFilters: state.activeFilters.includes(filter)
        ? state.activeFilters.filter((f) => f !== filter)
        : [...state.activeFilters, filter]
    }));
    await get().fetchPOIs();
  },
  viewMode: 'themes',
  setViewMode: async (mode) => {
    set({ viewMode: mode });
    await get().fetchPOIs();
  },
  filteredPOIs: [],
  isLoading: false,
  error: null,
  clearError: () => set({ error: null }),
  fetchPOIs: async () => {
    const state = get();
    set({ isLoading: true, error: null });
    
    try {
      const response = await api.getPOIs({
        search: state.searchQuery,
        categories: state.activeFilters,
        isRecruiting: state.viewMode === 'jobs' ? true : undefined
      });
      
      set({ filteredPOIs: response.data });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  }
}));

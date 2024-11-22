export interface Point {
  x: number;
  y: number;
}

export interface POI {
  id: string;
  name: string;
  category: string;
  description: string;
  position: Point;
  isRecruiting?: boolean;
  jobs?: string[];
}

export interface MapState {
  scale: number;
  translation: Point;
}

export interface Theme {
  id: string;
  name: string;
  icon: React.ComponentType;
}

export type ViewMode = 'themes' | 'jobs';

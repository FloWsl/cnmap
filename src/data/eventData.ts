import { POI } from '../types';
import { 
  Leaf, Brain, Recycle, Building2, GraduationCap, Zap, 
  Shirt, Shield, Apple, Globe2, Heart, Users, Car, Mountain,
  Waves, Trophy, Cpu, Building, MapPin
} from 'lucide-react';

export const themes = [
  { id: 'ecosystem', name: 'Accelerate the ecosystem', icon: Leaf },
  { id: 'biodiversity', name: 'Biodiversity', icon: Leaf },
  { id: 'habits', name: 'Changing Habits', icon: Brain },
  { id: 'circular', name: 'Circular Economy', icon: Recycle },
  { id: 'cities', name: 'Cities', icon: Building2 },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'energy', name: 'Energy', icon: Zap },
  { id: 'fashion', name: 'Fashion', icon: Shirt },
  { id: 'responders', name: 'First Responders', icon: Shield },
  { id: 'food', name: 'Food & Agriculture', icon: Apple },
  { id: 'networks', name: 'Global Networks', icon: Globe2 },
  { id: 'health', name: 'Health', icon: Heart },
  { id: 'inclusion', name: 'Inclusion', icon: Users },
  { id: 'mobility', name: 'Mobility & transport', icon: Car },
  { id: 'mountain', name: 'Mountain', icon: Mountain },
  { id: 'ocean', name: 'Ocean & Water', icon: Waves },
  { id: 'sport', name: 'Sport', icon: Trophy },
  { id: 'tech', name: 'Tech & AI', icon: Cpu }
];

export const pois: POI[] = [
  {
    id: 'tech-1',
    name: 'AI Innovation Hub',
    category: 'tech',
    description: 'Showcasing latest AI developments in sustainability',
    position: { x: 0.2, y: 0.3 },
    isRecruiting: true,
    jobs: ['AI Engineer', 'Machine Learning Researcher']
  },
  {
    id: 'eco-1',
    name: 'Biodiversity Station',
    category: 'biodiversity',
    description: 'Interactive exhibition on local ecosystems',
    position: { x: 0.4, y: 0.2 }
  },
  {
    id: 'energy-1',
    name: 'Renewable Energy Zone',
    category: 'energy',
    description: 'Solar and wind energy demonstrations',
    position: { x: 0.6, y: 0.4 },
    isRecruiting: true,
    jobs: ['Solar Panel Technician', 'Wind Farm Engineer']
  },
  {
    id: 'health-1',
    name: 'Health Tech Pavilion',
    category: 'health',
    description: 'Digital health solutions showcase',
    position: { x: 0.3, y: 0.6 },
    isRecruiting: true,
    jobs: ['Healthcare Data Analyst', 'Medical Device Engineer']
  },
  {
    id: 'food-1',
    name: 'Sustainable Agriculture Demo',
    category: 'food',
    description: 'Vertical farming and agritech solutions',
    position: { x: 0.7, y: 0.5 }
  },
  {
    id: 'fashion-1',
    name: 'Sustainable Fashion Hub',
    category: 'fashion',
    description: 'Eco-friendly textile innovations',
    position: { x: 0.5, y: 0.7 },
    isRecruiting: true,
    jobs: ['Textile Engineer', 'Sustainable Fashion Designer']
  }
] as const;

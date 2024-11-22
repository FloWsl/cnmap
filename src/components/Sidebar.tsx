import React from 'react';
import { Filter, Briefcase, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { themes } from '../data/eventData';

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const { activeFilters, toggleFilter, viewMode, setViewMode, filteredPOIs } = useStore();

  return (
    <div className="w-full md:w-80 h-full bg-white dark:bg-gray-900 shadow-lg flex flex-col">
      <div className="p-4 border-b dark:border-gray-800 flex items-center justify-between">
        <div className="flex gap-2 flex-1">
          <button
            onClick={() => setViewMode('themes')}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              viewMode === 'themes'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Filter className="w-4 h-4 inline-block mr-2" />
            Themes
          </button>
          <button
            onClick={() => setViewMode('jobs')}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              viewMode === 'jobs'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Briefcase className="w-4 h-4 inline-block mr-2" />
            Job Fair
          </button>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-2">
          {themes.map((theme) => {
            const Icon = theme.icon;
            const count = filteredPOIs.filter(poi => poi.category === theme.id).length;
            
            return (
              <button
                key={theme.id}
                onClick={() => toggleFilter(theme.id)}
                className={`w-full px-4 py-2 rounded-lg text-left transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeFilters.includes(theme.id)
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate flex-1">{theme.name}</span>
                <span className="text-sm bg-white/10 px-2 py-0.5 rounded-full">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      {viewMode === 'jobs' && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border-t dark:border-gray-800">
          <h3 className="font-semibold text-green-800 dark:text-green-100 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Recruiting Companies
          </h3>
          <p className="text-sm text-green-600 dark:text-green-200 mt-1">
            Look for green markers on the map for companies that are currently recruiting.
          </p>
        </div>
      )}
    </div>
  );
};
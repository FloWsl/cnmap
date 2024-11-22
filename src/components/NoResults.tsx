import React from 'react';
import { SearchX } from 'lucide-react';

export const NoResults: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <div className="text-center p-4">
      <SearchX className="w-12 h-12 text-gray-400 mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">No results found</h3>
      <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
    </div>
  </div>
);
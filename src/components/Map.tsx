import React, { useCallback, useState, useEffect } from 'react';
import { MapInteractionCSS } from 'react-map-interaction';
import { Crosshair, MapPin, X, ZoomIn, ZoomOut, AlertTriangle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { POI } from '../types';
import { NoResults } from './NoResults';
import { mapConfig } from '../config/map';
import { LoadingSpinner } from './LoadingSpinner';

export const Map: React.FC = () => {
  // ... previous code remains the same ...

  return (
    <div className="relative flex-1 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      {isLoading && <LoadingSpinner fullScreen />}

      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <MapInteractionCSS
        value={mapState}
        onChange={setMapState}
        minScale={0.5}
        maxScale={4}
        showControls={false}
        className="w-full h-full"
      >
        <div 
          className="relative bg-white"
          style={{
            width: mapConfig.width,
            height: mapConfig.height,
            margin: '0 auto'
          }}
        >
          <img
            src={mapConfig.imageUrl}
            alt="ChangeNOW Summit 2024 Map"
            className="w-full h-full object-contain"
            onError={() => setMapError(true)}
          />
          
          {/* Rest of the code remains the same */}
        </div>
      </MapInteractionCSS>

      {/* Controls remain the same */}
    </div>
  );
};
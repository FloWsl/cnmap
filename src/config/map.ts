export const mapConfig = {
  imageUrl: import.meta.env.VITE_MAP_IMAGE_URL,
  width: parseInt(import.meta.env.VITE_MAP_WIDTH, 10),
  height: parseInt(import.meta.env.VITE_MAP_HEIGHT, 10),
  // Coordinate system conversion (from pixels to relative)
  toRelative: (x: number, y: number) => ({
    x: x / parseInt(import.meta.env.VITE_MAP_WIDTH, 10),
    y: y / parseInt(import.meta.env.VITE_MAP_HEIGHT, 10)
  }),
  // Convert relative coordinates back to pixels
  toPixels: (x: number, y: number) => ({
    x: x * parseInt(import.meta.env.VITE_MAP_WIDTH, 10),
    y: y * parseInt(import.meta.env.VITE_MAP_HEIGHT, 10)
  })
};

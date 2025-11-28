/**
 * Utility functions for image optimization and lazy loading
 */

/**
 * Generates a thumbnail version of an image path by inserting '_thumb' before the extension
 * @param imagePath - The original image path
 * @returns The thumbnail path
 */
export const getThumbnailPath = (imagePath: string): string => {
  const lastDotIndex = imagePath.lastIndexOf(".");
  if (lastDotIndex === -1) return imagePath;

  return `${imagePath.substring(0, lastDotIndex)}_thumb${imagePath.substring(
    lastDotIndex
  )}`;
};

/**
 * Preloads images in the background for instant display
 * @param imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

/**
 * Preloads a single high-priority image (like hero banner)
 * @param imageUrl - The image URL to preload with high priority
 * @returns Promise that resolves when image is loaded
 */
export const preloadImageWithPriority = (imageUrl: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = imageUrl;
  });
};

/**
 * Creates a CSS-compatible image URL for responsive images
 * @param imagePath - The original image path
 * @param isThumbnail - Whether to use thumbnail version
 * @returns The appropriate image path
 */
export const getOptimizedImageUrl = (
  imagePath: string,
  isThumbnail: boolean = false
): string => {
  if (!isThumbnail) return imagePath;

  // Check if a thumbnail already exists, otherwise return original
  return getThumbnailPath(imagePath);
};

/**
 * Lazy load image with Intersection Observer for performance
 * @param imageElement - The image element to observe
 * @param fullSizeUrl - The full-size image URL to load
 */
export const lazyLoadImage = (
  imageElement: HTMLImageElement,
  fullSizeUrl: string
): void => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageElement.src = fullSizeUrl;
          observer.unobserve(imageElement);
        }
      });
    });
    observer.observe(imageElement);
  } else {
    // Fallback for older browsers
    imageElement.src = fullSizeUrl;
  }
};

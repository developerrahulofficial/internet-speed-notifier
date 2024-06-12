export async function checkInternetSpeed() {
    const imageUrls = [
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Example.jpg', // Example image URL
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', // Google logo
      'https://via.placeholder.com/500' // Placeholder image
    ];
    const imageSize = 500000; // Approximate size of the image in bytes (adjust accordingly)
  
    for (let imageUrl of imageUrls) {
      try {
        return await new Promise((resolve, reject) => {
          const startTime = new Date().getTime();
          const img = new Image();
  
          img.onload = () => {
            const endTime = new Date().getTime();
            const duration = (endTime - startTime) / 1000; // Time in seconds
            const bitsLoaded = imageSize * 8; // Convert bytes to bits
            const speedMbps = (bitsLoaded / duration / 1024 / 1024).toFixed(2); // Convert to Mbps
            console.log(`Image loaded in ${duration} seconds, speed: ${speedMbps} Mbps`);
            resolve(speedMbps);
          };
  
          img.onerror = (err) => {
            console.error(`Error loading image from ${imageUrl}`, err);
            reject(new Error('Failed to load image for speed test'));
          };
  
          // Adding cache buster to avoid cached results
          img.src = `${imageUrl}?cacheBuster=${startTime}`;
        });
      } catch (error) {
        console.error(`Error with image ${imageUrl}:`, error);
      }
    }
  
    throw new Error('Failed to load any image for speed test');
  }
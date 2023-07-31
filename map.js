function initMap() {
    fetch('/api/google-maps-key') // Change the URL to the route that fetches the API key on your server
        .then((response) => response.json())
        .then((data) => {
            const GOOGLE_MAPS_API_KEY = data.apiKey;
            const scriptTag = document.createElement('script');
            scriptTag.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
            scriptTag.async = true;
            scriptTag.defer = true;
            scriptTag.onerror = handleMapError; // Set the error handler
            document.head.appendChild(scriptTag);
        })
        .catch((error) => {
            console.error('Error fetching Google Maps API key:', error);
            handleMapError(); // Call the error handler in case of fetch error
        });
}

function handleMapError() {
    // Function to display an error message
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = '<div style="text-align: center; font-size: 18px; padding: 20px;">Failed to load the map. Please try again later.</div>';
}

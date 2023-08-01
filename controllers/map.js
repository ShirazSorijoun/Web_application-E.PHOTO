   // Function to initialize the Google Map
   function initMap() {
    fetch('/api/store-location')
        .then((response) => response.json())
        .then((data) => {
            const map = new google.maps.Map(document.getElementById('map-container'), {
                center: { lat: data[0].lat, lng: data[0].lng },
              zoom: 11,
            });

            // Add markers for all store locations
            data.forEach((location) => {
                const marker = new google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.name,
                });
            });
        })
        .catch((error) => {
            console.error('Error fetching store location data:', error);
            // Display a message on the page if there was an error fetching the data
            const mapContainer = document.getElementById('map-container');
            mapContainer.innerHTML = 'Failed to load the map. Please try again later.';
        });
}

const apiKeyUrl = '/api/google-maps-key';

fetch(apiKeyUrl)
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

function handleMapError() {
    // Function to display an error message
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = '<div style="text-align: center; font-size: 18px; padding: 20px;">Failed to load the map. Please try again later.</div>';
}

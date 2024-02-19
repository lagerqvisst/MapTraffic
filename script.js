mapboxgl.accessToken = 'pk.eyJ1IjoibGFnZXJxdmlzdCIsImEiOiJjbHNrMmNwcTUxNzczMmpsaGFjMzh6MWFtIn0.6cjiMbGIR-pQOklsFYjDSg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [11.971643, 57.700421], // starting position [lng, lat]
    zoom: 15 // starting zoom
});



const accessToken = 'eyJ4NXQiOiJaV05sTURNNE56SmpZelZrT1dFNU16RTFNalF5TTJaaE5XSm1ORE0zWkRVMk9HRXdOVGxqWVRjNE1tWTNPRGcwWW1JeFlqSTFPVGMzTjJWallqZzRNdyIsImtpZCI6IlpXTmxNRE00TnpKall6VmtPV0U1TXpFMU1qUXlNMlpoTldKbU5ETTNaRFUyT0dFd05UbGpZVGM0TW1ZM09EZzBZbUl4WWpJMU9UYzNOMlZqWWpnNE13X1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJGYkRvcXpOcEtrTmlJVGNmOVNXYlJ3OEZ4N29hIiwiYXV0IjoiQVBQTElDQVRJT04iLCJiaW5kaW5nX3R5cGUiOiJyZXF1ZXN0IiwiaXNzIjoiaHR0cHM6XC9cL2V4dC1hcGkudmFzdHRyYWZpay5zZVwvdG9rZW4iLCJ0aWVySW5mbyI6eyJVbmxpbWl0ZWQiOnsidGllclF1b3RhVHlwZSI6InJlcXVlc3RDb3VudCIsImdyYXBoUUxNYXhDb21wbGV4aXR5IjowLCJncmFwaFFMTWF4RGVwdGgiOjAsInN0b3BPblF1b3RhUmVhY2giOnRydWUsInNwaWtlQXJyZXN0TGltaXQiOjAsInNwaWtlQXJyZXN0VW5pdCI6bnVsbH19LCJrZXl0eXBlIjoiUFJPRFVDVElPTiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6ImFwaTAwMTMtcHIiLCJjb250ZXh0IjoiXC9wclwvdjQiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiJ2NCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sImF1ZCI6Imh0dHBzOlwvXC9leHQtYXBpLnZhc3R0cmFmaWsuc2UiLCJuYmYiOjE3MDgzNDMyMjAsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoiRmJEb3F6TnBLa05pSVRjZjlTV2JSdzhGeDdvYSIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiTWFwdGVzdGluZyIsImlkIjoyMjQ4LCJ1dWlkIjoiZTljNTc2NDgtZjhhNy00NDIxLWE1NzktMjJjN2FmYTQzZjU0In0sImF6cCI6IkZiRG9xek5wS2tOaUlUY2Y5U1diUnc4Rng3b2EiLCJzY29wZSI6ImFwaW06c3Vic2NyaWJlIiwiZXhwIjoxNzA4NDI5NjIwLCJpYXQiOjE3MDgzNDMyMjAsImJpbmRpbmdfcmVmIjoiYzIxZjY3MDJiNmVlZjE3YmZhNTIyN2NmNDlmNTU4NjciLCJqdGkiOiIzNjQ1YTU1NS01YzMzLTRmMmQtYWRiOC1hY2Q2MzBmZDRkN2UifQ.DIxex-2VNG_NssmC9OwcI-ZCZeKSnW6V6rx84iqa7IrIizljHAg3b3AlpbqMSV5WGkXE6v0e-6MwnTaHYpAWdpNn4toCGKcwmNKKD2BOS_SdCmaYYEWtV_4iQpXHaBF2KVRv8Hhq8TnhIgN2jtTBE4QbFrZD2LUyebJ9QqNvkBLDzjxG1zltoro8_MNnBaPejECukcNNTQvKwT5R5eEPJGXahTkAi-1E6RQvyeKfWbgcR7z0-Cn_C0Gd4SuVc4r5HkjaDtNYgJHDopjU7n3ATGNXX5zcBtSED90KH4WzCyqFTfcHMRU34QPw99IHkgtNOBmqtqSUaRJshYsVJnfRwQ';




function updateMarkers(data) {
  // Ta bort befintliga markörer från kartan
  document.querySelectorAll('.marker').forEach(marker => marker.remove());

  // Lägg till nya markörer med den uppdaterade datan
  data.forEach(point => {
      // Skapa ett markörelement
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';

      
      // Skapa ett kontainerelement för innehållet
      const contentContainer = document.createElement('div');
      contentContainer.className = 'content-container';

      // Skapa en textnod för namnet och lägg till den i kontainerelementet
      const nameText = document.createTextNode(point.name);
      const nameElement = document.createElement('div');
      nameElement.style.backgroundColor = point.line.backgroundColor; // Använd bakgrundsfärgen från API:et
      nameElement.style.color = point.line.foregroundColor; // Använd textfärgen från API:et

      nameElement.appendChild(nameText);
      nameElement.className = 'name';
      contentContainer.appendChild(nameElement);

      // Skapa en bild för transportläget och lägg till den i kontainerelementet
      const transportImage = document.createElement('img');
      const transportMode = point.line.transportMode;
      switch (transportMode) {
        case 'tram':
          transportImage.src = '/images/tram.svg';
          break;
        case 'bus':
          transportImage.src = '/images/bus.svg';
          break;
        case 'ferry':
          transportImage.src = '/images/ferry.svg';
          break;
        case 'train':
          transportImage.src = '/images/train.svg';
          break;
        case 'taxi':
          transportImage.src = '/images/bus.svg';
          break;
        default:
          // Om transportMode inte matchar någon av de förväntade värdena, använd en standardbild
          transportImage.src = '/image/bus.svg';
          break;
      }
      transportImage.className = 'transport-image';
      contentContainer.appendChild(transportImage);

      // Lägg till kontainerelementet till markörelementet
      markerElement.appendChild(contentContainer);

      // Skapa en popup för markören
      const popup = new mapboxgl.Popup().setHTML(`<h3>${point.name}</h3><p>${point.direction}</p>`);

      // Lägg till markören till kartan
      new mapboxgl.Marker(markerElement)
          .setLngLat([point.longitude, point.latitude])
          .setPopup(popup)
          .addTo(map);
  });
}





// Händelselyssnare för när kartans vy ändras
map.on('moveend', function() {
  // Hämta kartans gränser (längst upp till vänster och längst ner till höger)
  var bounds = map.getBounds();
  var topLeft = bounds.getNorthWest();
  var bottomRight = bounds.getSouthEast();

  // Bygg upp URL-parametrarna för API-anropet
  var url = 'https://ext-api.vasttrafik.se/pr/v4/positions?' +
            'lowerLeftLat=' + bottomRight.lat +
            '&lowerLeftLong=' + topLeft.lng +
            '&upperRightLat=' + topLeft.lat +
            '&upperRightLong=' + bottomRight.lng +
            '&limit=100';

  // Gör ett HTTP-anrop till API:et
  fetch(url, {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Uppdatera kartan med de nya data som returnerats från API:et
      updateMarkers(data);
      console.dir(data);
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
});


// Funktion för att hämta och uppdatera data från API:et
function fetchDataAndRefreshMap() {
  // Hämta kartans gränser (längst upp till vänster och längst ner till höger)
  var bounds = map.getBounds();
  var topLeft = bounds.getNorthWest();
  var bottomRight = bounds.getSouthEast();

  // Bygg upp URL-parametrarna för API-anropet
  var url = 'https://ext-api.vasttrafik.se/pr/v4/positions?' +
            'lowerLeftLat=' + bottomRight.lat +
            '&lowerLeftLong=' + topLeft.lng +
            '&upperRightLat=' + topLeft.lat +
            '&upperRightLong=' + bottomRight.lng +
            '&limit=100';

  // Gör ett HTTP-anrop till API:et
  fetch(url, {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Uppdatera kartan med den nya datan från API:et
      updateMarkers(data);
      console.dir(data);
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
}

// Funktion för att schemalägga uppdateringar av kartan med jämna mellanrum
function scheduleMapUpdates() {
  // Uppdatera kartan direkt vid start

  // Schemalägg uppdateringar av kartan med jämna mellanrum (t.ex. var 5:e minut)
  setInterval(fetchDataAndRefreshMap, 1000); // 300000 millisekunder = 5 minuter
}

// Anropa funktionen för att schemalägga uppdateringar
scheduleMapUpdates();

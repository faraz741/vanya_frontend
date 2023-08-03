import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const ee: any;
declare const google: any;
@Component({
  selector: 'app-earth-engine',
  templateUrl: './earth-engine.component.html',
  styleUrls: ['./earth-engine.component.css'],
})
export class EarthEngineComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isMapsLoaded = false;
  display : string = "none"

  CLIENT_ID =
    '482162305766-cvtmlda254j5gnumirv9esklc05b6ekj.apps.googleusercontent.com';
  // this is video link kml
  url =
    'https://drive.google.com/uc?export=download&id=10F7nmwxjUwgXTxlTSSYcPY-1VJ13nIlM';
  // url= "https://drive.google.com/uc?export=download&id=17gq0s4W_4fsBBYuTG_YI9fiOevDqiGH-";
  // url= "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss";
  constructor() {}

  // ngOnInit() {
  //   this.initMap();
  // }
  ngAfterViewInit() {
    // this.videoPlayer.nativeElement.addEventListener('loadeddata', () => {
    //   setTimeout(() => {
    //     this.isMapsLoaded = true;
    //     this.display='block'
    //     this.initMap();

    //   }, 3000); // Wait for 5 seconds before loading Google Maps
    // });
  }

  initMap(): void {
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 5,
        center: { lat: 22.7196, lng: 75.8577 },

      }
    );
    this.isMapsLoaded = true;
    // geoJson Code Starts ------>>>>

    map.data.loadGeoJson('assets/data.json');

  // Create an InfoWindow instance
  const infoWindow = new google.maps.InfoWindow();

  // Add a click event listener to the Data layer to detect clicks on polygons
  map.data.addListener('click', (event: any) => {
    console.log(event)
    const feature = event.feature;
    const position = event.latLng;
    const rectangle = feature.getProperty('rectangle'); // Assuming properties are stored under 'properties' key in the GeoJSON
    const marker = feature.getProperty('point'); // Assuming properties are stored under 'properties' key in the GeoJSON

    console.log('Clicked on a polygon');
    console.log('Polygon properties:', rectangle);

    if (rectangle) {
      // Set the content of the InfoWindow based on the properties of the GeoJSON feature
      const content = '<p>Image</p><img src="assets/images/1.jpg" alt="Girl in a jacket" width="100" height="100">'; // Modify this based on your GeoJSON properties
      infoWindow.setContent(content);

      // Set the InfoWindow position to the clicked polygon's position
      infoWindow.setPosition(position);

      // Open the InfoWindow on the map
      infoWindow.open(map);
    }
    if (marker) {
      // Set the content of the InfoWindow based on the properties of the GeoJSON feature
      const content = '<p>marker</p><img src="assets/images/2.jpg" alt="Girl in a jacket" width="100" height="100">'; // Modify this based on your GeoJSON properties
      infoWindow.setContent(content);

      // Set the InfoWindow position to the clicked polygon's position
      infoWindow.setPosition(position);

      // Open the InfoWindow on the map
      infoWindow.open(map);
    }
  });

    // Wait for the GeoJSON data to load
    google.maps.event.addListenerOnce(map.data, 'addfeature', () => {
      const bounds = new google.maps.LatLngBounds();
      map.data.forEach((feature: any) => {
        this.processPoints(feature.getGeometry(), bounds.extend, bounds);
      });
      // map.fitBounds(bounds);

      // Calculate the centroid of all the features and set it as the map center
      const centroid = bounds.getCenter();
      map.setCenter(centroid);

      // Set a minimum zoom level to ensure all features are visible
      const minZoomLevel = 17;
      const zoom = map.getZoom();
      map.setZoom(Math.max(zoom, minZoomLevel));
    });
  }

  // Helper function to process GeoJSON points and extend the bounds
  processPoints(geometry: any, callback: any, thisArg: any) {
    if (geometry instanceof google.maps.LatLng) {
      callback.call(thisArg, geometry);
    } else if (geometry instanceof google.maps.Data.Point) {
      callback.call(thisArg, geometry.get());
    } else {
      geometry.getArray().forEach((g: any) => {
        this.processPoints(g, callback, thisArg);
      });
    }
  }

  // kml code starts ------->>>>

  // const kmlLayer = new google.maps.KmlLayer(this.url, {
  //   suppressInfoWindows: true,
  //   preserveViewport: true,
  //   map: map,
  // });

  // // / Define the target zoom level
  // const targetZoom = 10; // Adjust the final zoom level as you desire

  // // Calculate the number of steps and the time interval for the gradual zoom
  // const zoomSteps = 2; // Adjust the number of steps (smaller value for a slower effect)
  // const zoomInterval = 2000 / zoomSteps; // Total time for the zoom effect (1 second in this example)

  // // Calculate the difference in zoom levels
  // const zoomDiff = targetZoom - map.getZoom();

  // let currentStep = 0;
  // const zoomInInterval = setInterval(() => {
  //   // Calculate the new zoom level for this step
  //   const newZoom = map.getZoom() + zoomDiff / zoomSteps;

  //   // Set the new zoom level
  //   map.setZoom(newZoom);

  //   // Increment the current step
  //   currentStep++;

  //   // If all steps are completed, clear the interval
  //   if (currentStep >= zoomSteps) {
  //     clearInterval(zoomInInterval);
  //     const defaultViewport = kmlLayer.getDefaultViewport();
  //     map.fitBounds(defaultViewport);
  //   }
  // }, zoomInterval);

  // kmlLayer.addListener('click', function (event: any) {
  //   console.log('clicked');
  //   var content = event.featureData.infoWindowHtml;
  //   var testimonial = document.getElementById('capture') as HTMLElement;
  //   testimonial.innerHTML = content;
  // });
  // }

  // kml code ends --------->>>>>>>>>>>>
  onSubmit(recipeForm:any){

 
  }
}




import React from "react";

class Map extends React.Component {
 markers =[];
 //adding the markers
  addMarkers = locations => {
    if (window.google) {
        let infoWindow = new window.google.maps.InfoWindow();
      for (let i = 0; i < locations.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: locations[i].venue.location.lat,
            lng: locations[i].venue.location.lng
          },
          map: window.mapObject,
          title: locations[i].venue.id
        });
        // let infowindow = new window.google.maps.InfoWindow();
        marker.addListener("click", () => {
          let content = this.props.getInfoContent(locations[i]);
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(function() {
            marker.setAnimation(null);
          }, 250);
          infoWindow.setContent(content);
          infoWindow.open(window.mapObject, marker);
        });

        this.markers.push(marker);
      }
      window.markers = this.markers;
      window.infoWindow = infoWindow;
    }
  };
//Displaying the marker  when the place exist which we are finding
 removeMapMarker = () => {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  };

  render() {
    this.removeMapMarker();
    this.addMarkers(this.props.locations);
    return <div id="map" />;
  }
}

export default Map;

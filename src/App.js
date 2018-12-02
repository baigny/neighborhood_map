//loading the map from google map apis
import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  initMap() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
          center:  {lat: 12.9141, lng: 74.8560},
          zoom: 12
  });
    window.mapObject =map;
}
  loadScript(){
      let scriptElement= this.createMapScript();
      let scriptsOnPage = document.getElementsByTagName('script');
      let script = scriptsOnPage[0];
      script.parentNode.insertBefore(scriptElement, script);
      window.initMap =  this.initMap;
  }

  createMapScript(){
    let mapScript= document.createElement("script");
    const API = 'AIzaSyCfx6mLydsTd_YclVPsUzPbUc0X5S44fNk';
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=initMap`;
    mapScript.defer=true;
    mapScript.async = true;
    return mapScript;
  }
  render() {
    this.loadScript();
    return (
      
       <div className="App">
        <Header/>
        <Content/>
       </div>
      )
  }
}
export default App;

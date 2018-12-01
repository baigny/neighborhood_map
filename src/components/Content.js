import React from "react";
import Map from "./Map";
import List from "./List";
import * as LocationsAPI from "../api/Location.js";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      markers: [],
      allLocations:[],
      query:"",
    };
  }

  componentDidMount() {
    //console.log(LocationsAPI.getLocations);
    LocationsAPI.getLocations()
      .then(resp => resp.json())
      .then(result =>
        this.setState({ locations: result.response.groups[0].items, allLocations:result.response.groups[0].items})
      );
  }
  
  handleClick = (location, markers) => {
    for (let i = 0; i < markers.length; i++) {
      if (location.venue.id === markers[i].title) {
        let content = this.prepareContent(location);

        markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function() {
          markers[i].setAnimation(null);
        }, 300);
        window.infoWindow.setContent(content);
        window.infoWindow.open(window.mapObject, markers[i]);
        markers[i].open = true;
      }
    }
  };
  prepareContent= location =>{
    return `<div><p className="placeName">Name:<a href="#">${
      location.venue.name
    }</a></p><p className="addressName">Address:${
      location.venue.location.address
    }</p></div>`;
  };

  handleInputChange = query =>{
    this.setState({query});
    if (query){
      this.setState({
        locations:this.filterLocations(query, this.state.locations)
      });
    } else{
      this.setState({locations:this.state.allLocations});
    }
  };
  filterLocations= (query, locations)=> {
    return locations.filter(location=>
      location.venue.name.toLowerCase().includes(query.toLowerCase())
    );
  };
  render() {
    //console.log(this.state.locations);
    return (
      <div className="sideBars">
        {/*content*/}
        <List locations={this.state.locations} handleClick={this.handleClick} queryString={this.state.queryString} handleChange={this.handleInputChange} />
        <Map
          getInfoContent={this.prepareContent}
          locations={this.state.locations}
        />
      </div>
    );
  }
}

export default Content;

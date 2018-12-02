
// A sidebar that renders the list that consist of various Hotel located in Mangaluru  within radius of 40km
import React from "react";



class List extends React.Component{
	render(){
		
			return (
			
			<div id="sideBars">
				<h2>Locations</h2>
				<input type="text" autoFocus={true} tabIndex="0" role="search" placeholder="Type hotel's Name"id="search" value ={this.props.queryString} onChange={ (e)=> this.props.handleChange(e.target.value)}/>
					<ol>
						{ this.props.locations.map(location =>(
						 <li role="list" key={location.venue.id}>
							<div>
								<p className="placeName">Name:<a href="./#" onClick={() =>this.props.handleClick(location, window.markers)}>{location.venue.name}</a></p>
								<p className="addressName"> Address:{location.venue.location.address}</p>
							</div>
						 </li>
						))}
					</ol>
			</div>
		);
	}
}


export default List;

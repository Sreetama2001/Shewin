import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import axios from 'axios';


const NearClinic = () => {



    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 10
      };
    
      let obj = {
        title: "",
        latitude: "",
        longitude: ""
      }
    
      const [ coordinates , setcoordinates] = useState([{}]);
    
      const NasaData = async()=>{
        const res = await axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=50&days=10");
        let temp = [];
        temp = [];
        for(let i =0 ;i<res.data.events.length;i++){
           temp.push({
            title: res.data.events[i].title,
            longitude: res.data.events[i].geometries[i].coordinates[0],
            latitude: res.data.events[i].geometries[i].coordinates[1]
           });
        }
    
        console.log(res.data);
        setcoordinates([{}]);
        setcoordinates(temp);
        temp=[];
    } 
    
    console.log("cgeck" , coordinates);
      useEffect(()=>{
          NasaData();
      },[]);

      


	return (
		<div className="clinic">
			<h1>Maps</h1>
			{/* // Important! Always set the container height explicitly */}
			{/* <div style={{ height: "90vh", width: "100%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyC1mpaHajUPWU696t2u2xboKThZC-lRnnA" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				></GoogleMapReact>
			</div> */}
            <iframe src="https://maps.google.com/maps?ll=18.472329,73.912398&q=hospitals&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="1300" height="900" allowfullscreen ></iframe>
		</div>
	);
};

export default NearClinic;

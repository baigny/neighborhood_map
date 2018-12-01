
//Fetching the places using the foursquare API 
const CLIENT_ID="GRGUWHNQ3JNAIEFC5XGV5M30JITFGEJZLUTW5OZK5W4QETPT"
const CLIENT_SECRET="Y3PLTEHIX1RYWJMKC1IDADQE35IMF3ZXX4UMNFEMFSPZ40XK"

 export  const getLocations =() =>{
return fetch(` https://api.foursquare.com/v2/venues/explore?ll=12.9141,74.8560&near=mangalore&radius=40&section=FOOD&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181127`)

};


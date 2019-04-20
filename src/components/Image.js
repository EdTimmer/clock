import React from 'react';

const NASA_API_KEY = "YB14DLrgLJBdqpmzDgKe0E5esvrjmzSvPmHvQy4z";

// const api_call = await fetch(`https://api.nasa.gov/planetary/apod?api_key=YB14DLrgLJBdqpmzDgKe0E5esvrjmzSvPmHvQy4z`);

class Image extends React.Component {
  state = {
    imageURL: "",
  }

  componentDidMount() {
    this.getNASA()
      // .then((data) => console.log('data in componentDidMount is: ', data))   
  }   

  getNASA = async () => {
    const api_call = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    const data = await api_call.json();
    this.setState({
      imageURL: data.url
    })
    console.log('data in NASA call: ', data)
  }
  render() {
    return (
      <div>   
        <img src={this.state.imageURL} />
      </div>
    )
  }
}

export default Image;

/*
componentDidMount() {
    let cachedLat = localStorage.getItem(‘latitude’);
    let cachedLon = localStorage.getItem(‘longitude’);
    cachedLat ? 
     this.setCoordsFromLocalStorage(cachedLat, cachedLon) :
     this.getCoords();
   }

   getCoords() {
    if (window.navigator.geolocation) { 
     navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem(‘latitude’, position.coords.latitude);
      localStorage.setItem(‘longitude’, position.coords.longitude);
      this.callWeatherApi(position.coords.latitude,
                          position.coords.longitude,
                          “geo”)
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    }, (error) => {
     this.setState({
      error: error.message,
     });
    });
    } 
   }

  localStorage.setItem(‘latitude’, position.coords.latitude);
  localStorage.setItem(‘longitude’, position.coords.longitude);
*/
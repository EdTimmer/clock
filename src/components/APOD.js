import React from 'react';
import Spinner from './Spinner';

class APOD extends React.Component {
  state = {
    imageURL: undefined,
    title: undefined,
    explanation: undefined,
  }

  componentDidMount() {
    this.getNASA();
  }   

  getNASA = async () => {
    const api_call = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
    const data = await api_call.json();
    this.setState({
      imageURL: data.url,
      title: data.title,
      explanation: data.explanation,
    })
  }
  render() {
    const { imageURL, title, explanation } = this.state;
    return (
      <div>   
        <div className="image-heading-container">
          <a className="image-heading" href="https://apod.nasa.gov/apod/astropix.html" rel="noopener noreferrer" target="_blank">nasa astronomy picture of the day</a>
        </div>        
        {
          imageURL ? 
            (<a className="image-heading" href="https://apod.nasa.gov/apod/astropix.html" rel="noopener noreferrer" target="_blank"><img className="image" src={imageURL} alt="astronomy_picture_of_the_day" /></a>)        
            : 
            (<Spinner />)
        }
        <div className="image-title">{title}</div>
        <div className="image-explanation">{explanation}</div>
      </div>
    )
  }
}

export default APOD;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieImdbIdArray: [
        "tt0133093" /* the matrix */, 
        "tt3896198" /* guardians of the galaxy, vol. 2 */,
        "tt0107120" /* hocus pocus */,
        "tt0115963" /* the craft */
      ],
      buttonState: false,
      data: null,
    }
  }

  fetchApiData = () => {
    let chosenId = this.state.movieImdbIdArray[Math.floor(Math.random() * (this.state.movieImdbIdArray.length))]
    console.log(chosenId);
    fetch(`http://www.omdbapi.com/?apikey=4048f070&i=${chosenId}`)
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }


  toggleButtonState = () => {
    this.setState({buttonState: true});
    this.fetchApiData();
  }

  render() {
    let { data } = this.state;
    
    return (
      <div className="App">
        <div
          className="button-div"
          onClick={this.toggleButtonState}
        >
          Find a Movie
        </div>

        <div className="movie-info-div">
          {this.state.buttonState && data ? (
            <p>{data.Title}</p>
          ):(
            <p>No movie found....</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;

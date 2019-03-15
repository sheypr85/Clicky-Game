import React, {
  Component
} from 'react';
import Nav from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import PictureCard from './components/Cards';
import Score from './components/Score';
import pictures from "./pictures.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pictures,
    score: 0,
    topScore:0,
    show:false
  };

resetCards = pictures => {
    const resetPictures = pictures.map(item => ({ item, clicked: false }));
    if (this.timeoutId) {
    clearTimeout(this.timeoutId);
}
    return this.shuffleCards(resetPictures);
  };

componentDidMount() {
  this.setState({ pictures: this.shuffleCards(this.state.pictures)});
}

//shuffle the picture's array randomly
shuffleCards = pictures => {
  let pictureChange = pictures.sort(() => Math.random() -0.5);
  return pictureChange;
};


correctPick = newData => {
  let newScore = this.state.score;
  newScore++
  let newTopScore = Math.max(newScore, this.state.topScore);
  

  this.setState({
      pictures: this.shuffleCards(newData),
      score: newScore,
      topScore: newTopScore,
  })
};

wrongPick = newData => {
  this.setState({
      friends: this.resetCards(newData),
      score: 0,
      show:false
      
  });
  this.timeoutId = setTimeout(function () {
  this.setState({show: true});
  }.bind(this), 0);
  console.log(this.timeoutId)
  
}

cardClicked = id => {
  let guessedCorrectly = false;
  const newData = this.state.pictures.map(pic => {
    if (pic.id === id) {
      if (!pic.clicked) {
        pic.clicked = true;
        guessedCorrectly = true;
      }
    }
    return pic;     
  });

  guessedCorrectly ? this.correctPick(newData) : this.wrongPick(newData);
};


  render() {

    return (
      <div>
        
        <Nav>
          score={this.state.score}
          topScore={this.state.topScore}
        </Nav>
        <Wrapper>
          <div className="row">
        
          </div>
         
        <div className="container">
        <div className="row">
        {this.state.pictures.map(picture => (
          <div className={this.state.show ? 'col-3' : 'col-3'} key={picture.id}>
          <PictureCard
            id={picture.id}
            image={picture.image}
            cardClick={this.cardClicked}
          />
          </div>
        ))}
        </div>
        </div>
      </Wrapper>
      </div>
      
    );
  }


}

export default App;
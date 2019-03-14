import React, {
  Component
} from 'react';
import Nav from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import PictureCard from './components/Cards';
import pictures from "./pictures.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pictures
  };

  removePicture = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const pictures = this.state.pictures.filter(picture => picture.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ pictures });
  };

  render() {

    return (
      <div>
        <Nav />
        <Wrapper>
        {/* <Title>Friends List</Title> */}
        {this.state.pictures.map(picture => (
          <PictureCard
            removePicture={this.removePicture}
            image={picture.image}
          />
        ))}
      </Wrapper>
      </div>
      
    );
  }


}

export default App;
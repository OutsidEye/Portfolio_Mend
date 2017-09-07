import React from 'react';
// Components
import Banner from './Banner';
import About from './About';
import Creations from './Creations';

class Home extends React.Component {

  componentDidMount() {
    document.getElementById("loading").classList.remove("loader");
  }

  render() {
    return (
      <div>
        <Banner/>
        <About/>
      </div>
    )
  }
}

export default Home;

import React from 'react';
// Components
import Banner from './Banner';
import About from './About';
import Creations from './Creations';

class App extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <Banner/>
        <About/>
      </div>
    )
  }
}

export default App;

import React from 'react';
// Components
import Banner from './Banner';
import About from './About';
import Creations from './Creations';
import Photographies from './Photographies';

class Home extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          loaded: false
      }
  }

  componentDidMount() {
    this.preLoading();
  }

  preLoading =() => {
    this.setState({ loaded: true });
  }


  render() {

    console.log(this.state.loaded);

    return (
      <div>
        {this.state.loaded
          ? <div><Banner/><Photographies/><About/></div>
          : <div className="loader"></div>
        }
      </div>
    )
  }
}


export default Home;

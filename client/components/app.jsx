import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;

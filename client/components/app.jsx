import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          grades: data
        });
      });
  }

  render() {
    return (
      <div>
        <Header text="Student Grade Table"/>
        <GradeTable allData={this.state.grades}/>
      </div>
    );
  }
}

export default App;

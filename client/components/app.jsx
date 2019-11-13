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
          grades: data,
          average: null
        });
      });
  }

  getAverageGrade() {
    var averageGrade;
    this.state.grades.map(studentGrade => {
      averageGrade += studentGrade.grade;
    });
    return (averageGrade / this.state.grades.length).toFixed(1) + '%';
  }

  render() {
    return (
      <div>
        <Header text="Student Grade Table" average={this.getAverageGrade()}/>
        <GradeTable allData={this.state.grades}/>
      </div>
    );
  }
}

export default App;

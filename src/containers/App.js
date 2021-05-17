import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
  constructor() {
    super()
    this.state = {
      employee: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ employee: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { employee, searchfield } = this.state;
    const filteredemployee = employee.filter(user =>{
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !employee.length?
      <h1 className='tc'>Loading...</h1> :  
      (
        <div className='tc'>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList employee={filteredemployee}/>
          </Scroll>
        </div>
      );
  }
}

export default App;
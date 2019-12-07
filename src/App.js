import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Robot Rolodex</h1>
        <SearchBox placeholder='Search robot' handleChange={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}


export default App;
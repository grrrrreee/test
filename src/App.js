import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {

  state = {
    contacts : []
  }
  componentDidMount() {
    // fetch 안에 주소를 넣어주면 됩니다.
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Contacts contacts={this.state.contacts}/>
  );
}
}

export default App;
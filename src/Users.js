import React, { Component } from 'react';
import './App.css';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      }).catch( (error) => {
        return <div>{error}</div>
      })
  }
  render() {
    const { isLoaded, items } = this.state;

      if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        return (
          <>
            <h1>Users Page</h1>
            <ul>
            {items.map( (item) => {
                <li>{item.name}</li>
            })}
            </ul>
          </>
        );
    }
  }
}

export default Users;

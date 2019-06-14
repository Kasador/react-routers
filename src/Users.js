import React, { Component } from 'react';
import './App.css';
import Loading from './loading.gif'

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    setTimeout( () => {
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
    }, 2000)
  }
  
  render() {
    const { isLoaded, items } = this.state;
    const loadingStyles = {
      fontSize: '2rem',
      color: '#444',
      marginTop: '150px'
    }
    const fixList = {
      listStyleType: 'none',
      fontSize: '1.5rem',
      color: '#444'
    }
    const ul = {
      textAlign: 'left'
    }
      if (!isLoaded) {
        return (
          <>
            <h2 style={loadingStyles}>Loading</h2>
            <img src={Loading} alt="loading gif"></img>
          </>
        )
      } else {
        return (
          <>
            <h1>Users Page</h1>
            <ul style={ul}>
              {items.map( (item) => {
                return <li style={fixList} key={item.id}><strong>Name: </strong>{item.name}</li>
              })}
            </ul>
          </>
        );
    }
  }
}

export default Users;

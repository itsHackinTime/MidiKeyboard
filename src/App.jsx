import React, { Component, useState, useEffect } from "react";
import './app.scss';
import NavBar from "./components/NavBar.jsx";
import TreeContainer from './containers/TreeContainer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenFound: false,
      artist: [],
      related: [],
    }
  }

  componentDidMount() {
    const getToken = async () => {
      try {
        console.log('in component did mount for App.jsx')
        
        const res = await fetch('api', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors'
        })
      
        console.log("res.status", res.status);
        console.log("res", res);

        this.setState({ tokenFound: true })
      } catch (err) {
        console.log(err.message);
      }
    }

    const search = async () => { 
      const response = await fetch('search')
        .then(res => {
        return res.json()
      })
      .then((data) => {
        // console.log(data)
        this.setState(state => ({
          artist: data
        }));
       
      })
    }  
    const related = async () => {
      fetch('api')
        .then(res => {
        return res.json()
      })
      .then((data) => {
        this.setState(state => ({
          related: data
        }));
        
      })
    }
    getToken();
    search();
    related();
  }
  

  render() {
    {console.log(this.state)}
    return (
      <div className="App">
        <NavBar />
        <TreeContainer state={this.state}/>
      </div>
    )
  }
}

export default App;
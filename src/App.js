import React, { Component } from 'react';
import fire from './config/fire.js'
import './App.css';
import Home from "./Home";


class App extends Component {


    constructor(props) {
      super(props);
      this.state = {
          user : {},
      };
    }

    componentDidMount() {
        this.authListener()
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if(user){
                this.setState({user});
                // localStorage.setItem('user',user.uid);
            }
            else{
                this.setState({user:null});
                // localStorage.removeItem('user');
            }
        })
    }



    render() {
      return (
        <div >
            <Home/>

            {/*{this.state.user ? (<Home/>) : (<Login/>)}*/}
        </div>
      );  
    }
}

export default App;
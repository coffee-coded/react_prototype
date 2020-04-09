import React, {Component} from "react";
import fire from './config/fire'

class Home extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut().then().catch(error => {
            console.log(this.state);
            console.log(error)
        });
    }

    render() {
        return(
            <div>
                <h1> I am a dashboard!</h1>
                <button onClick={this.logout}>LogOut </button>
            </div>
        )
    }
}
export default Home;
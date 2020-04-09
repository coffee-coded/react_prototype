import React, { Component } from 'react';
import './Up.css';
import s from './Logos.png';

class Up extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email : "",
            Pass : "",
            User : ""
        };
    }
    ctxt = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    cp = (e) => {
        e.preventDefault();
    }   
    render() {
        let st = {
            height : '1.5px',
            background : 'rebeccapurple'
        };
        return (
            <div className="Up">
                <svg data-layer="0231232b-fb31-475c-b440-45dea1d473e7" preserveAspectRatio="none" viewBox="-4036.749267578125 555.230224609375 237.295654296875 774.084716796875" className = "path2"><defs><pattern id="img-path2" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image src="./path2.png" x="0" y="0" width="235.55px" height="772.33px" /></pattern></defs><path d="M -4035.999267578125 1328.2548828125 C -4035.999267578125 1328.2548828125 -3916.44921875 1322.055786132813 -3919.064453125 1328.2548828125 C -3921.6806640625 1334.4541015625 -3797.878662109375 858.871337890625 -3800.494140625 677.53369140625 C -3803.10986328125 496.1957092285156 -4035.999267578125 571.4683837890625 -4035.999267578125 571.4683837890625 L -4035.999267578125 1328.2548828125 Z" fill="url(#img-path2)" /></svg>
                <img src = {s} alt = "Future awaits you !!" title = "Future awaits you !!"/>
                <p>
                    Kick start your journey by registering here
                </p>
                <hr style = {st} width='550px'/>
                <br/><br/>
                <form onSubmit={this.cp} className="lp">
                    <input className="un" type = 'text' placeholder='Your name' name='User' onChange={this.ctxt}/><br/><br/>
                    <input type = 'email' className="em" placeholder='Email' name='Email' onChange={this.ctxt}/><br/><br/>
                    <input type = 'password' className="pw" placeholder='Password' name='Pass' onChange={this.ctxt}/><br/><br/>
                    <input type = 'submit' value='Sign Up'/>
                </form>
                {this.state.User}<br/>
                {this.state.Email}<br/>
                {this.state.Pass}
                <br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Up;
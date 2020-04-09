import React, { Component } from 'react';
import './App.css';


class Idea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : "",
            ideas : [],
            txt : ""
        };
    }
    componentDidMount() {

    }
    ctxt = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    cp = (e) => {
        e.preventDefault();
    }
    render() {
        let st = {
            border : '3px solid cyan',
            blockSize : '40px'
        };
        return (
            <div className = "Idea">
                <p>Hello {this.state.user}</p>
                <div>
                    {this.state.ideas.map(i => {
                        return <p>{i}</p>  
                    })} // displaying all the ideas
                </div>
                <br/><br/>
                <div>
                    <form onSubmit={this.cp}> 
                        <textarea style = {st} placeholder = "Enter text..." onChange = {this.ctxt} name = "txt"/><br/><br/>
                        <input style = {st} type = "submit" value = "Send"/>
                    </form>
                    {this.state.txt}
                </div>
            </div>
        );
    }
}

export default Idea;
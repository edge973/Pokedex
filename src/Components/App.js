import React from 'react';
import '../Media/css/App.css';


export default class App extends React.Component{

    constructor(props)
    {
        super(props);
        this.state=({
            search : ''
        });
    }

    onChange = ()=>
    {
        this.setState({
            search : this.input__
        })
    };

    render() {
        return (
            <div id="App" className="ui center aligned container">
                <h1 className='title-h1'>POKEDEX !</h1>
                <input className='input-research' type="text" placeholder="Pokemon research" onChange={this.onChange} name='search' ref={(e)=>this.input__=e}/>
                <ul id='ul'>
                </ul>
            </div>
        );
    }
}

import React from 'react';
import '../Media/css/App.css';


export default class App extends React.Component{

    constructor(props)
    {
        super(props);
        this.state=({
            search   : '',
            pokemons : [],
            filter   : []
        });
    }

    componentDidMount() {
        this.dataJson();
    }

    dataJson() {
        let url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

        fetch(url)
            .then(blob => blob.json())
            .then(data => {
                        this.setState({pokemons : data.pokemon});
                }
            );
    }

    filterSearch(search)
    {
        let regex = new RegExp (search.trim(),'gi');
            this.setState({
                filter: this.state.pokemons.filter(pokemon => {
                    return pokemon.name.match(regex) || pokemon.type.find(type => {
                        return type.match(regex)
                    });
                })
            });
    }

    showSearch()
    {
        let ul = document.querySelector('#ul');
        let html = this.state.filter.map(pokemon => {
            return ` <li>
                        <img src="${pokemon.img}" alt="${pokemon.name}" width="42" height="42">
                        <span>${pokemon.name}</span>
                        <span>${pokemon.height}</span>
                     </li>`}).join('');
        ul.innerHTML = html;

    }

    onChange = ()=> {
        this.setState({
            search: this.input__.value
        });
       this.input__.addEventListener('keyup',()=>{
           this.filterSearch(this.input__.value);
           this.showSearch();
       })
    };

    render() {
        console.log('filter:',this.state.filter);
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

import React, {Component} from 'react';
import Facelist from '../Components/Facelist';
import Scroll from '../Components/Scroll';
import Searchbox from '../Components/Searchbox';
import './App.css';




class App extends Component {

  constructor (){
    super()
    this.state  = {
        robots: [],
        searchfield: ''
    }
  } 

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(wierdos => this.setState({robots: wierdos}))
    }

    onSearchChange = (event)=>{
      this.setState({searchfield: event.target.value});
    }

  render(){

           const {robots,searchfield} = this.state;

           const filteredFaces = robots.filter( face =>{
              return face.name.toLowerCase().includes(searchfield.toLowerCase())||face.email.toLowerCase().includes(searchfield.toLowerCase());
            })

           return (!robots.length) ?
            <h1 className="gold f1">Loading...</h1> :
            
            (
                  <div className="tc ">
                      <h1 className="gold f1"> Worldclass Wierdos </h1>
                      <Searchbox searchChange = {this.onSearchChange}/>
                      <Scroll>
                        <Facelist robots = {filteredFaces}/>
                      </Scroll>
                      <p className="silver i pa5"> I built this website just for fun. Thanks for visiting! </p>
                  </div>
              );
    }
  


}

export default App;

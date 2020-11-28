import React, {Component} from 'react';
import CardList from './CardList';
//import { robots } from './robots';
import SearchBox from './Searchbox' ;
import './App.css' ;
import Scroll from './Scroll'

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount () {
       fetch('http://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then (users => {
           this.setState({robots:users})
       })
    }


    onSearchChange = (event) => {
            this.setState({searchfield: event.target.value})

            }

     render (){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        });
        if (this.state.robots.length === 0){
            return <h2><strong>Loading....</strong></h2>
        } else{
            return (
                <div className="h1 tc">
                    <h1>
                        Robot friends
                    </h1>
                    <SearchBox searchChange={this.onSearchChange}/>

                   < Scroll>
                   <CardList robots={filteredRobots} />
                   </Scroll>
        
                </div>
        
        
            )

        }
     }

}

export default App
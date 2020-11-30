import React, {Component} from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/Searchbox' ;
import './App.css' ;
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }
    componentDidMount () {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then (users => {
           this.setState({robots:users})
       })
    }

    onSearchChange = (event) => {
            this.setState({searchfield: event.target.value})

            }

     render (){
         const  {robots,searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        });

        
         return robots.length === 0 ?
            <h2><strong>Loading....</strong></h2>
        :
            (
                <div className="h1 tc">
                    <h1>
                        Robot friends
                    </h1>
                    <SearchBox searchChange={this.onSearchChange}/>

                   < Scroll>
                   <ErrorBoundry>
                   <CardList robots={filteredRobots} />
                   </ErrorBoundry>
                   </Scroll>
        
                </div>
        
        
            )

     }

}

export default App
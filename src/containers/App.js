import React, {Component, useState,useEffect} from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/Searchbox' ;
import './App.css' ;
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

const App = ()=> {
    const [robots,setRobots] = useState([])
    const [searchfield,setSearchfield] = useState("")
    //const [count,setCount]=useState(0)

   // having the [] as second argument replicatess what componentDidMount does pretty much which is to render once components update only
   //Now, useEffect also helps you change only when a state changes, i used the count button as an example here, open the console and check
   //how useEffect only runs then there is a change in count state by adding the [count]
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then (users => {
        setRobots(users)
        })
       //console.log(count)
    },[]) // if you add count, only run if count changes.
    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)

        }

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
                    {/*<button onClick={()=> {setCount(count +1)}}>Click to see the effect ont The useEffect</button>*/}
                    <SearchBox searchChange={onSearchChange}/>

                   <Scroll>
                   <CardList robots={filteredRobots} />
                   </Scroll>
        
                </div>
        
        
            )

}

/*
//class Component way
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
*/
export default App
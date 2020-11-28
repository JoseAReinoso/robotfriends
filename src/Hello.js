import React, {Component} from 'react';


class Hello extends Component {
   render (){
    return (
<div>
         <h1>
            Hello World
        </h1>
        <h6>
            {this.props.sayhi}
        </h6>
</div>
     
    )
   }

}

export default Hello
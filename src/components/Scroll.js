import React from 'react';


//Will be using whats called children here
const Scroll = (props) => {
    return (

<div style={{overflowY:'scroll',border:'5px solid black',
height:'800px'
}}>
    {props.children}
</div>

    )
      
}

export default Scroll;
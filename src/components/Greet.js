import React from 'react';

// function Greet(){
//     return <h1> Hello World</h1>;

// }
const Greet = ({name}) => {
    // ,=console.log(props);
return (<div>
<h1>Hello {name}</h1>
{/* <h2>{props.children}</h2> */}

</div>);
}

export default Greet;
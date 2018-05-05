import React from 'react';


// ES6 style arrow function
const person = ( props ) => {
    return (
        <div>
            <p onClick={ props.click }>Im a { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
        </div>
    )
};
// { props.name } Know as Dynamic content
export default person;

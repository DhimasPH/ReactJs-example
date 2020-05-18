import React from 'react';

function Listnum(props){
    return(
        <ul>
            {props.item.map( (item, index) => <li key={index}>{item}</li> )}
        </ul>
    )
}

export default Listnum;
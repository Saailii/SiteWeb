import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import "../styles/dropdown.css"


function DropDown() {

    const [ isShowed, setIsShowed ] = useState(false)


    const handleToggle = (isShowed) => {
        setIsShowed(isShowed);
        console.log(isShowed ? "open" : "closed");
    }

    return (
    <Dropdown show={isShowed} onToggle={handleToggle} autoClose="outsite">
        <Dropdown.Toggle variant="success" id="dropdown-basic" >
            Dropdown 
        </Dropdown.Toggle>

      <Dropdown.Menu className='dropMenu'>
            <Dropdown.Item className='itemdrop' href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item className='itemdrop' href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item className='itemdrop' href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        );
}

export default DropDown;

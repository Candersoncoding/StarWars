import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Jumbotron from './Jumbotron';


const StarTabs = (props) => {

    const [apiCall, setAPICall] = useState([])
    const [clicked, setClicked] = useState(false)

    const onClickHandler = (event) => {
        event.preventDefault()
            setAPICall(`${props.tier2}`)
            setClicked(true)
    }

    return (
        <div className="">
            <button className="btn btn-outline-primary text-primary btn-lg text-capitalize" onClick={onClickHandler}>{props.item}</button>
            {clicked? <Jumbotron call={apiCall}/> : <p></p>}
        </div>
    )

}

export default StarTabs; 
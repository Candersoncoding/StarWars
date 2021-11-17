import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Jumbotron from './Jumbotron';


const StarTabs = (props) => {

    const [tierTwoInfo, setTierTwoInfo] = useState([])

    const onClickHandler = (event) => {
        axios.get(`${props.tier2}`)
            .then(res => {
                console.log(res.data.results)
                setTierTwoInfo(res.data.results)})
            .catch(res => console.log(res.err))
    };

    return (
        <div className="">
            <button className="btn btn-outline-primary text-primary btn-lg text-capitalize" onClick={onClickHandler}>{props.item}</button>
            {
                Object.keys(tierTwoInfo).map((item, i) =>{
                    let tabData = tierTwoInfo[item]
                    return <Jumbotron key={i} data={tabData} />
                    
                })
            }
            {/* <h1>{props.tier2}</h1> this needs a component in an info container */}
        </div>
    )

}

export default StarTabs; 
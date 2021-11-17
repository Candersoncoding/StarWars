import React, {useState, useEffect} from "react";
import axios from "axios";

const Jumbotron = (props) => {

    const [tabData, setTabData] = useState([])

    useEffect(()=> {
        setTabData(`${props.data}`)
    })

    return(
        <div>
            {
                Object.keys(tabData).map((item, i) =>{
                    // if (item === "films") {
                    //     return <p key={i} >{item.title}</p>
                    // }
                    // else{
                    //     return <p key={i} >{item.name}</p>
                    // }
                   <p>{item}</p> 
                })
            }
        </div>
    )
}

export default Jumbotron;
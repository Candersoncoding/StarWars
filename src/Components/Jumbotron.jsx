import React, {useState, useEffect} from "react";
import axios from "axios";

const Jumbotron = (props) => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get(`${props.call}`)
            .then(res => setCurrentData(res.data.results))
            .catch(err => console.log(err))
    })
    return(
        <div>
            <h1>Tron</h1>
            {
                Object.values(currentData).map((item, i) =>{
                    return <p>{item.name}</p>
                })
            }
        </div>
    )
}

export default Jumbotron;
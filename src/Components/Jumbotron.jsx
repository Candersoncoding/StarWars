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
        <div className="jumboDiv">
            <h1>Jumbo</h1>
            {
                Object.values(currentData).map((item, i) =>{
                    return item.title? <p>{item.title}</p> : <p>{item.name}</p>
                })
            }
        </div>
    )
}

export default Jumbotron;
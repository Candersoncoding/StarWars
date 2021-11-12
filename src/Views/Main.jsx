import {React, useState, useEffect} from "react";
import {Link} from '@reach/router';
import axios from "axios";
import StarTabs from '../Components/StarTabs';


const Main = (props) => {
    const [tabs, setTabs] = useState([])

    useEffect(()=>{
      axios.get('https://swapi.dev/api/')
         .then(res=> setTabs(res.data))
        .catch(err=>console.log(err))
    });
    return(
        <div>
            {
                Object.keys(tabs).map((item, i)=> {
                    return <button key={i} className="btn btn-primary text-light btn-lg text-capitalize">{item}</button>
                })
            }
            
        </div>
    )
}

export default Main;

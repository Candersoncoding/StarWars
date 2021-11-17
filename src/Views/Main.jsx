import {React, useState, useEffect} from "react";
import {Link} from '@reach/router';
import axios from "axios";
import StarTabs from '../Components/StarTabs';
import Jumbotron from "../Components/Jumbotron";


const Main = (props) => {
    const [mainTabs, setMainTabs] = useState([])

    useEffect(()=>{
      axios.get('https://swapi.dev/api/')
         .then(res=> setMainTabs(res.data))
        .catch(err=>console.log(err))
    });

    return(
        <div className="mainDiv">
            {
                Object.keys(mainTabs).map((item, i)=> {
                    let call = mainTabs[item]
                    return <StarTabs item={item} tier2={call} key={i}/>
                })
            }
            
        </div>
    )
}

export default Main;

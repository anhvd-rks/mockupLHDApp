import React from "react";
import "./Detail.css";
import { useLocation } from 'react-router-dom';

interface Detail {

}

const Detail = (props: Detail) => {
    
    const location = useLocation();
    const data = location.state;
    console.log(data, location);
    return (
        <div className="detail-content">
            
        </div>
    )
}

export default Detail;
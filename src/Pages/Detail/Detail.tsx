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
        <div className="page">
            <div className="detail-content">
                <h1>Detail</h1>
            </div>
        </div>
      
    )
}

export default Detail;
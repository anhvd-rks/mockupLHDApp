import React, {useState, useEffect} from "react";
import "./Detail.css";
import { useLocation, useParams } from 'react-router-dom';
import * as actions from "./utils"

interface DetailType {
}
interface DetailData {
    name: string;
    gender: string;
    image: string;
    id: string;
    species: string;
    status: string;
    origin: {name: string, url: string}
}

const Detail = (props: DetailType) => {
    const [detailData, setDetailData] = useState<any>({})
    const location = useLocation();
    const data = location.state;
    const { id } = useParams();

    async function getDetail(data: string) {
        const info:any = await actions.getDataDetail(data)
        setDetailData(info?.data)
    }

    const More = () => {
        console.log('show more info')
    }

    useEffect(() => {
        let pos = parseInt(id!) + 1 
        getDetail(pos.toString())
    }, [])

    return (
        <div className="page">
            <button className="hidden lg:flex items-center space-x-6 text-back px-8 py-3 font-bold rounded text-white hover:opacity-70" style={{backgroundColor: '#5d8ad7'}} >Back</button>
            <div className="detail-content bg-white overflow-hidden shadow rounded-lg border">
                <div><img src={data.image} alt="ava" style={{width: 500}}/></div>
                <div className="left">
                    <div style={{fontSize: 32, fontWeight: 700, textTransform: 'uppercase'}}>{detailData?.name}</div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Since:</div><div>{(new Date(Date.parse(data.created))).toString().slice(0,15)}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                       <div>From:</div><div>{data.location.name}</div>  
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Origin:</div><div>{data.origin.name}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div> Gender:</div><div>{data.gender}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Status:</div><div>{data.status}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}} className="more-button ">
                        <button className="text-indigo-700 border border-indigo-600 py-4 px-6 rounded inline-flex items-center" 
                        onClick={More} >
                            More Info
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
      
    )
}

export default Detail;
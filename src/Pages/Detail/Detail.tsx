import React, {useState, useEffect} from "react";
import "./Detail.css";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
    const navigate = useNavigate()
    const data = location.state;
    const { id } = useParams();

    async function getDetail(id: string) {
        const info:any = await actions.getDataDetail(id)
        setDetailData(info?.data)
    }

    const Loading = (
        <div
            className="inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
        >
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...
            </span>
        </div>
    )

    const More = () => {
        console.log('show more info')
    }

    const Back = () => {
        navigate('/', {replace: true})
    }

    useEffect(() => {
        let pos = parseInt(id!)
        getDetail(pos.toString())
    }, [])

    return (
        <div className="pageDetail">
            <h1 className="titleDetail">ID CARD</h1>
            {detailData?.name ? (
            <div>
                <button onClick={Back} className="lg:flex items-center space-x-6 text-back px-8 py-3 font-bold rounded text-white hover:opacity-70" style={{backgroundColor: '#5d8ad7'}} >Back</button>
                <div className="detail-content bg-white overflow-hidden shadow rounded-lg border">
                    <div className="imgContainer"><img src={detailData?.image} alt="ava" className="imgDetail"/></div>
                    <div className="left">
                        <div className="nameRight">{detailData?.name}</div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} className="field">
                            <div>Since:</div><div>{(new Date(Date.parse(detailData?.created))).toString().slice(0,15)}</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} className="field">
                        <div>From:</div><div style={{textAlign: 'end'}}>{detailData?.location?.name}</div>  
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} className="field">
                            <div>Origin:</div><div style={{textAlign: 'end'}}>{detailData?.origin?.name}</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} className="field">
                            <div> Gender:</div><div style={{textAlign: 'end'}}>{detailData?.gender}</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} className="field">
                            <div>Status:</div><div style={{textAlign: 'end'}}>{detailData?.status}</div>
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
            ):(
            <div style={{ display: 'flex',justifyContent: 'center', marginTop: '30%'}}>{Loading}</div>
            )}
        </div>
      
    )
}

export default Detail;
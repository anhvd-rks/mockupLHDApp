import React, { useEffect, useState } from "react";
import "./Filter.css"

interface FilterBox {
    type: string
    option: any
    changeFilter: (value: any) => void
}
interface Item{
    id: number
    value: string
}
const Filter = (props: FilterBox) => {
    const [drop, setDrop] = useState(false)
    const [filter, setFilter] = useState({
        a: true,
        b: false,
    })

    const handleShow = () => {
        setDrop(!drop)
    }

    const handleChangeFilter = (e: any) => {
        props.changeFilter({value: e.target.value, type: props.type})
    }
    
    useEffect(()=>{
    })

    return (
        <div className="items-center justify-center" style={{position: 'relative'}}>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter by {props.type}</label>
            <select 
                onChange={(e) => handleChangeFilter(e)} 
                id="countries" 
                defaultValue="default"
                className="border text-gray-900 focus:outline-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="default" style={{display: 'none'}}>Choose a {props.type}</option>
                {props.option?.length > 0 && props.option?.map((item: Item,index: number) => {
                    return(
                        <option style={{textTransform: 'capitalize'}} value={index} key={index}>{item.value}</option>
                    )
                })}
            </select>
            {/* <button id="dropdownDefaultButton" 
            data-dropdown-toggle="dropdown" 
            onClick={handleShow}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button">
                Dropdown button 
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            <div id="dropdown" className={`${drop ? "block dropdownPos": "hidden"} "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default Filter;


{/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" onClick={handleShow}
className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
type="button">
Filters
<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
</svg>
</button>

<div id="dropdown" className={`${drop ? "block dropdownPos": "hidden"} "z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700 "` }>
<h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
Options
</h6>
<ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
    <li className="flex items-center">
        <input id="apple" type="checkbox" value="" name="name" onChange={(e) => handleChangeFilter(e)}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        Apple (56)
        </label>
    </li>

    <li className="flex items-center">
        <input id="fitbit" type="checkbox" value="" name="species" onChange={(e) => handleChangeFilter(e)}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        Fitbit (56)
        </label>
    </li>

    <li className="flex items-center">
        <input id="dell" type="checkbox" value="" name="gender" onChange={(e) => handleChangeFilter(e)}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

        <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        Dell (56)
        </label>
    </li>
</ul>
</div> */}
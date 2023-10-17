import React from "react";
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
    const handleChangeFilter = (e: any) => {
        props.changeFilter({value: e.target.value, type: props.type})
    }

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
                <option value="">All</option>
                {props.option?.length > 0 && props.option?.map((item: Item,index: number) => {
                    return(
                        <option style={{textTransform: 'capitalize'}} key={index}>{item.value}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Filter;

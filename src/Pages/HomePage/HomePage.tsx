import React, {useEffect, useState} from "react";
import "./HomePage.css"
import Card from "./Card";
import * as actions from "./util";

type Props = {};
interface Item {
  name: string;
  gender: string;
  image: string;
  created: string;
  species: string;
  status: string;
  total: any
}

const HomePage = (props: Props) => {

  const [data, setData] = useState<Array<Item>>([])

  async function getData() {
    const list = await actions.getData()
    setData(list?.data?.results)
  }

  useEffect(() => {
    getData() 
  },[])

  useEffect(() => {
  },[data])


  return (
    <>
    <div className="page">
      <form className="group relative">
        <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
        </svg>
        <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter by name..."/>
      </form>
      <div className="page-content">
        <ul role="list" className="divide-y divide-gray-100">
          {data.length > 0 && data.map((item, index) => {
            return(
              <li className="flex justify-between gap-x-6 py-5">
                <Card name={item.name} gender={item.gender} species={item.species} status={item.status} image={item.image} time={item.created} total={item} pos={index}/>
              </li>
            )
          })}
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">Lindsay Walton</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">lindsay.walton@example.com</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Front-end Developer</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-red-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                </div>
                <p className="text-xs leading-5 text-gray-500">Offline</p>
              </div>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">Tom Cook</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">tom.cook@example.com</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Director of Product</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default HomePage;

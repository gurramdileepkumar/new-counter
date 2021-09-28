import React from 'react'
import { useEffect,useState } from 'react'
import "./App.css"
import M from './M'


export default function Todos() {
    const [data,setData] = useState([]);
     useEffect(() => {
         fetch('https://gorest.co.in/public/v1/todos')
         .then(res => res.json())
         .then(res =>setData(res.data))

     }, [1])

    return (
      <div className="container">
        <div className="row">
        {data.map(r =>{
          return(
            <div className="col-md-4 mb-5">
             <M key={r.id} data={r} />
             </div>
            )
        })}
        </div>
      </div>
        // <div className="container">
        //     {data.map(r =><div className="grid">
        //       <div>
        //       <p >{r.id}</p>
        //       <h1 >{r.user_id}</h1>
        //       <p>{r.title}</p>
        //       <p>{r.due_on}</p>
        //       <p>{r.status}</p>

        //       </div>
        //       </div>)}
        
        // </div>
    )
}

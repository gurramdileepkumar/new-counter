import React from 'react'

export default function M(props) {
    const {id,user_id,title,due_on,status} = props.data
    return (
        <div>
            <div className="card c">
              <p >{id}</p>
              <h1 >{user_id}</h1>
              <p>{title}</p>
              <p>{new Date(due_on).toLocaleDateString("en-us")}</p>
              <p>{status}</p>
            </div>
        
        </div>
    )
}

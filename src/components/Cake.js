import React from 'react'
import {FaTimes} from 'react-icons/fa'//font awesome
const Cake = ({cake, onDelete, onToggle}) => {
    return (
        <div className={`cake ${cake.reminder ?  'reminder' :''}`}
             onDoubleClick={()=>onToggle(cake.id)}>
            <h3>{cake.text}
            <FaTimes style={{cursor:'pointer'}} 
                         onClick={()=>onDelete(cake.id)}
                />
            </h3>
            <p>{cake.day}</p>
        </div>
    )
}

export default Cake
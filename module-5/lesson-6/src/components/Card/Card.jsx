import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({data: {name, image, status, location, id}}) => {
    return (
    <>
    <div className="card border border-2 border-primary shadow-lg shadow-primary" style={{width: '18rem', borderRadius: '10px'}}>
  <img src={image} style={{borderRadius: '10px'}} alt={name}/>
  <span style={{top: '10px', right: '10px', background: status == 'Alive' ? 'green' : status == 'Dead' ? 'red' : 'yellow' }} className='badge position-absolute'>{status}</span>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
   <div>
   <strong className="card-text">Last location:</strong>
   <p>{
    location?.name
    }</p>
   </div>
    <Link to={`/singlecharacter/${id}`} className="btn btn-primary">More</Link>
  </div>
</div>
</>
  )
}

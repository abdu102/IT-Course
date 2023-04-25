import React from 'react'
import { Link } from 'react-router-dom'

export const SingleCharacterCard = ({data: {name, image, status, location, gender, species, origin}}) => {
  return (
    <div className="card border border-2 border-primary shadow-lg shadow-primary" style={{width: '18rem', borderRadius: '10px'}}>
    <img src={image} style={{borderRadius: '10px'}} alt={name}/>
    <div className="card-body">
    <div style={{top: '10px', right: '10px', background: status == 'Alive' ? 'green' : status == 'Dead' ? 'red' : 'yellow' }} className='w-100 py-2 text-center text-light rounded'>{status}</div>
      <h5 className="card-title my-2">{name}</h5>
     <ul className='p-0'>
    <li className='d-flex gap-2'>
    <strong className="card-text">Gender:</strong>
     <p>{
      gender
      }</p></li>
      <li className='d-flex gap-2'>
      <strong className="card-text">Last location:</strong>
     <p>{
      location?.name
      }</p>
      </li>
      <li className='d-flex gap-2'>
    <strong className="card-text">Origin:</strong>
     <p>
    {
      origin?.name
    }
      </p>
      </li>
      <li className='d-flex gap-2'>
    <strong className="card-text">Species:</strong>
     <p>{
      species
      }</p></li>
     </ul>
    </div>
  </div>
  )
}

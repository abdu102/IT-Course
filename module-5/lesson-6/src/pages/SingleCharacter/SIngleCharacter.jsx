import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SingleCharacterCard } from '../../components/SingleCharacterCard/SingleCharacterCard';

export const SIngleCharacter = () => {
  const [data, setData] = useState({});
  let { id } = useParams();
  let URL = `https://rickandmortyapi.com/api/character/${id}`;
  let navigate = useNavigate();
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setData(data))
  }, [])
  return (
    <div className='container p-4'>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
    <div style={{margin: '0 500px',}}>
    <SingleCharacterCard data={data}/>
    </div>
    </div>
  )
}

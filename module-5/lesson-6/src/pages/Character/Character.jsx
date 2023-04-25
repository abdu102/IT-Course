import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Pagination } from "../../components/Pagination/Pagination";
export const Character = () => {
  const [character, setCharacter] = useState({});
  const { info, results } = character;
  const [page, setPage] = useState('')
  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;
 console.log(page);
  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(data => setCharacter(data))
  }, [api])
  return (
    <>
      <div className="container">
        <div className="row p-2">
          <div className="col-3"><h2>filt</h2></div>
          <div className="col-9">
           <div className="d-flex flex-wrap gap-4 justify content-between">
           {
            results?.length ? results.map((item, index) => {
              return <Card key={index} data={item}/>
            }) : ''
            
            }
           </div> 
          </div>
        </div>
        
        <Pagination pages={info?.pages} setPage={setPage}/>
      </div>
    </>
  );
};

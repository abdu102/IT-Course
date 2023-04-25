import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card';

export const Episode = () => {
  const [episode, setEpisode] = useState({});
  const [episodeId, setEpisodeId] = useState('1');
  const { info, results } = episode;
  const [character, setCharacter] = useState({});
  let api = `https://rickandmortyapi.com/api/episode`;
  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(data => setEpisode(data))
  }, [api])
  return (
    <section>
      <div className="container">
        <div className="episode row">
          <div className="episode-info col-12 gap-2 d-flex flex-column p-3">
          <div className="episode__title d-flex gap-1 justify-content-center">
            <h1>Episode Name : </h1><h1 className='text-primary'>{ episode?.name}</h1>
          </div>
          <div className="episode__date d-flex justify-content-center">
            <h4>Air Date: {episode?.air_date}</h4>
          </div>
          </div>
          <div className="episode__filter col-3"><select>
            {
              
            }
            </select></div>
          <div className="episod__body col-9">
            <div className="d-flex justify-content-between gap-3">
              {
                 
                  episode?.characters?.map((item) => {
                    fetch(item)
                    .then(res => res.json())
                    .then(data => setCharacter(data))

                    
                      // <Card data={character} />
                  
                 
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

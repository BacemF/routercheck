import React from 'react'
import { StarRating } from './StarRating'
import EditMovie from './EditMovie'
import {Link} from 'react-router-dom'
import Iframe from 'react-iframe'

export const MovieCard = ({movie, handleDelete,handleEdit}) => {
  return (
<div className='movie-card '>
<h3>{movie.name} </h3>
<img src={movie.image} alt={movie.name}/>
<StarRating rating={movie.rating}/>
<p>{movie.date}</p>
{/* <h3>{movie.description}</h3>
<Iframe url={movie.trailer}
        width="330px"
        height="220px"
    /> */}
<div>
  <Link to={`/ObjectMovie/${movie.id}`} >  
  <button className='btn' >Movie Card</button>
  </Link>
  <button onClick={() => handleDelete(movie.id)} className='btn'>Delete</button>
<EditMovie movie={movie} handleEdit={handleEdit}/>
</div>
</div>

  )
}
export default MovieCard
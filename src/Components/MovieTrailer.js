import React from 'react'
import {Link} from 'react-router-dom'
import {movieData} from './MovieData'

export default function MovieTrailer({match}){
    return(
        <div style={{textAlign:'center',backgroundColor:'black'}}>
            <h2> <Link style={{color:'white'}}   to='/'>Home Page</Link> </h2>
            <div >
                {movieData.map((el) => el.id == match.params.id ?
                <div>
                     
                    <h3 style={{color:'blue'}}>name:</h3><p>{el.name}</p>
                    <h3 style={{color:'blue'}}>description:</h3><p>{el.description}</p>
                    <h3  style={{color:'blue'}}>Trailer:</h3><p> <button><a href={el.trailer}>trailer</a></button></p>
                </div> :null)}
            </div>
        </div>
    )
}
import React from 'react'
import { useEffect,useState } from 'react'
import  './movie-cards.css'
import { Link, useParams } from 'react-router-dom';

export const Movie_App = () => {
    const { id } = useParams();

    const[movielist,setmovielist] = useState([]);
    const[moviename,setmoviename] = useState('batman');

    useEffect(() => {
      fetch_data();
      
    }, [moviename])
    
    //https://www.omdbapi.com/?apikey=

    const fetch_data = async ()=>{
        const ans = await fetch(`http://www.omdbapi.com/?s=${moviename}&apikey=bbd65a97`);
        const res = await ans.json();
        console.log(res);
        setmovielist(res.Search);
        console.log(movielist);
    }
    
  return (
    <div>
        <input type='text' placeholder='enter your movie' width='450px' onChange={(e)=>{
            setmoviename(e.target.value);
        }}></input>
 <div className='movie-container'>
        {
        movielist == '' ? 
            <div>
               <h2> no result found</h2>
            </div>
         :
        movielist.map((e,movieid)=>{
            return(
                <div className='movie_cards'>
                    
                    <img src={e.Poster} height={130} width={198}/>
                    <h5>
                        <Link to={`/moviedetails/${movieid}`}>{e.Title}</Link>
                    </h5>
                    <p>{e.Year}</p>
                </div>
            )
        })}
    </div>
    </div>
   
  )
}

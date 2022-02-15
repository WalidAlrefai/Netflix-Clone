import Movie from "../movie/Movie"
import "./MovieList.css"

export default function MoviesList(props) {
   return(
       <div className="movelist">
           
           {
               props.movies.map(movie=>{
                   return(
                       <div>
                       <Movie movieData={movie}/>
                       </div>  
                   )
                 
               })
           }
           
       </div>
   )
}
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./FavList.css"
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

export default function FavList() {
    const [favListData, setFavListData] = useState();
    async function getDataFromDB() {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/getAllFavMovies`);
        const data = await response.json();
        console.log(response.status)
        setFavListData(data);
    }
    useEffect(() => {
        getDataFromDB();
    }, []);

    async function handleDelete(id) {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/deleteFavMovie/${id}`, {
            method: 'DELETE',
        });
        if (response.status === 204) {
            getDataFromDB();
            Swal.fire(
                'It is done!',
                'Movie Deleted Successfully',
                'success'
            )
        }
    }
    return (
        <div >
            <h1 style={{margin:"15px"}}>This is my favorite list of Movies</h1>
            <div className='list' >
                {
                    favListData && favListData.map(movie => {
                        return (
                            <div className='cardFav' >
                                <Card style={{ width: '18rem' }} key={movie.id}>
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>
                                            {movie.release_date}
                                        </Card.Text>
                                        <Card.Text>
                                            {movie.comment ? movie.comment : "No Comment is Added"}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => { handleDelete(movie.id) }}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
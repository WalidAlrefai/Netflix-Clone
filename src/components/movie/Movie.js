import Card from 'react-bootstrap/Card'
import { Button} from 'react-bootstrap/';
import ModalMovie from "../modalMovie/ModalMovie"
import { useState } from 'react';
import "./Movie.css"


export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleShowModal(data) {
        handleShow();
        setChosenMovie(data)
    }
    
    return (
        <div className='move'>
                

            {
            
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.movieData.poster_path} />
                        <Card.Body>
                            <Card.Title>{props.movieData.title}</Card.Title>
                            <Card.Text>
                                 {props.movieData.id}
                            </Card.Text>
                            <Card.Text>
                                {props.movieData.release_date} 
                            </Card.Text>
                            <Button variant="primary" onClick={() => { handleShowModal(props.movieData) }}>Show Modal</Button>
                        </Card.Body>
                    </Card>
                    {
                        chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovies={chosenMovie} />
                    }
                </>

            }



        </div>
    )
}



import "./ModalMovie.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useRef } from 'react';

export default function ModalMovie(props) {
    const commmentRef = useRef();
    function handleComment(e) {
        e.preventDefault();
        console.log(commmentRef.current.value);
        const comment = commmentRef.current.value;
        const newMovie = { ...props.chosenMovies, comment };
        console.log(newMovie);
        props.updateMovies(newMovie, props.chosenMovies.id);
    }
    async function handleAddFav(e, movie){
        e.preventDefault();
    const dataToBeSent = {
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview : movie.overview ,
        comment: movie.comment
    }
    const url = `${process.env.REACT_APP_SERVER}/addFavMovies`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log(response.status);
        console.log(data);
    }
    return (
        
        <div className='modal'>
            {/* {console.log(111,props.chosenMovies)}             */}
            <Modal show={props.show} onHide={props.ModalMoviehandleClose} >
                <Modal.Header closeButton >
                <Modal.Body>{props.chosenMovies.title}</Modal.Body>
                </Modal.Header>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.chosenMovies.poster_path}`} />
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commmentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Card.Text>
                                {props.chosenMovies.comment ? props.chosenMovies.comment : "No Comment is Added"}
                        </Card.Text>
                        <Button variant="primary" type="submit" onClick={handleComment}>
                            Submit
                        </Button>
                    </Form>
                    <Button variant="primary" type="submit" onClick={(e)=>{handleAddFav(e,props.chosenMovies)}}>
                            Add to Favorites
                    </Button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


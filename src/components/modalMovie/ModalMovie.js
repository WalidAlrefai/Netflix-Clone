
import "./ModalMovie.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
export default function ModalMovie(props) {
    
    return (
        
        <div className='modal'>
            {console.log(111,props.chosenMovies)}            
            <Modal show={props.show} onHide={props.ModalMoviehandleClose} >
                <Modal.Header closeButton >
               
                
                 <Modal.Body>{props.chosenMovies.title}</Modal.Body>
                </Modal.Header>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.chosenMovies.poster_path}`} />
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


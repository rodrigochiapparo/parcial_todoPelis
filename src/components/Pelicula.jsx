import React from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pelicula.css';




const Pelicula = ({pelicula}) => {
    return(
        <div id="pelicula" className="card-body d-flex flex-column align-items-center justify-content-between">
        <Card className="cardFinal" style={{width: '18rem' }}>
            {pelicula.Poster == 'N/A' ?
            'No hay imagen disponible':
            <Card.Img variant="top" src={pelicula.Poster} />
            }
            <Card.Body className="cardBody">
            <Card.Title>{pelicula.Title}</Card.Title>
            <Card.Text>
                <ul>
                    {pelicula.Country == 'N/A' ?
                    <li>No hay datos del pais</li> :
                    <li>{pelicula.Country}</li>
                    }
                    {pelicula.Actors == 'N/A' ?
                    <li>No hay datos de actores</li> :
                    <li>{pelicula.Actors}</li>
                    }
                </ul>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>

    );
}

export default Pelicula;
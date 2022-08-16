import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
function CardMovies({Movie}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Movie.poster} alt={`${Movie.title}`}/>
    <Card.Body>
      <Card.Title>{Movie.title}</Card.Title>
      <Card.Text>
        {Movie.decription}
      </Card.Text>
      <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    value={Movie.rate}
    edit={false}
  />
    </Card.Body>
  </Card>
  )
}

export default CardMovies

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
function Moviecard({props}) {
    console.log(props)
  return (
    <div style={{display:"flex", gap :"7rem", marginBottom: "3rem"}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title> {props.title}</Card.Title>
        <Card.Text>
          {props.description}<br/>
          <ReactStars
            count={5}
            value={props.rating} 
            size={24}
            color2={'#ffd700'} /><br/>
          {props.createdat}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
    </div>
  )
}

export default Moviecard
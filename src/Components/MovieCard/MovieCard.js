import React from "react"
import { Card ,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Rate from '../Rate'
import {Link} from 'react-router-dom'




 
export default function MovieCard ({movie:{id,name,description,image,date,trailer,rate}}){
    return(
        <div className="cards">
            <Card style={{ width: "18em"  }}>
  <Card.Img variant="top" src={image} />
  <Card.Body style={{color:"black"}}>
    <Card.Title>{name}</Card.Title>
    <Rate rate={rate}/>
    <Card.Text >
{description}
    </Card.Text>
    
<Link to={`/${id}`}><Button variant="primary">More information</Button></Link>
    
  </Card.Body>
</Card>
        </div>

    )
}

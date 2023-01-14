import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom';
import {Card , Button} from 'react-bootstrap';
import axios  from 'axios';

const UserProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user , setUser]=useState([]);
  useEffect(() => {
axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res)=>setUser(res.data[0]))
    .catch((err)=>console.log(err))
  })

  return (
    <div>
      <Card border="info" style={{ width: '18rem' }}> 
        <Card.Header>{user.name}</Card.Header>
        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>
            city : {user.address.city}
          <br/>
            Email address : {user.email}
            <br/>
            Phone number : {user.phone}
            <br/>
            Website : {user.website}
            <br/>
           Company name : {user.company.name}
          </Card.Text>
          <Button variant="outline-info" onClick={()=>navigate ('/users')}>Go back</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserProfile
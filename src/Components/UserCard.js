import React from 'react'
import {Card , Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './users.css';
const UserCard = ({user}) => {
    const navigate = useNavigate();
  return (
    <div className='usercard'>
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
          <Button variant="outline-info" onClick={()=>navigate (`/user/${user.id}`)}>User Info</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserCard
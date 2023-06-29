import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsPersonCircle } from "react-icons/bs"; 
const LogIn = () => {
  return (
    <div>
        <h1 className=' text-info text-center mt-4'>Sign-in</h1>
        <div className=' w-75 m-auto mt-4'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className=' text-white'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted ">
         <p className=' text-info'>We'll never share your email with anyone else.</p>  
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className=' text-white'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className=' text-white' label="Remember me" />
      </Form.Group>
      <div className=' w-100 d-flex justify-content-evenly'>
      <Button variant="primary" type="submit">
        sign in 
      </Button>
      <Button variant="primary" type="submit">
        Remove
      </Button>
      </div>
 
    </Form>
    
   <hr className=' text-white' />
   <div className=' d-flex justify-content-evenly'>
        <Button variant="dark"> <BsGithub/> Continue with Github</Button>{' '}
        <Button variant="danger"><SiGmail/> Continue with Gmail</Button>{' '}
        </div>
        <div className=' d-flex justify-content-center mt-5 pb-5'>
        <Button  variant="success"><BsPersonCircle className=' text-white'/> Create New Account</Button>{' '}
        </div>
     

        </div>
 
   
      
    </div>
  )
}

export default LogIn
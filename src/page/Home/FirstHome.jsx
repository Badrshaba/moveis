import React from 'react'
import Button from 'react-bootstrap/Button';
const FirstHome = () => {
  return (
    <div>
        <h1 className=' text-center text-info mt-4'>Home</h1>
        <div className=' d-flex flex-wrap'>
            <div className=' w-50'>
                <h3 className='text-white text-center mb-3'>SORT BY</h3>
                <div className=' d-flex justify-content-evenly'> 
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
                </div>
            </div>
            <div className=' w-50'>
                <h3 className='text-white text-center mb-3'>SORT ORDER</h3>
                <div className=' d-flex justify-content-evenly'>
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
                </div>
            </div>
        </div>
        <div className=' d-flex justify-content-center mt-2'>
        <hr className=' text-white w-75 ' />
        </div>

    </div>
  )
}

export default FirstHome
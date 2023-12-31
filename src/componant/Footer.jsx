import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark d-flex flex-column align-items-center  pt-3'>
        <p className='text-white text-center'>©2023 <span className=' text-primary fs-5'>React Movies</span>,All Rights Reserved</p>
        <p className=' text-danger text-center'>About Us<span className=' me-4 ms-4'>Terms of Use</span> Privacy</p>
    </div>
  )
}

export default Footer
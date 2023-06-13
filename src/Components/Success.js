import React, { Component } from 'react'

class Success extends Component{
  render(){
    const {values} = this.props;
    console.log(values)
  return (
    <div className='container max-w-[600px] mx-auto bg-[#EBF0F5] p-20 space-y-14 h-screen'>
      <h1 className='text-6xl text-center text-cyan-500 font-bold'>Successfully</h1>
      <h3 className='text-3xl text-center text-green-700 font-bold'>Your Multi-Step Contact Form Success. and Send the Data from the Server</h3>
      <div className='text-blue-600 font-semibold'>
        First Name:{" "}<span className='text-pink-500'>{values.firstName}</span>
        <br />
        Last Name:{" "}<span className='text-pink-500'>{values.lastName}</span>
        <br />
        Email:{" "}<span className='text-pink-500'>{values.email}</span>
        <br />
        Occupation:{" "}<span className='text-pink-500'>{values.occupation}</span>
        <br />
        City:{" "}<span className='text-pink-500'>{values.city}</span>
        <br />
        BioData:{" "}<span className='text-pink-500'>{values.bio}</span>
        <br />
      </div>
    </div>
  )
  }
}

export default Success

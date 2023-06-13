import React, { Component } from "react";

export class ConformDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process Form Detail
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, city, bio, occupation },
    } = this.props;

    return (
      <>
        <div className='container p-4 max-w-[600px] border mx-auto'>
          <h1 className='text-5xl text-center'>Please Conform Detail</h1>
          <form className='flex flex-col mx-auto items-center space-y-5 mt-20'>
            <div className='flex'>
              <label htmlFor=''>First Name:</label>
              <input
                className='text-gray-700 mr-3 py-1 px-2 text-center'
                type='text'
                value={firstName}
                readOnly
              />
            </div>
            <div className='flex'>
              <label htmlFor=''>Last Name:</label>
              <input
                className='text-gray-700 mr-3 py-1 px-2 text-center'
                type='text'
                value={lastName}
                readOnly
              />
            </div>
            <div className='flex'>
              <label htmlFor=''>Email: </label>
              <input
                className='text-gray-700 mr-3 py-1 px-2 text-center'
                type='text'
                value={email}
                readOnly
              />
            </div>
            <div className='flex'>
              <label htmlFor=''>City: </label>
              <input
                className='text-gray-700 mr-3 py-1 px-2 text-center'
                type='text'
                value={city}
                readOnly
              />
            </div>
            <div className='flex'>
              <label htmlFor=''>Bio Data: </label>
              <input
                className='text-gray-700 mr-3 py-1 px-2 text-center'
                type='text'
                value={bio}
                readOnly
              />
            </div>
            <div className='flex'>
              <label htmlFor=''>Occupation: </label>
              <input
                className='text-gray-700 mr-3 py-1 px-2 text-center'
                type='text'
                value={occupation}
                readOnly
              />
            </div>

            <div className='flex w-full justify-around'>
              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={this.back}>
                Back
              </button>
              <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                onClick={this.continue}
                type="submit"
                >
                Conform
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default ConformDetail;

import React, { Component } from "react";

export class UserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <div className='container p-4 max-w-[600px] border mx-auto'>
          <h1 className='text-5xl text-center'>Enter User Detail</h1>
          <div className='flex flex-col max-w-[250px] mx-auto items-center space-y-10 mt-20 '>
            <input
              className='w-full border text-gray-700 mr-3 py-1 px-2 text-center'
              type='text'
              defaultValue={values.firstName}
              onChange={handleChange("firstName")}
              placeholder='Enter First Name'
            />

            <input
              className='w-full border text-gray-700 mr-3 py-1 px-2 text-center'
              type='text'
              defaultValue={values.lastName}
              onChange={handleChange("lastName")}
              placeholder='Enter Last Name'
            />

            <input
              className='w-full border text-gray-700 mr-3 py-1 px-2 text-center'
              type='email'
              defaultValue={values.email}
              onChange={handleChange("email")}
              placeholder='Enter Your Email'
            />

            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
              onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default UserDetail;

import React, { Component } from "react";

export class PersonalDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <div className='container p-4 max-w-[600px] border mx-auto'>
          <h1 className='text-5xl text-center'>Enter Personal detail</h1>
          <div className='flex flex-col max-w-[250px] mx-auto items-center space-y-10 mt-20'>
            <input
              type='text'
              className='w-full border text-gray-700 mr-3 py-1 px-2 text-center'
              defaultValue={values.occupation}
              onChange={handleChange("occupation")}
              placeholder='Enter Occupation'
            />

            <input
              type='text'
              className='w-full border text-gray-700 mr-3 py-1 px-2 text-center'
              defaultValue={values.city}
              onChange={handleChange("city")}
              placeholder='Enter Your City'
            />

            <input
              type='text'
              className='w-full border text-gray-700 mr-3 py-1 px-2 text-center'
              defaultValue={values.bio}
              onChange={handleChange("bio")}
              placeholder='Bio Data'
            />
            <div className='flex w-full justify-around'>
              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                onClick={this.back}>
                Back
              </button>
              <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                onClick={this.continue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default PersonalDetail;

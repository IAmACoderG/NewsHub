import React, { Component } from 'react'
import loading from './loading.gif.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center m-3'><img src={loading} alt="loading" /></div>
    )
  }
}

export default Loading
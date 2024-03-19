import React, { Component } from 'react'

export default class spinner extends Component {
  render() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <img src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif" alt="loading..." width="100px" />
        </div>
    )
  }
}

// Write your code here
import {component} from 'react'

import './index.css'

class EvenOddApp extends component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displaytext = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className=" count-container ">
          <h1 className=" count">Count {count}</h1>
          <p className="number-category">Count is {displaytext}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

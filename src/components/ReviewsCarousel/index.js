// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    id: 0,
  }

  onClickLeftArrow = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const lenOfList = reviewsList.length
    const {id} = this.state
    if (id < lenOfList - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {id} = this.state

    const reviewToShow = reviewsList[id]
    console.log(reviewToShow)

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="review-container-arrows">
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-card">
            <img src={reviewToShow.imgUrl} alt={reviewToShow.username} />
            <p className="user-name">{reviewToShow.username}</p>
            <p className="company-name">{reviewToShow.companyName}</p>
            <p className="review-description">{reviewToShow.description}</p>
          </div>
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-4 '>
        <h2>NewsMonkey - Top Headline</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="mo idiot" description="mydesc" image="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
          <div className="col-md-4">
          <NewsItem title="myTitle" description="mydesc" image="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
          <div className="col-md-4">
          <NewsItem title="myTitle" description="mydesc" image="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="Mo subash lodu ho" description="mydesc" image="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
          <div className="col-md-4">
          <NewsItem title="myTitle" description="mydesc" image="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
          <div className="col-md-4">
          <NewsItem title="myTitle" description="mydesc" image="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"/>
          </div>
        </div>  
        
      </div>
    )
  }
}

export default News

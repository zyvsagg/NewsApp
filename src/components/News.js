import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        this is news section
        <NewsItem/>
      </div>
    )
  }
}

export default News

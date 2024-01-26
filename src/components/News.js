import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
  constructor(){
    super();
    console.log("hellooooo im from news components");
    this.state = {
     articles: [],
     loading: false
    }
      }


     async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0b5d88a4262d41e9a7af59ac51563f84";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
      }

  render() {
    return (
      <div className='container my-4 '>
        <h1>NewsMonkey - Top Headline</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4 " key ={element.url}>
          <NewsItem  title={element.title}description={element.description} image={element.urlToImage} newsUrl={element.url}/>
          </div>
          
        })}
          
        </div>
        
        
      </div>
    )
  }
}

export default News

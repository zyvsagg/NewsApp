import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let { title, description,image, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!image?"https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":image}
            className="card-img-top"s
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More 
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

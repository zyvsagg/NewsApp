import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,image } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsItems" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let{tittle ,desc,img,buttonurl}= this.props;
    return (
        <>
              <div className="card" style={{width: "18rem"}}>
              <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body" key={buttonurl}>
                <h5 className="card-title">{tittle}...</h5>
                <p className="card-text">{desc}...</p>
                <a href={buttonurl} className="btn btn-sm btn-primary">Go and Read</a>
                </div>    
      </div>
      </>
    )
  }
}

export default NewsItem
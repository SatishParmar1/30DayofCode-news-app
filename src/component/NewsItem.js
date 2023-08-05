import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let{tittle ,desc,img,buttonurl}= this.props;
    return (
        <>
              <a href={buttonurl} className="text-decoration-none "><div className="card" >
              <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body" key={buttonurl}>
                <h5 className="card-title">{tittle}...</h5>
                <p className="card-text">{desc}...</p>
                <a href={buttonurl} className="btn btn-sm btn-primary" >Go and Read</a>
                </div>    
      </div>
      </a>
      </>
    )
  }
}

export default NewsItem
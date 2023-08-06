import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class NewsItem extends Component {
  
  render() {
    let{tittle ,desc,img,buttonurl,auther,date,source}= this.props;
    return (
        <>
              <Link to={buttonurl} className="text-decoration-none "><div className="card" >
                <div className='d-flex content-justify-end '>
              <span class="position-absolute translate-middle badge rounded-pill bg-danger" style={{left:"80%",zIndex:"1" }}> {source}</span>
              </div>
              <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body" key={buttonurl}>
                <h5 className="card-title">{tittle}...</h5>
                <p className="card-text">{desc}...</p>
                <p className="card-text"><small className="text-muted">By {auther} on {new Date(date).toGMTString()}</small></p>
                <Link to={buttonurl} className="btn btn-sm btn-primary" >Go and Read</Link>
                </div>    
      </div>
     
      </Link>
      </>
    )
  }
}

export default NewsItem
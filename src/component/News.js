import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
        <>
      <h1 className="d-flex justify-content-center">Today News</h1>
      <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                      <NewsItem type="cricket" desc="now you are watching cricket news"  />
                    </div>
                    <div className="col-md-4">
                      <NewsItem type="cricket" desc="now you are watching cricket news"  />
                    </div>
                    <div className="col-md-4">
                      <NewsItem type="cricket" desc="now you are watching cricket news"  />
                    </div>
                </div>
        </div>
      </>
    )
  }
}

export default News
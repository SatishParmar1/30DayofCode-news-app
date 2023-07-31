import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{type ,desc,link,img}= this.props;
    return (
        <><div className="card" style={{width: "18rem"}}>
                <img src="https://www.hindustantimes.com/ht-img/img/2023/04/21/1600x900/CRICKET-IND-IPL-T20-PUNJAB-BANGALORE-36_1682063217086_1682063468089.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{type}</h5>
                <p className="card-text">{desc}</p>
                <a href="/news" className="btn btn-primary">Go and watch</a>
        </div>
      </div>
      </>
    )
  }
}

export default NewsItem
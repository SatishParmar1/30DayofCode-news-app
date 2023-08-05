import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {
  static default ={
    country:'india',
    pagesize: "30",
    newstype: 'general'
  }

  constructor(){
    super();
    this.state ={

    articles :[],
    loading:false,
    page:1,
    
    }
  }

  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,
     totalResult: parsedData.totalResult,
    loading:false,
  });
  } 

  handlenext = async()=> {
   if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({ 
      page:this.state.page+1,
      articles: parsedData.articles,
      loading:false,
     });

    }
  }
  handlepreious = async()=>{
    
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({ 
      page:this.state.page-1,
      articles: parsedData.articles,
      loading:false,
     });
  }

  render() {
    return (
        <>
       
      <h1 className="d-flex justify-content-center mt-5 pt-3">NEWS HEADLINES</h1>
      
      {this.state.loading && <Spinner/>}
      <div className="container my-3">
                <div className="row">
                    
                    {!this.state.loading && this.state.articles.map((element) => {  
                   return(
                    <div className="col-md-4 my-3" key={element.url?element.url:" "}>
                    <NewsItem type="cricket" desc={element.description?element.description.slice(0,130):" "} img={element.urlToImage?element.urlToImage:" "}  tittle={element.title.slice(0,42)} buttonurl={element.url}/>
                    </div>
                   )                 
                    })};
                      </div> 
                      <div className="container d-flex justify-content-between pb-5 mb-5">
                      <button disabled={this.state.page<=1} type="button" className="btn btn-dark btn-lg" onClick={this.handlepreious}> &larr; Previous</button>  
                      <button disabled={this.state.page+ 1> Math.ceil(this.state.totalResult/20)}type="button" className="btn btn-dark btn-lg"onClick={this.handlenext}>Next &rarr;</button>
                      </div>     
                                       
        </div>
      
      </>
    )
  }
}

export default News
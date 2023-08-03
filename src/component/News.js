import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state ={

    articles :[],
    loading:false,
    page:1,
    }
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/everything?q=entertainment&from=2023-08-01&to=2023-08-01&sortBy=popularity&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&pagesize=30";
    let data = await fetch(url);
    let parsedData = await data.json();
this.setState({ articles: parsedData.articles, totalResult: parsedData.totalResult});
  } 

  handlenext = async()=> {
   if(this.state.page+ 1> Math.ceil(this.state.totalResult/600)){

   }else{
     let url =`https://newsapi.org/v2/everything?q=entertainment&from=2023-08-01&to=2023-08-01&sortBy=popularity&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=30`;
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({ 
      page:this.state.page+1,
      articles: parsedData.articles,
     });
     console.log("done");
    }
  }
  handlepreious = async()=>{
    
     let url =`https://newsapi.org/v2/everything?q=entertainment&from=2023-08-01&to=2023-08-01&sortBy=popularity&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page-1}&pagesize=30`;
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({ 
      page:this.state.page-1,
      articles: parsedData.articles,
     });
  }

  render() {
    return (
        <>
      <h1 className="d-flex justify-content-center">Today News</h1>
      <div className="container my-3">
                <div className="row">
                    
                    {this.state.articles.map((element) => {  
                   return(
                    <div className="col-md-4 my-3" key={element.url?element.url:" "}>
                    <NewsItem type="cricket" desc={element.description?element.description.slice(0,130):" "} img={element.urlToImage?element.urlToImage:" "}  tittle={element.title.slice(0,42)} buttonurl={element.url}/>
                    </div>
                   )                 
                    })};
                      </div> 
                      <div className="container d-flex justify-content-between my-5">
                      <button disabled={this.state.page<=1} type="button" className="btn btn-dark btn-lg" onClick={this.handlepreious}> &larr; Previous</button>  
                      <button type="button" className="btn btn-dark btn-lg"onClick={this.handlenext}>Next &rarr;</button>
                      </div>     
                                       
        </div>
      </>
    )
  }
}

export default News
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {
  static default ={
    country:'india',
    pagesize: "30",
    newstype: 'general'
  }
capitalizeFirstLetter =(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}
  constructor(props){
    super(props);
    this.state ={
    articles :[],
    loading:false,
    page:1,
    
    }
    document.title=`${this.capitalizeFirstLetter(this.props.newstype)}-NewsFlash`;
  }

  async componentDidMount(){
    this.props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles,
     totalResult: parsedData.totalResult,
    loading:false,
  });
  this.props.setProgress(100);
  } 

  handlenext = async()=> {
    this.props.setProgress(10);
   if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     this.props.setProgress(40);
     let parsedData = await data.json();
     this.props.setProgress(70);
     this.setState({ 
      page:this.state.page+1,
      articles: parsedData.articles,
      loading:false,
     });

    }
    this.props.setProgress(100);
  }
  handlepreious = async()=>{
    this.props.setProgress(10);
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     this.props.setProgress(40);
     let parsedData = await data.json();
     this.props.setProgress(70);
     this.setState({ 
      page:this.state.page-1,
      articles: parsedData.articles,
      loading:false,
     });
     this.props.setProgress(100);
  }

  render() {
    return (
        <>
       <div className="text-center" id="headlines">
      <p className="text-center mt-5 pt-3 fs-3">NewsFlash- Top {this.capitalizeFirstLetter(this.props.newstype)} Headlines</p>
      </div>
      {this.state.loading && <Spinner/>}
      <div className="container my-3">
                <div className="row">
                    
                    {!this.state.loading && this.state.articles.map((element) => {  
                   return(
                    <div className="col-md-4 my-3" key={element.url?element.url:" "}>
                    <NewsItem type="cricket" desc={element.description?element.description.slice(0,130):" "}
                     img={element.urlToImage?element.urlToImage:" "}  
                     tittle={element.title.slice(0,42)} 
                     buttonurl={element.url}
                      auther={element.author?element.author:"Unknow"}
                       date={element.publishedAt?element.publishedAt:"Unknown"}
                       source={element.source.name} />
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
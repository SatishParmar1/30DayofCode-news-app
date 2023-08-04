import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {

  constructor(){
    super();
    this.state ={

    articles :[],
    loading:false,
    page:1,
    country:'in',
    newstype:'entertainment',
    }
  }

  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=1&pagesize=${this.props.pagesize}`;
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
     let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
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
    
     let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({ 
      page:this.state.page-1,
      articles: parsedData.articles,
      loading:false,
     });
  }
 
  handleentertainment=async(newstype)=>{
    this.setState({
      newstype:newstype,
    })
    if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
       page:this.state.page+1,
       articles: parsedData.articles,
       loading:false,
       newstype:newstype,
      });
 
     }
  }
  handlesport =async(newstype)=>{
    this.setState({
      newstype:newstype,
      
    });
    if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
       page:this.state.page+1,
       articles: parsedData.articles,
       loading:false,
       newstype:newstype,
      });
  
     }
  }

  handlebusiness =async(newstype)=>{
    this.setState({
      newstype:newstype,
      
    });
    if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
       page:this.state.page+1,
       articles: parsedData.articles,
       loading:false,
       newstype:newstype,
      });
  
     }
  }

  handletechnology =async(newstype)=>{
    this.setState({
      newstype:newstype,
      
    });
    if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
       page:this.state.page+1,
       articles: parsedData.articles,
       loading:false,
       newstype:newstype,
      });
 
     }
  }
 



  handlecountryin=async(country)=>{
    this.setState({
      country:country,
      
    });
    if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
      let url =`https://newsapi.org/v2/top-headlines?country=${country}&category=${this.state.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
       page:this.state.page+1,
       articles: parsedData.articles,
       loading:false,
       country:country,
      });
 
     }
  }
  handlecountryusa=async(country)=>{
    this.setState({
      country:country,
      
    });
    if(!(this.state.page+ 1> Math.ceil(this.state.totalResult/this.props.pagesize))){
      let url =`https://newsapi.org/v2/top-headlines?country=${country}&category=${this.state.newstype}&apiKey=e8fb1c87a0fc4a83a1ee1752d4685daa&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
       page:this.state.page+1,
       articles: parsedData.articles,
       loading:false,
       country:country,
      });
 
     }
  }

  render() {
    return (
        <>
        
      <h1 className="d-flex justify-content-center">Today News</h1>
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
        <nav className="navbar fixed-bottom navbar-light d-flex flex-nowrap " style={{backgroundColor:"#e3f2fd"}}>
            <div className="container-fluid ">
              <a className="navbar-brand" href="/">NewsFlash</a>
              </div>
              <div class="container-fluid  bd-highlight">
              <button class=" px-1 bd-highlight btn btn btn-outline-primary " onClick={() => this.handlecountryin("in")}style={{minWidth:"100px"}}>India</button>
              <button class=" px-1 bd-highlight btn btn btn-outline-primary "  onClick={() => this.handlecountryusa("us")}style={{minWidth:"100px"}}>USA</button>
              <button class="px-1 bd-highlight btn btn btn-outline-primary"  onClick={() => this.handleentertainment("entertainment")}style={{minWidth:"100px"}}>Entertainment</button>
              <button  class="px-1 bd-highlight btn btn btn-outline-primary" onClick={() => this.handlesport("sports")} style={{minWidth:"100px"}}>Sports</button>
              <button  class="px-1 bd-highlight btn btn btn-outline-primary"  onClick={() => this.handletechnology("technology")}style={{minWidth:"100px"}}>Technology</button>
              <button  class="px-1 bd-highlight btn btn btn-outline-primary" onClick={() => this.handlebusiness("business")} style={{minWidth:"100px"}}>business</button>
            </div>
            
        </nav>
      </>
    )
  }
}

export default News
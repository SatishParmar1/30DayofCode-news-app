
import './App.css';

import React, { Component } from 'react'
import  Navbar  from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
//import Spinner from './component/Spinner';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

export default class App extends Component {
  state={
    progress:0
  }
  setProgress =(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
     <Router basename="/30DayofCode-news-app">
      <Navbar/>
      <LoadingBar
      height="4px"
        color='#f11946'
        progress={this.state.progress}
      />
     
      <Routes>
      <Route exact path="/30DayofCode-news-app"  key="general "  element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="general"/>  }/>    
     </Routes>
      <Routes>
      <Route exact path="/30DayofCode-news-app/general" key="general" element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="general"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/30DayofCode-news-app/entertainment" key="entertainment" element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="entertainment"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/30DayofCode-news-app/health" key="health" element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="health"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/30DayofCode-news-app/science" key="science"  element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="science"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/30DayofCode-news-app/sports" key="sports"  element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="sports"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/30DayofCode-news-app/technology" key="technology"  element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="technology"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/30DayofCode-news-app/business" key="business" element={  <News setProgress = {this.setProgress} pagesize={30}  country="in" newstype="business"/>  }/>    
     </Routes>
     
      </Router>     
      </>
    )
  }
}


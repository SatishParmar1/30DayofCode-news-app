
import './App.css';

import React, { Component } from 'react'
import Nevbar, { Navbar } from './component/Navbar';
import News from './component/News';
//import Spinner from './component/Spinner';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
     
      <Routes>
      <Route exact path=""  key="general "  element={  <News pagesize={30}  country="in" newstype="general"/>  }/>    
     </Routes>
      <Routes>
      <Route exact path="/general" key="general" element={  <News pagesize={30}  country="in" newstype="general"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/entertainment" key="entertainment" element={  <News pagesize={30}  country="in" newstype="entertainment"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/health" key="health" element={  <News pagesize={30}  country="in" newstype="health"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/science" key="science"  element={  <News pagesize={30}  country="in" newstype="science"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/sports" key="sports"  element={  <News pagesize={30}  country="in" newstype="sports"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/technology" key="technology"  element={  <News pagesize={30}  country="in" newstype="technology"/>  }/>    
     </Routes>
     <Routes>
      <Route exact path="/business" key="business" element={  <News pagesize={30}  country="in" newstype="business"/>  }/>    
     </Routes>
     
      </Router>     
      </>
    )
  }
}


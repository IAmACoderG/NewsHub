
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state = {
    progress: 0
  };
  setProgress = (progress) => {
    this.setState({ progress: progress })
  };
  render() {

    const propPassingB = {
      pageSize: 6,
      country: 'in',
      category: 'business'
    }
    const propPassingE = {
      pageSize: 6,
      country: 'in',
      category: 'entertainment'
    }
    const propPassingG = {
      pageSize: 6,
      country: 'in',
      category: 'general'
    }
    const propPassingHe = {
      pageSize: 6,
      country: 'in',
      category: 'health'
    }
    const propPassingSc = {
      pageSize: 6,
      country: 'in',
      category: 'science'
    }
    const propPassingSp = {
      pageSize: 6,
      country: 'in',
      category: 'sports'
    }
    const propPassingT = {
      pageSize: 6,
      country: 'in',
      category: 'technology'
    }


    return (


      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#0a18df'
            progress={this.state.progress}
          />
          <div>
            <Routes>
              <Route exact path='/' element={<News setProgress={this.setProgress} key="general" pageSize={propPassingG.pageSize} country={propPassingG.country} category={propPassingG.category} />} />
              <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={propPassingB.pageSize} country={propPassingB.country} category={propPassingB.category} />} />
              <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={propPassingE.pageSize} country={propPassingE.country} category={propPassingE.category} />} />

              <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={propPassingHe.pageSize} country={propPassingHe.country} category={propPassingHe.category} />} />
              <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={propPassingSc.pageSize} country={propPassingSc.country} category={propPassingSc.category} />} />
              <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={propPassingSp.pageSize} country={propPassingSp.country} category={propPassingSp.category} />} />
              <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={propPassingT.pageSize} country={propPassingT.country} category={propPassingT.category} />} />

            </Routes>
          </div>
        </Router>
      </>


    )
  }
}

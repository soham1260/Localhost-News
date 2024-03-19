import "./index.css"
import Navbar from './components/navbar'
import News  from './components/news'
import React, { Component } from 'react'
import About from "./components/about"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Navbar/><News pageSize={8} apiKey={process.env.REACT_APP_NEWS_API} category={"general"}/></>}/>
            <Route path="/about" element={<><Navbar/><About/></>}/>
            <Route path="/business" element={<><Navbar/><News pageSize={8} apiKey={process.env.REACT_APP_NEWS_API} category={"business"}/></>}/>
            <Route path="/entertainment" element={<><Navbar/><News pageSize={8} apiKey={process.env.REACT_APP_NEWS_API} category={"entertainment"}/></>}/>
            <Route path="/health" element={<><Navbar/><News pageSize={8} apiKey={process.env.REACT_APP_NEWS_API} category={"health"}/></>}/>
            <Route path="/science" element={<><Navbar/><News pageSize={8} apiKey={process.env.REACT_APP_NEWS_API} category={"science"}/></>}/>
            <Route path="/sports" element={<><Navbar/><News pageSize={8} apiKey={process.env.REACT_APP_NEWS_API} category={"sports"}/></>}/>
            <Route path="/technology" element={<><Navbar/><News pageSize={8} apiKey={process.env.REACT_APP_NEWS_API} category={"technology"}/></>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

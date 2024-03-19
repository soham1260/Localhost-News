import React, { Component } from 'react'
import { useSelector } from 'react-redux';
export default function Newsitem(props){
    const mode = useSelector(state => state.darkMode)
    let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div>
      <style>
      {`
        .darknewsitem {
          background-color: black;
          color: white;
          border : solid white 1px
        }
      `}
      </style>
        <div className={`card ${mode && "darknewsitem"}`}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className={mode ? "darknews" : ""}>{author && ("By " + author)} {author && <br />}{new Date(date).toLocaleString()}</small></p>
                <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

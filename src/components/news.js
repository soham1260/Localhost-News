import React, { useState, useEffect } from "react";
import NewsItem from "./newsitem";
import Spinner from "./spinner";
import Dark from "../dark.png";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from "react-redux";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [TotalResults, setTotalResults] = useState(1);
  const [Loading, setLoading] = useState(true);
  const [Country, setCountry] = useState("in");
  const mode = useSelector(state => state.darkMode)
  useEffect(() => {
    setArticles([]);
    setPage(1);
    setTotalResults(0);
    setLoading(true);
  }, [props.category]);

  useEffect(() => {
    console.log(props.category);
    let url =
      "https://newsapi.org/v2/top-headlines?country=" +
      Country +
      "&category=" +
      props.category +
      "&apiKey="+props.apiKey+"&page=" +
      (page)+
      "&pageSize=" +
      props.pageSize +
      "";
    fetch(url)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log(parsedData);
        setTotalResults(parsedData.totalResults);
        setArticles(prevArticles => prevArticles.concat(parsedData.articles));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.category, page, Country, props.apiKey, props.pageSize]);

  const fetchMoreData = () => {
    console.log(page);
    setPage(page+1);
  }

  return (
    <div className={mode ? "darknews" : ""}>
      <style>
        {`
          .darknews {
            background-color: black;
            color: white;
          }
        `}
      </style>
      <div style={{ paddingTop: "5%" }} className="container my-3">
        <h2 className="container m-3" style={{ textAlign: "center" }}>
          Localhost News -{" "}
          {props.category === "general"
            ? "Top Headlines"
            : props.category.charAt(0).toUpperCase() + props.category.slice(1)}
        </h2>
        {Loading ? <Spinner/> : null}
        <>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length != TotalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="row">
                {articles.map((element) => (
                  <div key={element.url} className="col-md-3 my-3">
                    <NewsItem
                      title={
                        element.title ? element.title.slice(0, 50) + "..." : ""
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 100) + "..."
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </>
      </div>
    </div>
  );
};

export default News;

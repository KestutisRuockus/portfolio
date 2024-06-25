import React from "react";
import latestNews from "../../data/latestNews";

type LatestNewsType = {
  title: string;
  content: string;
  img: string;
};

export default function LatestNews() {
  const listOfNews: LatestNewsType[] = latestNews;
  return (
    <div className="flex justify-center flex-wrap gap-8 m-12">
      {listOfNews.map((news, index) => (
        <div key={index} className="latest-news-wrapper bg-gray-100">
          <div className="container">
            <div className="content">
              <h1>{news.title}</h1>
              <p>{news.content}</p>
              <span>Read More</span>
            </div>
            <img className="latest-news-image" src={news.img} />
          </div>
        </div>
      ))}
    </div>
  );
}

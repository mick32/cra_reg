import React from "react";
import "whatwg-fetch";

import { Body, Container, NewsTitle, NewsText, Loader } from "./styles";

const requestURL = "https://mysterious-reef-29460.herokuapp.com/api/v1/news";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoad: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(requestURL)
      .then(res => res.json(), err => err.message)
      .then(info => {
        this.setState({ news: info.data, isLoad: true });
      });
  };

  render() {
    const { news, isLoad } = this.state;

    if (!isLoad) {
      return <Loader />;
    }

    return (
      <Body>
        {news.map(body => (
          <Container key={body.id}>
            <NewsTitle>
              Статья #{body.id}: {body.title}
            </NewsTitle>
            <NewsText>{body.text}</NewsText>
          </Container>
        ))}
      </Body>
    );
  }
}

export default News;

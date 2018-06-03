import React from "react";
import styled from "styled-components";
import "whatwg-fetch";

const Body = styled.div`
  height: auto;

  display: flex;
  flex-direction: column;
`;

const News = styled.div`
  height: auto;
  width: 600px;
  margin-bottom: 20px;
  border: 1px solid;
  background: #f7f6f6;
  margin-left: auto;
  margin-right: auto;
`;

const NewsTitle = styled.p``;

const NewsText = styled.p``;

const requestURL = "https://mysterious-reef-29460.herokuapp.com/api/v1/news";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(requestURL)
      .then(res => res.json(), err => err.message)
      .then(info => {
        /* console.log(info); */
        this.setState({ news: info.data });
      });
  };

  render() {
    /*     const resp = this.state.news;
    console.log(resp); */
    return (
      <Body>
        {this.state.news.map(body => (
          <News>
            <NewsTitle>
              Статья #{body.id}: {body.title}
            </NewsTitle>
            <NewsText>{body.text}</NewsText>
          </News>
        ))}
      </Body>
    );
  }
}

export default App;

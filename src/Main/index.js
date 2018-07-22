import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  font-size: 22px;
`;

export default () => {
  return (
    <Main>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam
        et purus sit amet maximus. Donec imperdiet sed mi at scelerisque. Sed at
        porttitor dui. Nulla lorem dolor, suscipit sit amet rutrum et, interdum
        quis nibh. Donec semper ligula sed rhoncus fringilla. Vivamus rutrum dui
        suscipit orci interdum, sit amet blandit mi feugiat. Nam in dui id
        ligula malesuada suscipit nec in nisi.
      </Text>
    </Main>
  );
};

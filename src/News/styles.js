import styled, { keyframes } from "styled-components";

export const Body = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: auto;
  width: 600px;
  margin-bottom: 20px;
  border: 1px solid;
  background: #f7f6f6;
  margin-left: auto;
  margin-right: auto;
`;

export const NewsTitle = styled.p`
  font-style: italic;
  color: darkred;
  text-align: center;
`;

export const NewsText = styled.p`
  text-align: center;
`;

export const dualRing = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;

  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #f7f6f6;
    border-color: #383838 transparent #383838 transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;

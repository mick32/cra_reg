import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 80px;
  box-shadow: 0px 1px 0px 0px rgba(72, 72, 72, 0.15);
  background: #f7f6f6;
  margin-bottom: 20px;
`;

const Menu = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuLink = styled.a`
  text-decoration: none;
  margin-right: 25px;
  font-size: 20px;
  color: #383838;
`;

export default () => {
  return (
    <Header>
      <Menu>
        <MenuLink href="/">Logo</MenuLink>
        <MenuLink href="/login">Login</MenuLink>
        <MenuLink href="/news">News</MenuLink>
        <MenuLink href="#">Profile</MenuLink>
      </Menu>
    </Header>
  );
};

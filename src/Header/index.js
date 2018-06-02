import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 80px;
  box-shadow: 0px 1px 0px 0px rgba(72, 72, 72, 0.15);
  background: #f7f6f6;
  margin-bottom: 20px;
`;

const Menu = styled.div`
  height: 80px;
  text-align: right;
  position: absolute;
  top: 6%;
  right: 0;
`;

const MenuLink = styled.a`
  height: 80px;
  text-align: right;
  text-decoration: none;
  margin-right: 25px;
  font-size: 20px;
  color: #383838;
`;

export default () => {
  return (
    <Header>
      <Menu>
        <MenuLink href="#">Login</MenuLink>
        <MenuLink href="#">News</MenuLink>
        <MenuLink href="#">Profile</MenuLink>
      </Menu>
    </Header>
  );
};

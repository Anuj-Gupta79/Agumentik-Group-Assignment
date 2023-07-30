import React from "react";
import styled from "styled-components";
import brandLogo from "../Picture/brandLogo.png";

const NavWrapper = styled.nav`
  background: transparent;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBrand = styled.a`
  color: #004d4d;
  font-size: 35px;
  font-weight: 500;
  text-decoration: none;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled.a`
  color: #004d4d;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
`;

const NavButton = styled.button`
  padding: 15px;
  cursor: pointer;
  background-color: #009999;
  color: #ffff;
  border: none;
  border-radius: 30px;
  font-weight: 400;
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <NavBrand href="/">
      <Logo src={brandLogo}></Logo>
        payquad
      </NavBrand>
      <NavItems>
        <NavItem>
          <NavLink href="#">Residents/Tenants</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Property Manager</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Support</NavLink>
        </NavItem>
      </NavItems>
      <NavButton>Sign In</NavButton>
    </NavWrapper>
  );
};

export default Navbar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../data/navbar.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* navbar expands small,startinfg from the small screen it can be
        displayed in expand ,links are white not dark, padding small screen is 5  */}
        <Link to="/">
          <img
            src={img}
            width={50}
            height={50}
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              E-commerce
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="mr-2">
            <i className="fas fa-cart-plus" />
            mycart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: darkred;
  .nav-link {
    font-size: 2rem;
    text-transform: uppercase;
    color: darkblue !important;
  }
`;

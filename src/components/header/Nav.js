import styled from "styled-components"
import React from "react"
import NavLinkListItem from "../header/NavLinkListItem"
import { Link } from "gatsby"
import { breakpoint } from "../../utils/breakpoints"
import BurgerButton from "./BurgerButton"
import NavLinkList from "./NavLinkList"

const Nav = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <NavWrapper>
      <BurgerButton
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      />
      <NavLinkList isMenuExpanded={isMenuExpanded}>
        <NavLinkListItem>
          <Link to="/projects">Projects</Link>
        </NavLinkListItem>
        <NavLinkListItem>
          <Link to="/projects">About</Link>
        </NavLinkListItem>
        <NavLinkListItem>
          <Link to="/projects">Blog</Link>
        </NavLinkListItem>
        <NavLinkListItem>
          <Link to="/projects">Contact</Link>
        </NavLinkListItem>
      </NavLinkList>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  height: 100%;
  ${breakpoint.md`
  width: 60%;`}
`

export default Nav

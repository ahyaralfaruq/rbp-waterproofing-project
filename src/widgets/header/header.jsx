import React from 'react'
import NavbarTimer from './NavbarTimer/NavbarTimer'
import NavbarBranding from './NavbarBranding/NavbarBranding'
import NavbarMenu from './NavbarMenu/NavbarMenu'

const Header = () => {
  return (
    <header>
      <NavbarTimer />
      <NavbarBranding />
      <NavbarMenu />
    </header>
  )
}

export default Header
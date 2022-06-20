import { Logo, StyledNav } from './styles'

import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="Ignite Games" />
        <h1>Ignite</h1>
      </Logo>
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </StyledNav>
  )
}

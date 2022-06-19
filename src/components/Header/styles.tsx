import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  background-color: var(--gray-700);
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: var(--blue);
    color: var(--white);
  }
`

export const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`

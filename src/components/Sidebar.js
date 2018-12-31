import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const fil = keyframes`
  20% {
    background-position: 20%;
  }
  40% {
    background-position: 40%;
  }
  60% {
    background-position: 60%;
  }
  80% {
    background-position: 80%;
  }
  100% {
    background-position: 100%;
  }
`

const Sidebar = styled('div')`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('bg.png');
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 7.5px;
  flex-wrap: wrap;
  @media (min-width: 500px) {
    flex-direction: column;
    min-width: 70px;
    width: 5%;
    animation: ${fil} 10s ease infinite;
  }
  a {
    /* min-width: 70px; */
    padding: 5px;
    box-shadow: none;
    font-weight: bold;
    color: inherit;
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      box-shadow: 0 1px 0 0 currentColor;
    }
  }
`

export default () => (
  <Sidebar>
    <Link to="/">Home</Link>
    <Link to="/anime">Anime</Link>
    <Link to="/life">Life</Link>
    <Link to="/music">Music</Link>
    <Link to="/years">Years</Link>
  </Sidebar>
)

import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Sidebar = styled('div')`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('http://i.imgur.com/AfE1ZFl.png');
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 5%;
  min-width: 70px;
  a {
    box-shadow: none;
    font-weight: bold;
    color: inherit;
    transition: all 0.3s;
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

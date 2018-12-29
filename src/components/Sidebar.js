import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

const Sidebar = styled('div')`
  border-right: 2px solid #ddd;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 5%;
  min-width: 70px;
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

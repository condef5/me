import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Sidebar from './Sidebar'

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
`

const Content = styled('div')`
  padding: 1.5em 60px;
  width: 95%;
  max-height: 100vh;
  overflow: auto;
  &.home {
    background: linear-gradient(rgb(11, 12, 26), rgb(19, 20, 22));
    transition: all 0.3s;
    color: #fff;
  }
`

export default ({ children }) => {
  const color = location.pathname === '/' ? 'home' : ''
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Wrapper>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Frank Condezo</title>
          </Helmet>
          <Global
            styles={css`
              html {
                overflow: inherit;
              }
            `}
          />
          <Sidebar name={data.site.siteMetadata.title} />
          <Content className={color}>{children}</Content>
        </Wrapper>
      )}
    />
  )
}

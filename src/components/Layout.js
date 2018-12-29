import React from 'react'
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
  padding: 1em 30px;
  width: 95%;
  max-height: 100vh;
  overflow: auto;
`

export default ({ children }) => (
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
        <Global
          styles={css`
            html {
              overflow: inherit;
            }
          `}
        />
        <Sidebar name={data.site.siteMetadata.title} />
        <Content>{children}</Content>
      </Wrapper>
    )}
  />
)

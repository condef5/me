import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'confetti-js'

const Index = () => (
  <StaticQuery
    query={graphql`
      {
        avatar: file(relativePath: { eq: "frank.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={({ avatar }) => (
      <div>
        <Img
          fixed={avatar.childImageSharp.fixed}
          style={{ borderRadius: '50%' }}
        />
      </div>
    )}
  />
)

export default Index

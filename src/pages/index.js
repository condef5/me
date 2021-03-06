import React from 'react'
import { css, keyframes } from '@emotion/core'
import Layout from '../components/Layout'
import Me from '../components/Me'
import styled from '@emotion/styled'

const fil = keyframes`
  20% {
    filter: saturate(4);
  }
  40% {
    filter: brightness(2);
  }
  60% {
    filter: invert(1.1);
  }
  80% {
    filter: invert(1.8);
  }
  100% {
    filter: brightness(1);
  }
`

const Wrap = styled('div')`
  margin: auto;
  text-align: center;
  font-weight: 200;
  font-size: 18px;
  .list {
    text-align: left;
    & > div {
      margin-top: 10px;
    }
  }
  @media (min-width: 700px) {
    max-width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    .list {
      padding-left: 2.5em;
    }
  }

  a {
    color: cyan;
  }
  span {
    font-weight: 700;
  }
  height: 100%;
  img {
    animation: ${fil} 6s ease infinite;
    &:hover {
      filter: none;
    }
  }
`

export default () => {
  return (
    <Layout>
      <Wrap>
        <Me />
        <div className="list">
          <div>
            Hola, me llamo Frank Condezo (
            <a href="https://github.com/condef5/">condef5</a>).
          </div>
          <div>
            Me encanta <span>leer</span>.
          </div>
          <div>
            Adicto al <span>anime</span> y <span>manga</span>.
          </div>
          <div>
            Amo caminar solo, pero si es con <span>compañia</span> lo disfruto
            aún más.
          </div>
          <div>
            <span>Desarrollador</span> FullStack <span>Javascript</span>, fan de
            ruby y aprendiz de <span>elixir</span>.
          </div>
        </div>
      </Wrap>
    </Layout>
  )
}

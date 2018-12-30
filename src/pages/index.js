import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Me from '../components/Me'
import styled from '@emotion/styled'

const Wrap = styled('div')`
  max-width: 550px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 18px;
  .list {
    text-align: left;
    padding-left: 2.5em;
    & > div {
      margin-top: 10px;
    }
  }
  a {
    color: cyan;
  }
  span {
    font-weight: 500;
  }
  height: 100%;
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

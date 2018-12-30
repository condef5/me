import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>No Encontrado</h1>
        <p>Acabas de llegar a una ruta que no existe ... que sad :(.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

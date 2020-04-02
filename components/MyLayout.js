import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div>
    <Head>
      <title key="title">
        { props.title }
      </title>
    </Head>

    <div
      style={ layoutStyle }
    >
      <Header />
      { props.children }
    </div>
  </div>
)

export default Layout

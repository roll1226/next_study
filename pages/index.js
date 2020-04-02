import Link from 'next/link'
import Router from 'next/router'
import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'

export default () => (
  <Layout title={ 'たいとる' }>
    <p>
      Welcome to next.js!
    </p>

    <div>
      <img src="/static/cf32bf83640edfaf91f649eebe0ccd40.jpg" alt="天神子兎音様" />
    </div>

    <Link href="/fetch">
      <OnClick />
    </Link>

    <Link href="/fetch" passHref>
      <MyAnchr>
        fetchページへ
      </MyAnchr>
    </Link>

    <input
      type="button"
      value="fetchへ"
      onClick = {() => Router.push('/fetch')}
    />
  </Layout>
)

class OnClick extends Component {
  render() {
    return (
      <div
        onClick={ this.props.onClick }
      >
        onClick・・ありますぜ・・？
      </div>
    );
  }
}

class MyAnchr extends Component {
  render() {
    return (
      <a style={{ color: 'red' }} href={ this.props.href }>
        { this.props.children }
      </a>
    )
  }
}

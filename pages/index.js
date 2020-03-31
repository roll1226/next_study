import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { Component } from 'react';

export default () => (
  <div>
    <Head>
      <title key="title">
        たいとる
      </title>
    </Head>

    <div>
      Welcome to next.js!
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
  </div>
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

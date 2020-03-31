import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {
  static async getInitialProps() {
    return {
      hoge: 'hoge'
    }
  }

  render() {
    return (
      <div>
        <p>
          fetch
          <div>
            { this.props.hoge }
          </div>
        </p>

        <Link href="/">
          <a>
            indexページへ
          </a>
        </Link>
      </div>
    )
  }
}

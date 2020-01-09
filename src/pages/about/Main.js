import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'

export default function Main({ children }) {
  return (
    <>
      <Header />
      <div> this is about page</div>
      <Link href="/about">
        <a>go back</a>
      </Link>
      <Link href="/about/a">
        <a style={{ margin: '16px' }}>a</a>
      </Link>
      <Link href="/about/b">
        <a>b</a>
      </Link>
      <div>{children}</div>
    </>
  )
}

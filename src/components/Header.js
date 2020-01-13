import Link from '@/components/Link'
import React from 'react'

const linkStyle = {
  marginRight: 15,
}

const Header = () => (
  <div>
    <Link mr={2} href="/">
      Home
    </Link>
    <Link href="/about">About</Link>
  </div>
)

export default Header

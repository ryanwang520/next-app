import { Link as ChakraLink } from '@chakra-ui/core'
import NextLink from 'next/link'

export default function Link({ href, ...props }) {
  return (
    <NextLink href={href}>
      <ChakraLink {...props} />
    </NextLink>
  )
}

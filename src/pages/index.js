import React from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import {
  ThemeProvider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
  Link,
  Input,
  useToast,
} from '@chakra-ui/core'

import { Button, CSSReset } from '@chakra-ui/core'
import customTheme from '@/theme'

function ToastExample() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}

export default function Index() {
  const router = useRouter()

  return (
    <div>
      <Header />
      {router.query.title}
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <ToastExample />
        <Button isLoading variantColor="green">
          click me
        </Button>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
        <Link>Chakra UI</Link>
        <Input placeholder="Basic usage" />
        <Box color="primary" bg="red">
          cyan
        </Box>
      </ThemeProvider>
    </div>
  )
}

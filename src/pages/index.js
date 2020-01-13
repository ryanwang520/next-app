import React from 'react'
import Header from '@/components/Header'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/router'
import {
  Stack,
  Flex,
  Switch,
  Tooltip,
  Icon,
  Text,
  Spinner,
  Select,
  List,
  ListItem,
  FormErrorMessage,
  Collapse,
} from '@chakra-ui/core'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
  Link,
  Input,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from '@chakra-ui/core'

import { Button, CSSReset } from '@chakra-ui/core'
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)
  return (
    <div>
      <Header />
      {router.query.title}
      <CSSReset />
      <Button onClick={onOpen}>Open Modal</Button>

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>hello world</ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      <Button variantColor="blue" onClick={handleToggle}>
        Toggle
      </Button>
      <Collapse mt={4} isOpen={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            ref={register({ required: true })}
            name="email"
            id="email"
            aria-describedby="email-helper-text"
          />
          <FormErrorMessage>email is required</FormErrorMessage>
        </FormControl>
        <Select ref={register} name="option" placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <List spacing={2}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </List>
        {/* <RadioGroup>
          <Radio ref={register} j name="number" value="1">
            First
          </Radio>
          <Radio ref={register} name="number" value="2">
            Second
          </Radio>
          <Radio ref={register} name="number" value="3">
            Third
          </Radio>
        </RadioGroup> */}
        {/* <Checkbox defaultIsChecked name="check[0]" ref={register}>
          a
        </Checkbox>
        <Checkbox name="check[1]" ref={register}>
          b
        </Checkbox> */}
        {/* <Stack spacing={4}>
          <Input placeholder="large size" size="lg" />
          <Input placeholder="default size" size="md" />
          <Input placeholder="small size" size="sm" />
        </Stack> */}
        <Flex justify="center" align="center">
          <FormLabel htmlFor="email-alerts">Enable email alerts?</FormLabel>
          <Switch name="switch" ref={register} id="email-alerts" />
        </Flex>
      </form>
      <Tooltip label="Welcome home" placement="bottom">
        <Icon name="phone" />
      </Tooltip>
      {/* <Stack spacing={3}>
        <Text fontSize="6xl">In love with React & Next</Text>
        <Text fontSize="5xl">In love with React & Next</Text>
        <Text fontSize="4xl">In love with React & Next</Text>
        <Text fontSize="3xl">In love with React & Next</Text>
        <Text fontSize="2xl">In love with React & Next</Text>
        <Text fontSize="xl">In love with React & Next</Text>
        <Text fontSize="lg">In love with React & Next</Text>
        <Text fontSize="md">In love with React & Next</Text>
        <Text fontSize="sm">In love with React & Next</Text>
        <Text fontSize="xs">In love with React & Next</Text>
      </Stack> */}
      <Stack isInline spacing={4}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
      <Spinner color="red.500" />
      {/* <ToastExample />
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
      </Box> */}
    </div>
  )
}

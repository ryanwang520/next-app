import React from 'react'

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
  Button,
} from '@chakra-ui/core'
export default function MyModal({ title, visible, onOk, onCancel, children }) {
  return (
    <Modal isOpen={visible} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onCancel}>
            Close
          </Button>
          <Button onClick={onOk} variant="ghost">
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export class App extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <MyModal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </MyModal>
      </div>
    )
  }
}

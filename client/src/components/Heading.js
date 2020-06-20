import React, { useState } from 'react'
import { Jumbotron, Button, Modal, Form, Figure } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'

function Heading(props) {
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')

    const toggle = () => {
        setModal(!modal)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            address,
            contact,
            email
        }
        console.log(newUser)
        props.addUser(newUser)
        toggle()
    }

    return (
        <div>
            <Jumbotron className="d-flex">
                <h1>User Directory</h1>
                <p className="ml-auto">
                    <Button variant="primary" onClick={toggle}>Add New User</Button>
                </p>
            </Jumbotron>

            <Modal
                show={modal}
                onHide={toggle}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="mx-4">
                        Add user
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="mx-4">
                    <Form onSubmit={onSubmit}>
                        <div className="d-flex justify-content-around">
                            <div className="align-self-center ml-3">
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt="171x180"
                                        src="../images/profile.svg"
                                        rounded
                                    />
                                </Figure>
                                <Form.File
                                    id="custom-file"
                                    label="Add your avatar"
                                    custom
                                />
                            </div>
                            <div className="ml-auto mr-3">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="address" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col ml-8">
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control type="number" name="contact" placeholder="Enter phone number" onChange={(e) => setContact(e.target.value)} />
                                    </Form.Group>
                                </div>
                                <div className="col">
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <Button variant="primary" type="submit" className="my-4 mx-3">
                            Add user
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addUser })(Heading)
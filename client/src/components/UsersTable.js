import React, { useEffect, useState } from 'react';
import { Table, DropdownButton, ButtonGroup, Dropdown, Modal, Figure, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUsers, deleteUser, updateUser } from '../actions/userActions'

function UsersTable(props) {
  const [modal, setModal] = useState(false)
  const [myName, setMyName] = useState('')
  const [myAddress, setMyAddress] = useState('')
  const [myContact, setMyContact] = useState('')
  const [myEmail, setMyEmail] = useState('')
  const [myId, setMyId] = useState(0)

  useEffect(() => {
    props.getUsers()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggle = () => {
    setModal(!modal)
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (myName !== '') {
      console.log(e.target.value)
      setMyName(e.target.value)
    }
    else if (myAddress !== '') {
      console.log(e.target.value)
      setMyAddress(e.target.value)
    }
    else if (myContact !== '') {
      console.log(e.target.value)
      setMyContact(e.target.value)
    }
    else if (myEmail !== '') {
      console.log(e.target.value)
      setMyEmail(e.target.value)
    }

    const newUser = {
      myName,
      myAddress,
      myContact,
      myEmail
    }
    console.log(props.user, newUser)
    props.updateUser(myId)

    toggle()
  }

  console.log(props.user)

  return (
    <div>
      <Table striped >
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        {props.user.users.map(({ _id, name, contact, address, email }) => (
          <tbody key={_id}>
            <tr>
              <td>{name}</td>
              <td>{address}</td>
              <td>{contact}</td>
              <td>{email}</td>
              <td><DropdownButton as={ButtonGroup}
                key={_id}
                size="sm"
                variant="secondary">
                <Dropdown.Item
                  eventKey="2"
                  onClick={() => props.deleteUser(_id)}
                >
                  Delete User</Dropdown.Item>
              </DropdownButton> </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { getUsers, deleteUser, updateUser })(UsersTable)

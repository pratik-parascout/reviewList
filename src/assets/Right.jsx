import React, { useState } from 'react'
import { users } from './data'

export const Right = () => {
  const [user] = useState(users)

  const reviewUser = (userId) => {
    alert(`Reviewing user with ID ${userId}`)
  }

  const renderUsers = () => {
    return user.map(({ id, name, email }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-primary" onClick={() => reviewUser(id)}>
            Review
          </button>
        </td>
      </tr>
    ))
  }

  const renderHeader = () => {
    const headers = Object.keys(user[0])
    return (
      <thead>
        <tr>
          {headers.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
    )
  }

  const renderTable = () => {
    return (
      <table>
        {renderHeader()}
        <tbody>{renderUsers()}</tbody>
      </table>
    )
  }

  return (
    <div className="right">
      {/* <h2>Review List</h2> */}
      {renderTable()}
    </div>
  )
}

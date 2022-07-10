import React from 'react'

export default function Todoitem(props) {
  return (
    <>
      <div>
        <h5>{props.todo.title}</h5>
        <h6>{props.todo.desc}</h6>
        <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
      </div>
      <hr />
    </>
  )
}

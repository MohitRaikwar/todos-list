import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

export default function AddTodo(props){

  const { register, handleSubmit, resetField } = useForm();
  const onSubmit=(data)=>{
    const title=data.title;
    const desc=data.desc;
    if (!title || !desc) alert("Title or description can't be blank");
    else props.addTodo(title, desc);
    resetField('title');
    resetField('desc');
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control {...register('title')}
          placeholder="Enter Title"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control {...register('desc')}
          placeholder="Enter description"
        />
      </Form.Group>
      <Button variant="success" type="submit" >+Add Todo</Button>
    </Form>
  );

}

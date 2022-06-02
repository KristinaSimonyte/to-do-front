import React from 'react';
import Button from './Button';

function addTodoClick() {
  console.log('add todo');
}

function deleteTodoClick() {
  console.log('delete todo');
}

export const AddTodo = () => (
  <Button handleClick={addTodoClick} color='blue'>
    Add Todo
  </Button>
);

export const DeleteTodo = () => (
  <Button handleClick={deleteTodoClick} color='red'>
    Delete Todo
  </Button>
);

export default {
  title: 'Button',
  component: Button,
};

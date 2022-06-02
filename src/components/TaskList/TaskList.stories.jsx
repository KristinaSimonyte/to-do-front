import React from 'react';
import TaskList from './TaskList';

const tasks = [
  { id: 1, task: 'do something' },
  { id: 2, task: 'do something else' },
  { id: 3, task: 'do something completely else' },
  { id: 4, task: 'do something completely else and then some' },
  { id: 5, task: 'do something completely else and then something else' },
];

export const ExampleList = () => <TaskList tasks={tasks} />;

export default {
  title: 'TaskList',
  component: TaskList,
};

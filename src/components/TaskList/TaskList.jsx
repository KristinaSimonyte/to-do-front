import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import * as S from './TaskList.style';

const TaskList = ({ tasks, setTaskArray, setCheckedTasks }) => {
  return (
    <S.TaskList>
      <h3>To-dos:</h3>
      {tasks.length === 0 ? (
        <span className='no-todos-text'>You don't have any to-dos</span>
      ) : (
        tasks.map((taskObj) => (
          <Task
            setCheckedTasks={setCheckedTasks}
            setTaskArray={setTaskArray}
            taskId={taskObj.id}
            key={taskObj.id}
            task={taskObj.description}
          />
        ))
      )}
    </S.TaskList>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTaskArray: PropTypes.func.isRequired,
  setCheckedTasks: PropTypes.func.isRequired,
};

export default TaskList;

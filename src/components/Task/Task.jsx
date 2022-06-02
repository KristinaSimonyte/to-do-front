import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Task.style';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fetchDelete } from '../../helpers/fetchFunctions';

library.add(fas);

const Task = ({ task, taskId, setTaskArray, setCheckedTasks }) => {
  const [checked, setChecked] = useState(false);

  async function handleIconClick() {
    const deletedTask = await fetchDelete('tasks/', taskId);
    deletedTask.success &&
      setTaskArray((prevState) =>
        prevState.filter((task) => task.id !== taskId)
      );
  }

  function handleCheckClick() {
    setChecked((prevState) => !prevState);
    !checked && setCheckedTasks((prevState) => prevState.concat(taskId));
    checked &&
      setCheckedTasks((prevState) => [
        ...prevState.filter((task) => task !== taskId),
      ]);
  }

  return (
    <S.Task>
      <input type='checkbox' onChange={handleCheckClick} checked={checked} />
      <p onClick={handleCheckClick}>{task}</p>
      <S.Icon onClick={handleIconClick} icon='fa-solid fa-circle-xmark' />
    </S.Task>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  taskId: PropTypes.number.isRequired,
  setTaskArray: PropTypes.func.isRequired,
  setCheckedTasks: PropTypes.func.isRequired,
};

export default Task;

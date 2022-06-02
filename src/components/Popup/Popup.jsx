import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Button from '../Button/Button';
import pageColors from '../../helpers/pageColors';
import * as S from './Popup.style';
import { fetchDelete } from '../../helpers/fetchFunctions';

const Popup = ({
  setShowPopup,
  checkedTasks,
  setTaskArray,
  setCheckedTasks,
}) => {
  function deleteHandler() {
    if (!checkedTasks.length) return;
    checkedTasks.map(async (task) => {
      const deleteResult = await fetchDelete('tasks/', task);
      if (deleteResult.success) {
        setTaskArray((prevState) =>
          prevState.filter((taskObj) => taskObj.id !== task)
        );
        setCheckedTasks([]);
      }
    });
    setShowPopup(false);
  }

  function cancelHandler() {
    setShowPopup(false);
  }

  return (
    <S.Popup>
      <Section padding='2rem' background={pageColors.hover}>
        <p>Do you really want to delete these To-dos?</p>
        <div className='flex'>
          <Button handleClick={deleteHandler} color={pageColors.secondary}>
            Delete
          </Button>
          <Button handleClick={cancelHandler} color={pageColors.primary}>
            Cancel
          </Button>
        </div>
      </Section>
    </S.Popup>
  );
};

Popup.propTypes = {
  setShowPopup: PropTypes.func,
  checkedTasks: PropTypes.arrayOf(PropTypes.number),
  setTaskArray: PropTypes.func,
  setCheckedTasks: PropTypes.func,
};

export default Popup;

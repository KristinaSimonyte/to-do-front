import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Popup from '../components/Popup/Popup';
import Section from '../components/Section/Section';
import TaskList from '../components/TaskList/TaskList';
import { fetchDelete, fetchGet, fetchPost } from '../helpers/fetchFunctions';
import UserContext, { normalizeTaskDescr } from '../helpers/helperFunctions';
import pageColors from '../helpers/pageColors';

const Home = () => {
  const [todo, setTodo] = useState('');
  const [submitFail, setSubmitFail] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [taskArray, setTaskArray] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    !isLoggedIn && navigate('../login', { replace: true });
    getTasks();
  }, [submitSuccess, isLoggedIn, loading]);

  async function getTasks() {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }
    const tasks = await fetchGet('tasks', setLoading);
    setLoading(false);
    Array.isArray(tasks.msg) && setTaskArray(tasks.msg);
  }

  function handleDeleteClick() {
    checkedTasks.length && setShowPopup(true);
  }

  async function submitHandler(e) {
    setSubmitFail(false);
    setSubmitSuccess(false);
    e.preventDefault();
    if (!todo.length) {
      setSubmitFail(true);
      return;
    }
    const postResult = await fetchPost('tasks', {
      description: normalizeTaskDescr(todo),
    });
    if (!postResult.success) {
      setSubmitFail(true);
      return;
    }
    setSubmitSuccess(true);
    setTodo('');
  }

  return (
    <Section className='responsive-container' padding='5rem' height='100vh'>
      {showPopup && (
        <Popup
          checkedTasks={checkedTasks}
          setTaskArray={setTaskArray}
          setCheckedTasks={setCheckedTasks}
          setShowPopup={setShowPopup}
        />
      )}
      <Section
        className='responsive-wrapper'
        width='50%'
        background={pageColors.background}
        shadow={`10px 10px 10px ${pageColors.shadow}`}
      >
        <Header background={pageColors.secondary}>To-do List</Header>
        <form
          onChange={() => {
            setSubmitFail(false);
            setSubmitSuccess(false);
          }}
          className='flex-table'
          onSubmit={submitHandler}
        >
          <Input
            type='text'
            value={todo}
            setState={setTodo}
            labelText='Add new to-do:'
            placeHolder='New to-do'
          />
          <Button color={pageColors.primary}>Submit</Button>
        </form>

        {submitFail && (
          <span className='fail-text task-submit-text'>
            {todo.length
              ? 'Please check if you completed the field correctly'
              : 'The To-do description cannot be empty'}
          </span>
        )}
        {submitSuccess && (
          <span className='success-text task-submit-text'>
            New to-do added!
          </span>
        )}
        <Section padding='0.5rem 1rem 0 1rem'>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <TaskList
              tasks={taskArray}
              setTaskArray={setTaskArray}
              setCheckedTasks={setCheckedTasks}
            />
          )}
        </Section>
        <Section padding='0 0 1rem'>
          <Button
            handleClick={handleDeleteClick}
            color={pageColors.secondary}
            activeColor={pageColors.secondary}
          >
            Delete selected
          </Button>
        </Section>
      </Section>
    </Section>
  );
};

export default Home;

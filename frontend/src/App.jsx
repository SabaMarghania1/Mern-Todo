import React, {useState, useEffect} from 'react';

import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';
import Input from './components/Input';
import TodoContainer from './components/TodoContainer';
import Todos from './components/Todos';
import Todo from './components/Todo';

import Statistics from './components/Statistics';
import Filters from './components/Filters';

function App() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('');
        const response = await axios.get('https://mern-todo-30re.onrender.com/api/v1/todos');
        const data = response.data;
        setTodos(data.data);
      } catch (error) {
        if (error.response && error.response.data) {
          setError(error.response.data.error);
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    };

    fetchData();
  }, []);
  const filteredTodos = todos => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
  };

  const newTodos = filteredTodos(todos);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setName('');
      const response = await axios.post('https://mern-todo-30re.onrender.com/api/v1/todos', {
        name: name,
      });

      setTodos([...todos, response.data.data]);
    } catch (error) {
      console.log(error);
    }
  }

  const makeCompleted = async id => {
    try {
      setTodos(todos.map(todo => (todo._id === id ? {...todo, completed: !todo.completed} : todo)));

      await axios.patch(`https://mern-todo-30re.onrender.com/api/v1/todos/${id}`);
    } catch (error) {
      setError(
        error.response?.data?.error || 'An unexpected error occurred. Please try again later.'
      );
    }
  };

  const handleDelete = async id => {
    setTodos(todos.filter(todo => todo._id !== id));
    await axios.delete(`https://mern-todo-30re.onrender.com/api/v1/todos/${id}`);
  };

  return (
    <>
      <Header />
      <Main>
        <Input name={name} setName={setName} handleSubmit={handleSubmit} />

        <TodoContainer>
          <Todos>
            {newTodos.map(todo => {
              return (
                <Todo
                  todo={todo}
                  key={todo._id}
                  makeCompleted={makeCompleted}
                  handleDelete={handleDelete}
                />
              );
            })}
          </Todos>

          <Statistics todos={newTodos} setTodos={setTodos} />
        </TodoContainer>
        <Filters setFilter={setFilter} filter={filter} />
      </Main>
    </>
  );
}

export default App;

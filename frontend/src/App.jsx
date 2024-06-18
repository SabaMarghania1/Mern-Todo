import React, {useState, useEffect} from 'react';

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

  useEffect(() => {});

  return (
    <>
      <Header />
      <Main>
        <Input name={name} setName={setName} />

        <TodoContainer>
          <Todos>
            {/* {todos.map(todo => {
              return <Todo todo={todo} key={todo.id} />;
            })} */}
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </Todos>

          <Statistics />
        </TodoContainer>
        <Filters />
      </Main>
    </>
  );
}

export default App;

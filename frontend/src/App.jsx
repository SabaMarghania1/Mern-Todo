import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Input from './components/Input';
import TodoContainer from './components/TodoContainer';
import Todos from './components/Todos';
import Statistics from './components/Statistics';
function App() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Input name={name} setName={setName} />

        <TodoContainer>
          <Todos />
          <Statistics />
        </TodoContainer>
      </Main>
    </>
  );
}

export default App;

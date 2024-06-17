import React, {useState, useEffect} from 'react';

import Header from './components/Header';
import Main from './components/Main';
function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mern-todo-30re.onrender.com/api/v1/todos');
        const data = await response.json();
        setTodos(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <form method="POST"></form>
      </Main>
    </>
  );
}

export default App;

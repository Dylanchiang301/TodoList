import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) =>{
      if(!todo.text || /^\s*$/.test(todo.text)){  //【\s*】: any number of whitespace characters
        return;
      }

      const newTodos = [todo, ...todos];

      setTodos(newTodos);
      // console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => { //有點不懂參數的值哪裡來？
      if(!newValue.text || /^\s*$/.test(newValue.text)){  
        return;
      }

      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = (id) => {
      const todoArr = [...todos].filter(todo => todo.id !== id);

      setTodos(todoArr);
    }

    const completeTodo = (id) =>{
      let updatedTodos = todos.map(todo => {
        if(todo.id === id){
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
    
  return (
    <div>
        <h1>what's the plan today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default TodoList
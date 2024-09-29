import { PropsWithChildren } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<
  PropsWithChildren<{ items: Todo[]; onRemoveTodo: (id: string) => void }>
> = ({ children, items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

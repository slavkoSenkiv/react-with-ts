import { PropsWithChildren } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<PropsWithChildren<{ items: Todo[] }>> = ({
  children,
  items,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

import { PropsWithChildren } from 'react';

const TodoItem: React.FC<PropsWithChildren<{text: string}>> = (props) => {
  return <li>{props.text}</li>
};

export default TodoItem
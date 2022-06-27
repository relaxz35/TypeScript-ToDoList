interface IToDoItemsProps {
  text: string;
  onDelete: (i: number) => void;
  index: number;
}

const ToDoItems: React.FC<IToDoItemsProps> = (props) => {
  const { text, onDelete, index } = props;
  return (
    <li>
      {text} <button onClick={() => onDelete(index)}>x</button>
    </li>
  );
};

export default ToDoItems;

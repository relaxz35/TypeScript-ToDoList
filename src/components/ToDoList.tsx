import ToDoItems from "./ToDoItems";

interface IToDoList {
  list: string[];
  onDelete: (i: number) => void;
}

const ToDoList: React.FC<IToDoList> = (props) => {
  const { list, onDelete } = props;
  return (
    <ul>
      {list.map((item, index) => (
        <ToDoItems
          key={`${item}-${index}`}
          text={item}
          onDelete={onDelete}
          index={index}
        />
      ))}
    </ul>
  );
};

export default ToDoList;

interface IInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<IInputProps> = (props) => {
  const { onChange, value } = props;
  return <input onChange={onChange} value={value} />;
};
// test
export default Input;

interface IButton {
  children: React.ReactNode;
  onClick: () => void;
}
const Button: React.FC<IButton> = (props) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

export default Button;

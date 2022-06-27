import Title from "./Title";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Title>Todo List</Title>
      {children}
    </div>
  );
};

export default Layout;

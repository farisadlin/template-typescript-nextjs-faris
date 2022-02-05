import Header from "components/header/Header";

type LayoutTypes = {
  children?: JSX.Element;
};

const Layout = ({ children, isMainMenu }: LayoutTypes) => {
  return <Header>{children}</Header>;
};

export default Layout;

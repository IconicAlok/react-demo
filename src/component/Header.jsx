// import react, { component } from "React";

const Header = ({ title }) => {
  return (
    <header>
      <div className="bg-blue-500 text-white p-4 rounded-xl">{title}</div>
    </header>
  );
};
export default Header;

// import react, { component } from "React";

const Header = () => {
  return (
    <header>
      <div className="bg-blue-500 text-white p-4 rounded-xl">
        tailwind is working
      </div>
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;

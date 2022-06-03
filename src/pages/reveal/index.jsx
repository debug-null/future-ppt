import { Outlet, Link } from "react-router-dom";
export default function App() {
  const example = [
    {
      path: "markup",
      name: "标记"
    },
    {
      path: "markdown",
      name: "Markdown"
    }
  ];
  return (
    <>
      <div className="nav" style={{ margin: "30px 0" }}>
        {example.map((item) => {
          return (
            <Link style={{ border: "1px solid #f00", padding: "10px", borderRadius: "5px", margin: "0 8px" }} to={item.path} key={item.name}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="box" style={{ margin: "0 0 0 10px" }}>
        <Outlet />
      </div>
    </>
  );
}

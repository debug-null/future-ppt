import { Outlet, Link } from "react-router-dom";
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

export default function App() {
  const example = [
    {
      path: "markup",
      name: "标记"
    },
    {
      path: "markdown",
      name: "Markdown"
    },
    {
      path: "background",
      name: "背景"
    },
    {
      path: "media",
      name: "媒体"
    },
    {
      path: "code",
      name: "代码"
    },
    {
      path: "math",
      name: "数学"
    },
    {
      path: "fragments",
      name: "碎片"
    },
    {
      path: "link",
      name: "链接"
    },
    {
      path: "layout",
      name: "布局"
    },
    {
      path: "theme",
      name: "主题"
    },
    {
      path: "transition",
      name: "动画"
    },
    {
      path: "vertical",
      name: "垂直"
    },
    {
      path: "note",
      name: "笔记"
    },
    {
      path: "multiple",
      name: "多个"
    }
  ];
  
  return (
    <>
      <div className="nav" style={{ margin: "30px 0" }}>
        {example.map((item) => {
          return (
            <Link style={{ border: "1px solid #f00", padding: "10px", borderRadius: "5px", margin: "10px 8px", display: 'inline-block' }} to={item.path} key={item.name}>
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

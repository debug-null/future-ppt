import * as React from "react";
import Moveable from "react-moveable";
import "./moveable.scss";
export default function App() {
  const [target, setTarget] = React.useState();
  const [frame, setFrame] = React.useState({
    translate: [0, 0],
    rotate: 0
  });

  const [frames, setFrames] = React.useState([
    {
      translate: [0, 0],
      rotate: 0
    },
    {
      translate: [0, 0],
      rotate: 0
    },
    {
      translate: [0, 0],
      rotate: 0
    }
  ]);

  React.useEffect(() => {
    setTarget(document.querySelector(".target1"));
  }, []);

  const toggle = () => {
    let targetDom = document.querySelector(".target1");
    setTarget(target ? null : targetDom);
  };

  const switchTwo = () => {
    let targetDom = document.querySelector(".target2");
    setTarget(target ? null : targetDom);
  };

  const switchGroup = () => {
    let targetDom = document.querySelectorAll(".target");
    setTarget(target ? null : targetDom);
  };

  const DimensionViewable = {
    name: "dimensionViewable",
    props: {},
    events: {},
    render(moveable, React) {
      const rect = moveable.getRect();

      return (
        <div
          key={"dimension-viewer"}
          className={"moveable-dimension"}
          style={{
            position: "absolute",
            left: `${rect.width / 2}px`,
            top: `${rect.height + 20}px`,
            background: "#4af",
            borderRadius: "2px",
            padding: "2px 4px",
            color: "white",
            fontSize: "13px",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            willChange: "transform",
            transform: "translate(-50%, 0px)"
          }}
        >
          {Math.round(rect.offsetWidth)} x {Math.round(rect.offsetHeight)}
        </div>
      );
    }
  };

  return (
    <div className="container">
      <button onClick={toggle}>切换</button>
      <button onClick={switchTwo}>选择第二个</button>
      <button onClick={switchGroup}>切换为组合</button>

      <div className="target target1">Target</div>
      <div className="target target2">Target2</div>

      <Moveable
        target={target}
        draggable={true}
        resizable={true}
        rotatable={true}
        origin={false}
        ables={[DimensionViewable]}
        props={{
          dimensionViewable: true
        }}
        onResizeStart={(e) => {
          e.setOrigin(["%", "%"]);
          e.dragStart && e.dragStart.set(frame.translate);
        }}
        onResize={(e) => {
          const beforeTranslate = e.drag.beforeTranslate;
          frame.translate = beforeTranslate;
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) rotate(${frame.rotate}deg)`;
        }}
        onRotateStart={(e) => {
          e.set(frame.rotate);
        }}
        onRotate={({ beforeRotate }) => {
          frame.rotate = beforeRotate;
          target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px) rotate(${beforeRotate}deg)`;
        }}
        onDragStart={(e) => {
          e.set(frame.translate);
        }}
        onDrag={(e) => {
          console.log("🚀 ~ file: moveable.jsx ~ line 115 ~ App ~ e", e);
          frame.translate = e.beforeTranslate;
          e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px) rotate(${frame.rotate}deg)`;
        }}
        onDragGroupStart={({ events }) => {
          events.forEach((ev, i) => {
            ev.set(frames[i].translate);
          });
        }}
        onDragGroup={({ events }) => {
          events.forEach((ev, i) => {
            frames[i].translate = ev.beforeTranslate;
            ev.target.style.transform = `translate(${ev.beforeTranslate[0]}px, ${ev.beforeTranslate[1]}px)`;
          });
        }}
        onResizeGroupStart={({ events }) => {
          events.forEach((ev, i) => {
            ev.dragStart && ev.dragStart.set(frames[i].translate);
          });
        }}
        onResizeGroup={({ events }) => {
          events.forEach((ev, i) => {
            frames[i].translate = ev.drag.beforeTranslate;
            ev.target.style.width = `${ev.width}px`;
            ev.target.style.height = `${ev.height}px`;
            ev.target.style.transform = `translate(${ev.drag.beforeTranslate[0]}px, ${ev.drag.beforeTranslate[1]}px)`;
          });
        }}
        onScaleGroupStart={({ events }) => {
          events.forEach((ev, i) => {
            ev.set(frames[i].scale);
            ev.dragStart && ev.dragStart.set(frames[i].translate);
          });
        }}
        onScaleGroup={({ events }) => {
          events.forEach((ev, i) => {
            frames[i].translate = ev.drag.beforeTranslate;
            frames[i].scale = ev.scale;

            ev.target.style.transform = `translate(${ev.drag.beforeTranslate[0]}px, ${ev.drag.beforeTranslate[1]}px)` + ` scale(${ev.scale[0]}, ${ev.scale[1]})`;
          });
        }}
        onRotateGroupStart={({ events }) => {
          events.forEach((ev, i) => {
            ev.set(frames[i].rotate);
            ev.dragStart && ev.dragStart.set(frames[i].translate);
          });
        }}
        onRotateGroup={({ events }) => {
          console.log("🚀 ~ file: moveable.jsx ~ line 164 ~ App ~ events", events);
          events.forEach((ev, i) => {
            frames[i].translate = ev.drag.beforeTranslate;
            frames[i].rotate = ev.rotate;

            ev.target.style.transform = `translate(${ev.drag.beforeTranslate[0]}px, ${ev.drag.beforeTranslate[1]}px)` + ` rotate(${ev.rotate}deg)`;
          });
        }}
      />
    </div>
  );
}

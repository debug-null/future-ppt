import React, { useState, forwardRef } from "react";

import Moveable from "react-moveable";
import DimensionViewable from "../DimensionViewable";

import "./index.scss";
const MoveableInstance = ({targetArr}) => {
console.log("🚀 ~ file: index.jsx ~ line 8 ~ MoveableInstance ~ targetArr", targetArr)
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
    if (targetArr && targetArr.length) {
      let targetArr = [...targetArr];
      console.log("🚀 ~ file: index.jsx ~ line 37 ~ React.useEffect ~ targetArr", targetArr)
      setTargetArr(targetArr);
    }
  }, []);

  console.log('=========*********')

  return (
    <div className="container">
      <Moveable
        target={targetArr}
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
          console.log("🚀 ~ file: index.jsx ~ line 48 ~ MoveableInstance ~ e", e);
          e.set(frame.translate);
        }}
        onDrag={(e) => {
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
};

export default MoveableInstance;

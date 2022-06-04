import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "./index.scss";
import Reveal from "reveal.js";

class RevealPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let deck = new Reveal(document.querySelector(".reveal"), {
      embedded: true
    });
    deck.initialize({
      plugins: [],
      /*

      default: 默认 左/右箭头键在水平幻灯片之间步进。向上/向下箭头键在垂直幻灯片之间步进。空格键遍历所有幻灯片（水平和垂直）。
      linear: 线性 删除向上/向下箭头。左/右箭头遍历所有幻灯片（水平和垂直）。
      grid: 启用此功能后，从垂直堆栈向左/向右步进到相邻的垂直堆栈将使您处于相同的垂直索引处。
      **/
      navigationMode: "linear" //
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section>Horizontal Slide</section>
            <section>
              <section>Vertical Slide 1</section>
              <section>Vertical Slide 2</section>
            </section>

         
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

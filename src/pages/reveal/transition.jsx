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

      embedded: true,
      keyboardCondition: "focused"
    });
    deck.initialize({
   
      plugins: [],
      controls: true, // 是否显示控制箭头
      controlsTutorial: false, //是否开启箭头指引（也就是箭头左右晃动的效果）
      controlsLayout: 'edges', // 箭头位置："edges" or "bottom-right"
      controlsBackArrows: 'hidden',
      progress: true, //是否显示进度条
      slideNumber:true, // 是否显示页码
      history:true, // 写入浏览历史
      disableLayout: false, // 禁用默认的中心缩放
      showNotes: true, // 注释是否可见
      // backgroundTransition: 'slide' // 全局级别更改动画
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section data-transition="fade">
              <h2>交叉淡入淡出 -背景过渡的默认设置</h2>
            </section>

            <section data-transition="slide">
              <h2>在背景之间滑动——幻灯片过渡的默认设置</h2>
            </section>

            <section data-transition="convex">
              <h2>以凸角滑动</h2>
            </section>

            <section data-transition="concave">
              <h2>以凹角滑动</h2>
            </section>

            <section data-transition="zoom">
              <h2>向上缩放传入的幻灯片，使其从屏幕中心向内增长</h2>
            </section>

            <section data-transition="slide">The train goes on …</section>
            <section data-transition="slide">and on …</section>
            <section data-transition="slide-in fade-out">and stops.</section>
            <section data-transition="fade-in slide-out">(Passengers entering and leaving)</section>
            <section data-transition="slide">And it starts again.</section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

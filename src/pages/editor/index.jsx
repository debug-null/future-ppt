import React, { Component } from "react";
import { Layout, Button } from "@arco-design/web-react";

import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/highlight/monokai.css";

import Text from "../material/text";

import Moveable from "./Moveable";

import "./index.scss";
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      revealSlidesRect: {
        width: 500,
        height: 500
      },
      target: null,
      frame: {
        translate: [0, 0],
        rotate: 0
      }
    };
    this.refGridCanvas = React.createRef();
    this.refRevealSlides = React.createRef();
    this.refsMoveable = React.createRef();
    this.refsMoveable2 = React.createRef();
  }
  componentDidMount() {
    this.deck = new Reveal(document.querySelector(".reveal"), {
      embedded: true
    });
    this.deck
      .initialize({
        maxScale: 1,
        highlight: {},
        plugins: [RevealHighlight]
      })
      .then(() => {
        this.createGrid();
      });

    console.log("🚀 ~ file: index.jsx ~ line 38 ~ Edit ~ constructor ~   this.refsMoveable", this);

    window.addEventListener("resize", this.createGrid.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.createGrid);
  }

  // 创建背景网格
  createGrid() {
    console.log("--- 创建背景网格  ----");
    if (!this.refRevealSlides || !this.refRevealSlides.current) return;
    const revealSlides = this.refRevealSlides.current;
    if (!revealSlides) return;
    const revealSlidesRect = revealSlides.getBoundingClientRect();
    this.setState(
      {
        revealSlidesRect: revealSlidesRect
      },
      () => {
        const gridCanvas = this.refGridCanvas.current;

        if (!gridCanvas) return;

        gridCanvas.style.width = `${revealSlidesRect.width}px`;
        gridCanvas.style.height = `${revealSlidesRect.height}px`;
        gridCanvas.style.left = `${revealSlidesRect.left}px`;
        gridCanvas.style.top = `${revealSlidesRect.top}px`;

        //获取绘图工具
        const ctx = gridCanvas.getContext("2d");
        ctx.clearRect(0, 0, revealSlidesRect.width, revealSlidesRect.height); //处理缩放时，出现重复格子的情况

        // 绘制行
        let rows = 10;
        for (let i = 1; i < rows; i++) {
          let rxio = revealSlidesRect.height / rows;
          ctx.fillStyle = "rgba(255, 255, 255, 0.30)";
          ctx.fillRect(0, Math.floor(i * rxio), revealSlidesRect.width, 1);
        }

        // // 绘制列
        let cols = 12;
        for (let i = 1; i < cols; i++) {
          let rxio = revealSlidesRect.width / (cols - 1);
          ctx.fillStyle = "rgba(255, 255, 255, 0.30)";
          ctx.fillRect(Math.floor(i * rxio), 0, 1, revealSlidesRect.height);
        }
      }
    );
  }

  textData() {
    return [
      {
        type: "text",
        content: "测试1",
        left: "10px",
        top: "0px"
      },
      {
        type: "text",
        content: "测试2",
        left: "110px",
        top: "150px"
      }
    ];
  }

  render() {
    return (
      <Layout style={{}}>
        <Layout>
          <Sider style={{ width: "80px", marginLeft: "1px" }}>Sider</Sider>
          <Content>
            <Moveable ref={[this.refsMoveable]} />

            <div className="reveal">
              <div className="slides" ref={this.refRevealSlides}>
                <section data-auto-animate data-background-color="rgb(12, 52, 61)">

                  {this.textData().map((item) => {
                    return <Text ref={this.refsMoveable} data={item} />;
                  })}

                  <hr />
                </section>
                <section data-auto-animate>
                  <h2>正常呈现2</h2>
                </section>
              </div>
            </div>
            <div className="grid-canvas-box">
              <canvas id="gridCanvas" ref={this.refGridCanvas} width={this.state.revealSlidesRect.width} height={this.state.revealSlidesRect.height}></canvas>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Edit;

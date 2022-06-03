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
      plugins: []
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section data-background-color="aquamarine">
              <h2>🍦</h2>
            </section>
            <section data-background-color="rgb(70, 70, 255)">
              <h2>🍰</h2>
            </section>
            <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
              渐变背景
              <h2>🐟</h2>
            </section>
            <section data-background-gradient="radial-gradient(#283b95, #17b2c3)">
              渐变背景
              <h2>🐳</h2>
            </section>
            <section data-background-image="https://preview.qiantucdn.com/58pic/44/04/07/19X58PIC2u8U7e3jeiNy2_origin_PIC2018.jpg!kuan600">
              <h2>图片背景</h2>
            </section>
            <section data-background-video="https://media.w3.org/2010/05/sintel/trailer.mp4" data-background-video-loop data-background-video-muted>
              <h2>视频背景</h2>
            </section>
            <section data-background-iframe="https://www.acrobiosystems.cn/" data-background-interactive>
              <h2>Iframe背景</h2>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

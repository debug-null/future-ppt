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
      autoPlayMedia: true //媒体自动播放
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section>
              <h2>🍦</h2>
            </section>
            <section>
              <img data-src="https://preview.qiantucdn.com/58pic/44/04/07/19X58PIC2u8U7e3jeiNy2_origin_PIC2018.jpg!kuan600" />
            </section>
            <section>
              <iframe data-src="https://hakim.se"></iframe>
            </section>
            <section>
              <video>
                <source data-src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
              </video>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

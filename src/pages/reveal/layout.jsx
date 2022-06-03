import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "./index.scss";
import Reveal from "reveal.js";
import RevealMath from "reveal.js/plugin/math/math";

class RevealPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let deck = new Reveal(document.querySelector(".reveal"), {
      embedded: true
    });
    deck.initialize({
      plugins: [RevealMath.KaTeX]
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "800px" }}>
          <div className="slides">
            <section>
              <div className="r-stack">
                <img className="fragment" src="https://preview.qiantucdn.com/58pic/44/04/07/19X58PIC2u8U7e3jeiNy2_origin_PIC2018.jpg!kuan600" width="450" height="300" />
                <img className="fragment" src="https://preview.qiantucdn.com/58pic/44/04/07/19X58PIC2u8U7e3jeiNy2_origin_PIC2018.jpg!kuan600" width="300" height="450" />
                <img className="fragment" src="https://preview.qiantucdn.com/58pic/44/04/07/19X58PIC2u8U7e3jeiNy2_origin_PIC2018.jpg!kuan600" width="400" height="400" />
              </div>
            </section>

            <section>
              <h2 className="r-fit-text">FIT TEXT</h2>
              <h2 className="r-fit-text">CAN BE USED FOR MULTIPLE HEADLINES</h2>
            </section>

            <section>
              <h2>自动拉伸图片</h2>
              <img className="r-stretch" src="https://preview.qiantucdn.com/58pic/44/04/07/19X58PIC2u8U7e3jeiNy2_origin_PIC2018.jpg!kuan600" />
              <p>Image byline</p>
            </section>

            <section>
              <h2>背景中脱颖而出</h2>
              <img src="https://revealjs.com/images/logo/reveal-symbol.svg" width="200" />
              <a href="#">
                <img className="r-frame" src="https://revealjs.com/images/logo/reveal-symbol.svg" width="200" />
              </a>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

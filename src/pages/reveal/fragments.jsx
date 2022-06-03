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

    deck.on("fragmentshown", (event) => {
      console.log("🚀 ~ file: fragments.jsx ~ line 21 ~ RevealPage ~ fragmentshown ~ event", event);
      // event.fragment = the fragment DOM element
    });
    deck.on("fragmenthidden", (event) => {
      console.log("🚀 ~ file: fragments.jsx ~ line 25 ~ RevealPage ~ fragmenthidden ~ event", event);
      // event.fragment = the fragment DOM element
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section>
              <h2>片段</h2>
              <div>片段用于突出显示或逐步显示幻灯片上的各个元素。fragment在继续下一张幻灯片之前，将逐步浏览该类的每个元素</div>
              <p className="fragment">Fade in</p>
              <p className="fragment fade-out">Fade out</p>
              <p className="fragment highlight-red">Highlight red</p>
              <p className="fragment fade-in-then-out">Fade in, then out</p>
              <p className="fragment fade-up">Slide up while fading in</p>
              <p className="fragment highlight-current-red">把文字红色，然后回到原来的</p>
            </section>

            <section>
              <h2>嵌套片段</h2>
              <span className="fragment fade-in">
                <span className="fragment highlight-red">
                  <span className="fragment fade-out">Fade in > Turn red > Fade out</span>
                </span>
              </span>
            </section>

            <section>
              <h2>片段顺序</h2>
              <p className="fragment" data-fragment-index="3">
                第三
              </p>
              <p className="fragment" data-fragment-index="1">
                第一
              </p>
              <p className="fragment" data-fragment-index="2">
                第二
              </p>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

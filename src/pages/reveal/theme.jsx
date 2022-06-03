import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "./index.scss";
import Reveal from "reveal.js";
// import 'reveal.js/dist/theme/white.css'


import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
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
      plugins: [Markdown]
    });
    Reveal.on("make-it-pop", () => {
      console.log("🚀 ~ file: index.jsx ~ line 20 ~ RevealPage ~ Reveal.on ~ pop", pop);
      console.log("✨");
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }} data-state="make-it-pop">
          <div className="slides">
            <section>主题： 因目前非懒加载，导致white.css被直接加载，影响所有页面</section>
            <section>
              <section>Vertical Slide 12</section>
              <section>Vertical Slide 2</section>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

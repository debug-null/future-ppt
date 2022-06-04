import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "./index.scss";
import Reveal from "reveal.js";

import RevealNotes from "reveal.js/plugin/notes/notes";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

class RevealPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let deck = new Reveal(document.querySelector(".reveal"), {
      embedded: true
    });
    deck.initialize({
      plugins: [RevealNotes, Markdown],
      showNotes: true //注释将出现在演示文稿的底部。
    });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section>
              <h2>S 键开启演讲视图</h2>

              <aside className="notes">Shhh, these are your private notes 📝</aside>
            </section>

            <section data-markdown="example.md" data-separator="^\n\n\n" data-separator-vertical="^\n\n" data-separator-notes="^Note:"></section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

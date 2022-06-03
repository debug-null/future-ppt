import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "./index.scss";
import Reveal from "reveal.js";
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
  }

  render() {
    return (
      <>
      {/* example.md: publick目录下 */}
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section data-markdown="example.md" data-separator="^\n\n\n" data-separator-vertical="^\n\n" data-separator-notes="^Note:" data-charset="iso-8859-15">
              
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

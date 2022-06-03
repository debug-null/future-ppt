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
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section data-markdown>{`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`}</section>
            <section>
              <h2>The Lorenz Equations</h2>
              {`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`}
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

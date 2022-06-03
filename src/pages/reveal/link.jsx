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
              <a href="#/grand-finale">Go to the last slide</a>
              <br />
              <a href="#/1">Go to 2nd slide</a>
              <br />

              <a href="#/3/2">Go to the 2nd vertical slide inside of the 3rd slide</a>
            </section>
            <section>
              <h2>Slide 2</h2>
            </section>
            <section id="grand-finale">
              <h2>The end</h2>
              <a href="#/0">Back to the first</a>
            </section>

            <section>
              <button className="navigate-left">Left</button>
              <button className="navigate-right">Right</button>
              <button className="navigate-up">Up</button>
              <button className="navigate-down">Down</button>
              <button className="navigate-prev">Prev</button>

              <button className="navigate-next">Next</button>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

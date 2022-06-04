import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "./index.scss";
import Reveal from "reveal.js";


class RevealPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let deck1 = new Reveal(document.querySelector(".deck1"), {
      embedded: true,
      keyboardCondition: 'focused' // only react to keys when focused
    });
    deck1.initialize({
    });

    let deck2 = new Reveal(document.querySelector(".deck2"), {
      embedded: true
    });
    deck2.initialize({
    });
  }

  render() {
    return (
      <>
        <div className="reveal deck1" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section>
              <h2>第一个文稿</h2>
            </section>
          </div>
        </div>

        <hr />

        <div className="reveal deck2" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section>
              <h2>第二个文稿</h2>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

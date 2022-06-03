import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import "./index.scss";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/highlight/monokai.css";

class RevealPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let deck = new Reveal(document.querySelector(".reveal"), {
      embedded: true
    });
    deck
      .initialize({
        highlight: {
          // highlightOnLoad: false  // 是否突出显示
        },
        plugins: [RevealHighlight]
      })
      .then(() => {
        console.log("🚀 ~ file: code.jsx ~ line 24 ~ RevealPage ~ componentDidMount ~ Reveal", Reveal);
      });
  }

  render() {
    return (
      <>
        <div className="reveal" style={{ height: "400px", width: "500px" }}>
          <div className="slides">
            <section data-auto-animate>
              <h2>正常呈现</h2>
              <pre>
                <code data-trim data-noescape>
                  {`
                (def lazy-fib
                  (concat
                  [0 1]
                  ((fn rfib [a b]
                        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
                `}
                </code>
              </pre>
            </section>

            <section data-auto-animate>
              <h2>行号和亮点</h2>
              <pre>
                <code data-trim data-noescape data-line-numbers="3,8-10">
                  {`
              <table>
              <tr>
                <td>Apples</td>
                <td>$1</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Oranges</td>
                <td>$2</td>
                <td>18</td>
              </tr>
            </table>
                `}
                </code>
              </pre>
            </section>

            <section data-auto-animate>
              <h2>行号偏移 （第7行开始）</h2>
              <pre>
                <code data-line-numbers data-ln-start-from="7">
                  {`
            <tr>
            <td>Oranges</td>
            <td>$2</td>
            <td>18</td>
          </tr>
                `}
                </code>
              </pre>
            </section>

            <section data-auto-animate>
              <h2>分步显示</h2>
              <pre>
                <code data-line-numbers="3-5|8-10|13-15">
                  {`
         <table>
         <tr>
           <td>Apples</td>
           <td>$1</td>
           <td>7</td>
         </tr>
         <tr>
           <td>Oranges</td>
           <td>$2</td>
           <td>18</td>
         </tr>
         <tr>
           <td>Kiwi</td>
           <td>$3</td>
           <td>1</td>
         </tr>
       </table>
                `}
                </code>
              </pre>
            </section>

            <section data-auto-animate>
              <h2>HTML</h2>
              <pre>
                <code data-line-numbers="3-5|8-10|13-15">
                  {`
       <script type="text/template">
       sealed class Either<out A, out B> {
         data class Left<out A>(val a: A) : Either<A, Nothing>()
         data class Right<out B>(val b: B) : Either<Nothing, B>()
       }
       </script>
                `}
                </code>
              </pre>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default RevealPage;

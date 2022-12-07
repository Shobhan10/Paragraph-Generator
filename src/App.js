import { useState } from "react";
import text from "./data";

function App() {
  const [paraCount, setParaCount] = useState(0);
  const [paras, setParas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let numberOfParas = +paraCount;

    if (numberOfParas <= 0) {
      numberOfParas = 0;
    }

    if (numberOfParas > text.length) {
      numberOfParas = text.length;
    }

    setParas(text.slice(0, numberOfParas));

    // setParas(() => {
    //   let numberOfParas = +paraCount;
    //   let a = [];
    //   for (let i = 1; i <= numberOfParas; i++) {
    //     a.push(text[i - 1]);
    //   }
    //   return a;
    // });
  };

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={paraCount}
          onChange={(e) => setParaCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paras.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </article>
    </section>
  );
}

export default App;

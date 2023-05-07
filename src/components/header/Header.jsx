import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import headerImg from "../../assets/loading.gif";
import 'animate.css';
import './header1.css'

const words = ["PORTFOLIO 1.0",">>", "FUTURE", "   "]
   
const words2 = ["       ","EVANS"]

const Header = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      // If last word is fully displayed, reset to first word
      setIndex(0);
      setSubIndex(0);
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(
      reverse ? 75 : subIndex === words[index].length ? 1000 : 450,
      parseInt(Math.random() * 350)
    ));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 700);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="header">
      <section className="banner" id="home">
        <Container>
          {/* <span className="tagline">&lsaquo; Hi i am Shiva and &rsaquo;</span>
          <br />
          <p className="tagline">
            &lsaquo; Welcome to the portfolio --version 0.0 &rsaquo;{" "}
          </p>
          <span className="tagline">&lsaquo; I am a &rsaquo;</span> */}
           <p className="tagline">
             hi {" "}
          </p>
           <p className="tagline">
             i am shiva {" "}
          </p>
           <p className="tagline">
             Welcome to the ...  {" "}
          </p>
          
          <h1>{`${words[index].substring(0, subIndex)}${blink ? " " : ""}`}</h1>
          
        </Container>
      </section>
    </div>
  );
};

export default Header;

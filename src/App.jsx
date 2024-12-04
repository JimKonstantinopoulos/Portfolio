import "./app.css";
import { useEffect, useRef, useState } from "react";

function App(){
  const heroText = "My name is Ian Dunkerley, a front-end developer based in Torquay, Devon, UK. I have worked on a wide range of front-end projects, from DJ applications to eCommerce booking platforms, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.";

  const heroTextArr = heroText.split(" ");

  const [visibleWords, setVisibleWords] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    let curIndex = 0;
    intervalRef.current = setInterval(() => {
        setVisibleWords((prev) => [...prev, curIndex]);
        curIndex++;
        
        if(curIndex === heroTextArr.length)
          clearInterval(intervalRef.current);
      }, 200);
    
  }, [heroTextArr]);
  
  return <div>
    <p>
      {heroTextArr.map((el, i) => <span key={i} className={`hero-text ${visibleWords.includes(i) ? "visible" : ""}`}>{el}&nbsp;</span>)}
    </p>
  </div>;
}

export default App;

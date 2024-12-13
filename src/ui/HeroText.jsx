import { useEffect, useState } from "react";

function HeroText() {
  const heroText =
    "My name is Dimitris Konstantinopoulos, a front-end developer from Patras, Greece. I specialize in building responsive, user-centric web applications, with a strong emphasis on intuitive design and seamless functionality. Leveraging modern technologies, I'm passionate about delivering innovative solutions that enhance the user experience and meet diverse project needs.";

  const heroTextArr = heroText.split(" ");

  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    const timeouts = [];
    heroTextArr.forEach((_, i) => {
      timeouts.push(
        setTimeout(
          () => {
            setVisibleWords((prev) => [...prev, i]);
          },
          (i + 10) * 50,
        ),
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="max-w-[40rem] text-stone-300">
      <p>
        <span>Hey there</span>
      </p>
      <p>
        {heroTextArr.map((el, i) => (
          <span
            key={i}
            className={`hero-text ${visibleWords.includes(i) ? "visible" : ""}`}
          >
            {el}&nbsp;
          </span>
        ))}
      </p>
    </div>
  );
}

export default HeroText;

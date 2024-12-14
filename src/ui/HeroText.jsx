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
    <div className="max-w-[50rem] tablet_w:min-w-[680px] text-stone-300 order-2 desktop:order-1 flex flex-col gap-10 items-center desktop:items-start justify-center">
      <p className="text-5xl x_small:text-6xl tablet:text-7xl tablet_w:text-8xl desktop:text-9xl">Welcome.</p>
      <p className="text-center p-3 x_small:pb-8 small:text-xl desktop:text-left desktop:px-4">
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

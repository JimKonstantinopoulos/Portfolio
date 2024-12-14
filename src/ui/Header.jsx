import HeroText from "./HeroText";
import Logo from "./Logo";

function Header() {
  return (
    <>
    <header className="flex justify-center items-center min-h-svh bg-background">
      <div className="flex flex-col items-center desktop:flex-row desktop:justify-around gap-10 small:px-10">
        <Logo />
        <HeroText />
      </div>
    </header>
    </>
  );
}

export default Header;
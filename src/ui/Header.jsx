import HeroText from "./HeroText";
import Logo from "./Logo";

function Header() {
  return (
    <>
    <header className="flex flex-col desktop:flex-row desktop:justify-around items-center min-h-svh bg-background pt-10 desktop:gap-4">
      <Logo />
      <HeroText />
    </header>
    </>
  );
}

export default Header;
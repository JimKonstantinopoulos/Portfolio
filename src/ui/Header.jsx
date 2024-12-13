import HeroText from "./HeroText";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex min-h-svh bg-background">
      <HeroText />
      <Logo />
    </header>
  );
}

export default Header;
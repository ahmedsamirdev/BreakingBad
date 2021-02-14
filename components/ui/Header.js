import "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="center">
      <Link href="/">
        <img src="../logo.png" alt="" />
      </Link>
    </header>
  );
};

export default Header;

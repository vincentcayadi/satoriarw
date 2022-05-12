import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className="mx-auto text-white bg-transparent">
      <div className="flex justify-evenly">
        <div className="text-xl duration-200 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="text-xl duration-200 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div className="text-xl duration-200 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className="text-xl duration-200 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

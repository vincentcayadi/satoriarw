import Link from "next/link";

const Nav = () => {
  return (
    <nav className="mx-auto mt-10 bg-transparent text-sky-50">
      <div className="flex justify-evenly">
        <div className="text-xl duration-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-50">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div className="text-xl duration-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-50">
          <Link href="/experience">
            <a>Experience</a>
          </Link>
        </div>
        <div className="text-xl duration-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-50">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className="text-xl duration-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-sky-50">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

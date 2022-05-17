import Navbar from "../components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div>
          <div className="inline-block mr-12 align-top">
            <h1 className="text-3xl font-bold text-slate-100">
              Hi, I&apos;m Vincent
              <span className="p-0 m-0 text-4xl animate-wave">👋</span>
            </h1>
            <h2 className="mt-2 text-xl text-slate-200">
              Swimmer, Web Developer and Robotics Engineer
            </h2>
            <p className="mt-6 text-xl duration-300 text-slate-400 hover:translate-x-2">
              <Link href="/achievement">
                <a>My Achievements →</a>
              </Link>
            </p>
            <p className="mt-2 text-xl duration-300 text-slate-400 hover:translate-x-2">
              <Link href="/experience">
                <a>My Experiences →</a>
              </Link>
            </p>
            <p className="mt-2 text-xl duration-300 text-slate-400 hover:translate-x-2">
              <Link href="/blog">
                <a>Read My Blog →</a>
              </Link>
            </p>
            <p className="mt-2 text-xl duration-300 text-slate-400 hover:translate-x-2">
              <Link href="/projects">
                <a>My Projects →</a>
              </Link>
            </p>
            <p className="mt-2 text-xl duration-300 text-slate-400 hover:translate-x-2">
              <Link href="/contact">
                <a>Contact Me →</a>
              </Link>
            </p>
          </div>
          <div className="inline-block align-top">
            <Image
              src="https://avatars.githubusercontent.com/u/57314503?v=4"
              width={270}
              height={270}
              alt="pfp"
              className="rounded-2xl"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

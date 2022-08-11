import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
export default function Home() {
  return (
    <>
      <div className="grid h-screen place-items-center bg-gradient-to-b to-cyan-500 from-blue-500">
        <div>
          <div className="inline-block mr-12 align-top">
            <h1 className="text-3xl font-bold text-slate-100">
              Hi, I&apos;m Vincent
              <span className="p-0 m-0 text-4xl animate-wave">👋</span>
            </h1>
            <h2 className="mt-2 text-xl text-slate-200">
              Swimmer, Web Developer and Robotics Engineer
            </h2>
            <p className="mt-4 text-xl text-blue-100 duration-300 hover:translate-x-2">
              <Link href="/blog">
                <a>Read My Blog →</a>
              </Link>
            </p>
            <p className="mt-2 text-xl text-blue-100 duration-300 hover:translate-x-2">
              <Link href="#projects">
                <a>My Projects →</a>
              </Link>
            </p>
            <p className="mt-2 text-xl text-blue-100 duration-300 hover:translate-x-2">
              <Link href="#skill">
                <a>My Skills →</a>
              </Link>
            </p>
            <Icon />
          </div>
          <div className="inline-block align-top">
            <Image
              src="https://avatars.githubusercontent.com/u/57314503?v=4"
              width={240}
              height={240}
              alt="pfp"
              className="rounded-2xl"
            ></Image>
          </div>
        </div>
      </div>
      <div className="grid h-screen place-items-center from-cyan-500 to-indigo-500 bg-gradient-to-b">
        Projects
      </div>
      <div className="grid h-screen bg-indigo-500 place-items-center">
        Skills
      </div>
    </>
  );
}

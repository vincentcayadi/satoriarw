import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
export default function Home() {
  return (
    <>
      <div className="grid h-screen select-none place-items-center bg-gradient-to-b to-blue-500 from-indigo-500">
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
      <div className="grid h-screen place-items-center from-blue-500 to-cyan-500 bg-gradient-to-b">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Projects</h1>
          <div className="grid grid-rows-4 gap-2 gird-cols-1">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
          </div>
        </div>
      </div>
      <div className="grid h-screen bg-cyan-500 place-items-center">
        Contact Me
      </div>
    </>
  );
}

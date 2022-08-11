import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
export default function Home() {
  return (
    <>
      <div className="grid h-screen place-items-center bg-gradient-to-b to-blue-500 from-indigo-500">
        <div>
          <div className="inline-block mr-12">
            <h1 className="text-3xl font-bold text-slate-100">
              Hi, I&apos;m Vincent
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
          <h1
            className="mb-4 text-3xl font-bold text-center text-slate-100"
            id="projects"
          >
            Projects
          </h1>
          <div className="grid grid-flow-col gap-2 text-center">
            <div>BlockVault</div>
            <div>Robocup Soccer Junior</div>
          </div>
        </div>
      </div>
      <div className="grid h-screen bg-cyan-500 place-items-center">
        <div className="grid w-1/2 p-2 mx-auto bg-white rounded-md h-1/2 drop-shadow-lg place-items-center">
          <div className="font-inter"></div>
          <button className="p-2 font-bold border-2 border-black rounded-md text-l">
            Download My Resume
          </button>
          <p className="text-base font-bold animate-bounce">Turn me over</p>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import Icon from "../components/Icon";
export default function Home() {
  return (
    <>
      <div className="grid w-full h-screen mx-auto place-items-center bg-gradient-to-b to-blue-500 from-indigo-500">
        <div className="w-1/2 mx-auto sm:w-max">
          <div className="inline-block sm:mr-16 ">
            <h1 className="text-2xl font-bold sm:text-3xl text-slate-100">
              Hi, I&apos;m Vincent
            </h1>
            <h2 className="mt-2 text-base sm:text-xl text-slate-200">
              Robotics Engineer
            </h2>
            <h2 className="mt-2 text-base sm:text-xl text-slate-200">
              Web Developer
            </h2>
            <h2 className="mt-2 text-base sm:text-xl text-slate-200">
              Athelete
            </h2>
            <p className="mt-2 text-base text-blue-100 duration-300 sm:text-xl sm:hover:translate-x-2">
              <Link href="/blog">
                <a>Read My Blog →</a>
              </Link>
            </p>
            <p className="mt-2 text-base text-blue-100 duration-300 sm:text-xl sm:hover:translate-x-2">
              <Link href="#projects">
                <a>My Projects →</a>
              </Link>
            </p>
          </div>
          <div className="inline-block mt-4 align-top sm:mt-0">
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
      <div
        className="grid h-screen place-items-center from-blue-500 to-cyan-500 bg-gradient-to-b"
        id="projects"
      >
        <div>
          <h1 className="mb-4 text-3xl font-bold text-center text-slate-100">
            Projects
          </h1>
          <div className="grid grid-flow-col gap-2 text-center">
            <div>BlockVault</div>
            <div>Robocup Soccer Junior</div>
          </div>
        </div>
      </div>
      <div className="grid h-screen bg-cyan-500 place-items-center">
        <div className="grid w-1/2 p-2 mx-auto text-center bg-white rounded h-1/2 drop-shadow-lg place-items-center">
          <div>
            <button className="block p-2 mb-4 font-bold border-2 border-black rounded-sm text-l">
              Download My Resume
            </button>
            <button className="text-base font-bold animate-bounce">
              Turn me over
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <>
      <div className="w-1/2 mx-auto">
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
              <p className="mt-4 text-xl duration-300 text-slate-400 hover:translate-x-2">
                <Link href="/blog">
                  <a>Read My Blog →</a>
                </Link>
              </p>
              <p className="mt-2 text-xl duration-300 text-slate-400 hover:translate-x-2">
                <Link href="#contact">
                  <a>Contact Me →</a>
                </Link>
              </p>
              <p className="mt-2 text-xl duration-300 text-slate-400 hover:translate-x-2">
                <Link href="#projects">
                  <a>My Projects →</a>
                </Link>
              </p>
              <p className="mt-2 text-xl duration-300 text-slate-400 hover:translate-x-2">
                <Link href="#skill">
                  <a>My Skills →</a>
                </Link>
              </p>
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
        <br></br>
        <div id="contact" className="h-screen pt-10">
          <h1>Contact Me</h1>
          <div className="w-full mt-10 rounded-xl h-1/2 bg-slate-500"></div>
        </div>
        <br></br>
        <div id="projects" className="h-screen pt-10">
          <h1>Projects</h1>
          <div className="grid grid-cols-3 gap-6 mt-10 h-80 auto-cols-max auto-rows-max">
            <div className="p-2 duration-200 border-2 rounded-xl hover:scale-110">
              <div className="max-w-sm overflow-hidden">
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold ">BlockVault</div>
                  <p className="text-base">
                    Secure Your Data Using the power of the blockchain
                  </p>
                  <div className="mt-2 text-center text-white">
                    <Link href="https://github.com/Vincent-Cayadi/blockvault">
                      <a>Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 duration-200 border-2 rounded-xl hover:scale-110">
              <div className="max-w-sm overflow-hidden">
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold ">
                    Robocup Junior Soccer
                  </div>
                  <p className="text-base ">
                    Make Soccer Robots that can play soccer
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 duration-200 border-2 rounded-xl hover:scale-110">
              <div className="max-w-sm overflow-hidden">
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold ">
                    Autodesk AutoCAD
                  </div>
                  <p className="text-base ">
                    Used AutoCAD for generating 2D and 3D models for my robots.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 mx-auto mt-10 text-center">
            <div className="duration-150 hover:translate-x-5">
              <Link href="/projects">
                <a className="text-xl">Read More →</a>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        <div id="skill" className="h-screen pt-10">
          <div>
            <h1>My Skills</h1>
            <div className="p-6">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

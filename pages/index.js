import Link from "next/link";
import About from "../sections/About";
import Accordion from "../components/Accordion";
export default function Home() {
  return (
    <>
      <About />
      <div className="w-1/2 mx-auto">
        <div id="projects" className="h-screen pt-10">
          <h1>Projects</h1>
          <div className="grid grid-cols-3 gap-6 mt-10 h-80 auto-rows-max">
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

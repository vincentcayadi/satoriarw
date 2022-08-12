import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { IconContext } from "react-icons";
import { FiGithub, FiCoffee } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="grid w-full h-screen mx-auto place-items-center bg-gradient-to-b to-indigo-500 from-purple-500">
        <div className="w-3/4 mx-auto text-center text-purple-100 sm:w-max">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Hi, I&apos;m Vincent Cayadi
            </h1>
            <div className="mt-6">
              <p className="text-xl sm:text-2xl">
                Interact with the links to start exploring
              </p>
              <p className="mt-2 text-lg text-purple-100 duration-300 sm:mt-4 sm:text-xl sm:hover:scale-125">
                <Link href="#projects">
                  <a>My Projects</a>
                </Link>
              </p>
              <p className="mt-2 text-lg text-purple-100 duration-300 sm:mt-4 sm:text-xl sm:hover:scale-125 ">
                <Link href="#about">
                  <a>About Me</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid h-screen place-items-center from-indigo-500 to-blue-500 bg-gradient-to-b"
        id="about"
      >
        <div className="text-center text-slate-100">
          <h1 className="mb-4 text-3xl font-bold">About Me</h1>
          <p className="text-xl">Robotics Enginner</p>
          <p className="text-xl">Web Developer</p>
          <p className="text-xl">Athlete</p>
        </div>
      </div>
      <div
        className="grid w-full h-screen place-items-center from-blue-500 to-sky-500 bg-gradient-to-b"
        id="projects"
      >
        <div className="w-3/4 sm:w-2/3">
          <h1 className="mb-4 text-3xl font-bold text-center text-slate-100">
            Projects
          </h1>
          <div className="grid grid-cols-5 gap-2 text-center">
            <div className="col-span-3 bg-white rounded-md">
              <p className="inline-block px-4 py-2 text-sm text-left text-gray-800">
                Robocup Junior Soccer
              </p>
              <p className="inline-block px-4 py-2 text-sm text-right text-gray-400">
                AutoCAD, Fusion 360, Altium Designer
              </p>
            </div>
            <div className="col-span-2 bg-white rounded-md">
              <p className="inline-block px-4 py-2 text-sm text-left text-gray-800">
                BlockVault
              </p>
              <p className="inline-block px-4 py-2 text-sm text-right text-gray-400">
                React, TailWindCSS, Moralis
              </p>
            </div>
            <div className="col-span-2 bg-white rounded-md">
              <p className="inline-block px-4 py-2 text-sm text-left text-gray-800">
                Insert Cool Project
              </p>
              <p className="inline-block px-4 py-2 text-sm text-right text-gray-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            <div className="col-span-3 bg-white rounded-md">
              <p className="inline-block px-4 py-2 text-sm text-left text-gray-800">
                Insert Cool Project
              </p>
              <p className="inline-block px-4 py-2 text-sm text-right text-gray-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="grid place-items-center">
            <Link href="https://github.com/Vincent-Cayadi?tab=repositories">
              <a className="inline-block px-8 py-2 my-4 text-base font-semibold duration-300 bg-white rounded-md text-slate-800 sm:hover:scale-105">
                View More
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid h-screen bg-gradient-to-b from-sky-500 to-cyan-500 place-items-center">
        <div className="grid w-2/3 p-8 mx-auto text-center bg-white rounded sm:w-1/2 h-1/2 drop-shadow-lg place-items-center">
          <div className="grid w-full h-full text-center place-content-center">
            <h1 className="mb-4 text-xl font-bold underline sm:mb-8 sm:text-2xl">
              Vincent Cayadi
            </h1>
            <div className="grid grid-cols-1 grid-rows-4 gap-2 sm:gap-6 sm:grid-cols-2 sm:grid-rows-2 place-items-center">
              <IconContext.Provider
                value={{ size: "1.5rem", className: "inline-block" }}
              >
                <div className="p-2 duration-500 border-2 border-transparent sm:hover:border-b-gray-200">
                  <Link href="https://www.github.com/Vincent-Cayadi">
                    <div>
                      <FiGithub />
                      <a className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        My Github Page
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="p-2 duration-500 border-2 border-transparent sm:hover:border-b-gray-200">
                  <Link href="https://discord.com/users/678790092000854017">
                    <div>
                      <SiDiscord />
                      <a className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        Chat On Discord
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="p-2 duration-500 border-2 border-transparent sm:hover:border-b-gray-200">
                  <Link href="https://www.instagram.com/vincentcayadi/">
                    <div>
                      <FaInstagram />
                      <a className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        Follow Me On Insta
                      </a>
                    </div>
                  </Link>
                </div>
                <div className="p-2 duration-500 border-2 border-transparent sm:hover:border-b-gray-200">
                  <Link href="https://www.ko-fi.com/vincentcayadi">
                    <div>
                      <FiCoffee />
                      <a className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        Support Me On KoFi
                      </a>
                    </div>
                  </Link>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

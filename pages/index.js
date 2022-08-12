import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { IconContext } from "react-icons";
import { FiGithub, FiCoffee } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <div className="grid w-full h-screen mx-auto place-items-center bg-gradient-to-b to-indigo-500 from-purple-500">
        <div className="w-3/4 mx-auto sm:w-max">
          <div className="inline-block sm:mr-16 ">
            <h1 className="text-2xl font-bold sm:text-3xl text-slate-100">
              Hi, I&apos;m Vincent
            </h1>
            <div className="mt-4">
              <p className="mt-2 text-blue-100 duration-300 text-l sm:text-xl sm:hover:translate-x-2">
                <Link href="/blog">
                  <a>Read My Blog →</a>
                </Link>
              </p>
              <p className="mt-2 text-blue-100 duration-300 text-l sm:text-xl sm:hover:translate-x-2">
                <Link href="#projects">
                  <a>My Projects →</a>
                </Link>
              </p>
              <p className="mt-2 text-blue-100 duration-300 text-l sm:text-xl sm:hover:translate-x-2">
                <Link href="#about">
                  <a>About Me →</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="invisible inline-block mt-4 align-top sm:mt-0 sm:visible">
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
        <div className="w-3/4">
          <h1 className="mb-4 text-3xl font-bold text-center text-slate-100">
            Projects
          </h1>
          <div className="grid grid-cols-5 gap-2 text-center">
            <div className="col-span-3 px-4 py-2 bg-white rounded-md">
              Robocup Junior Soccer
              <p className="text-sm text-left text-gray-400 align-middle">
                Autodesk AutoCAD, Autodesk Fusion 360, Altium Designer
              </p>
            </div>
            <div className="col-span-2 px-4 py-2 bg-white rounded-md">
              BlockVault
              <p className="text-sm text-left text-gray-400 align-middle">
                React, TailWindCSS, Moralis
              </p>
            </div>
            <div className="col-span-2 px-4 py-2 bg-white rounded-md">
              Blog
              <p className="text-sm text-left text-gray-400 align-middle">
                NextJS, TailWindCSS
              </p>
            </div>
            <div className="col-span-3 px-4 py-2 bg-white rounded-md">KMS</div>
          </div>
        </div>
      </div>
      <div className="grid h-screen bg-gradient-to-b from-sky-500 to-cyan-500 place-items-center">
        <div className="grid w-3/4 p-8 mx-auto text-center bg-white rounded h-3/4 drop-shadow-lg place-items-center">
          <div className="grid w-full h-full grid-cols-1 text-center sm:grid-cols-2 place-content-center">
            <div className="grid grid-cols-1 grid-rows-4 gap-2 sm:gap-6 sm:grid-cols-2 sm:grid-rows-2 place-items-center">
              <IconContext.Provider
                value={{ size: "1.5rem", className: "inline-block" }}
              >
                <a
                  href="https://www.instagram.com/vincentcayadi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 duration-500 border-b-2 border-transparent hover:border-b-2 sm:hover:border-gray-200"
                >
                  <FaInstagram />
                  <a className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                    Follow Me On Insta
                  </a>
                </a>
                <a
                  href="https://www.github.com/Vincent-Cayadi"
                  target="_blank"
                  rel="noopner noreferrer"
                  className="p-1 duration-500 border-b-2 border-transparent hover:border-b-2 sm:hover:border-gray-200"
                >
                  <FiGithub />
                  <a className="inline p-2 text-base align-middle sm:text-l md:text-xl ">
                    View My Github Page
                  </a>
                </a>
                <a
                  href="https://discord.com/users/678790092000854017"
                  target="_blank"
                  rel="noopner noreferrer"
                  className="p-1 duration-500 border-b-2 border-transparent hover:border-b-2 sm:hover:border-gray-200"
                >
                  <SiDiscord />
                  <a className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                    Chat On Discord
                  </a>
                </a>
                <a
                  href="https://www.ko-fi.com/vincentcayadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 duration-500 border-b-2 border-transparent hover:border-b-2 sm:hover:border-gray-200"
                >
                  <FiCoffee />
                  <a className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                    Support Me on Kofi
                  </a>
                </a>
              </IconContext.Provider>
            </div>
            <div className="h-full mt-4 bg-white rounded-md drop-shadow-xl sm:mt-0">
              <form method="POST" className="p-4 text-left">
                <label className="block mb-2">Your Name:</label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Joe Bloggs"
                  className="block w-full p-2 mb-6 duration-300 border-2 border-gray-300 rounded-md sm:hover:border-gray-400"
                />
                <label className="block mb-2">Email Address:</label>
                <input
                  type="text"
                  id="femail"
                  name="address"
                  placeholder="joebloggs@gmail.com"
                  className="block w-full p-2 mb-6 duration-300 border-2 border-gray-300 rounded-md sm:hover:border-gray-400"
                />
                <label className="block mb-2">Subject:</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something..."
                  className="w-full p-2 duration-300 border-2 border-gray-300 rounded-md h-1/6 sm:hover:border-gray-400"
                ></textarea>
                <div className="grid w-full place-content-end">
                  <button className="px-4 py-2 my-2 duration-300 bg-gray-300 border border-gray-300 rounded-md hover:bg-transparent">
                    <a className="align-middle text-l">Send</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

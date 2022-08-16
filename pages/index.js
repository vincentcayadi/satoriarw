import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { FaInstagram } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { IconContext } from "react-icons";
import { FiGithub, FiCoffee } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Vincent Cayadi</title>
        <meta name="description" content="Home | Vincent Cayadi" />
      </Head>
      <section className="grid w-full h-screen mx-auto select-none place-items-center bg-gradient-to-b to-indigo-500 from-purple-500">
        <div className="w-3/4 mx-auto text-left text-purple-100 sm:w-max">
          <div>
            <h1 className="text-xl font-semibold sm:text-2xl">Hi,</h1>
            <h1 className="text-3xl font-bold sm:text-4xl">
              I&apos;m Vincent Cayadi
            </h1>
            <div className="mt-2">
              <p className="text-xl sm:text-2xl">
                Click on the links to start exploring
              </p>
              <p className="mt-2 text-base text-purple-100 duration-300 sm:text-xl sm:hover:translate-x-2">
                <Link href="#projects">
                  <a>My Projects →</a>
                </Link>
              </p>
              <p className="mt-2 text-base text-purple-100 duration-300 sm:text-xl sm:hover:translate-x-2 ">
                <Link href="#about">
                  <a>About Me →</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="grid h-screen select-none place-items-center from-indigo-500 to-blue-500 bg-gradient-to-b"
        id="about"
      >
        <div className="grid w-3/4 grid-cols-1 gap-0 text-left sm:w-max sm:gap-10 sm:grid-cols-2 text-slate-100">
          <div>
            <h1 className="text-3xl font-bold">About Me</h1>
            <h2 className="mt-4 text-lg sm:text-xl">
              Avid Anime & Chemistry Enjoyer
            </h2>
            <h2 className="mt-2 text-lg sm:text-xl">Robotics Enginner</h2>
            <h2 className="mt-2 text-lg sm:text-xl">Web Developer</h2>
            <h2 className="mt-2 text-lg sm:text-xl">Athlete</h2>
          </div>
          <div className="mt-4 sm:grid sm:mt-0 sm:place-items-center">
            <Image
              src="/1.jpg"
              width={256}
              height={256}
              alt="pfp"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
      <section
        className="grid w-full h-screen select-none place-items-center from-blue-500 to-sky-500 bg-gradient-to-b"
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
              <p className="inline-block px-4 py-2 text-sm text-right text-gray-500">
                Made Robot that played soccer
              </p>
            </div>
            <div className="col-span-2 bg-white rounded-md">
              <p className="inline-block px-4 py-2 text-sm text-left text-gray-800">
                BlockVault
              </p>
              <p className="inline-block px-4 py-2 text-sm text-right text-gray-500">
                Decentralized Application
              </p>
            </div>
            <div className="col-span-2 bg-white rounded-md">
              <p className="inline-block px-4 py-2 text-sm text-left text-gray-800">
                Silk Road
              </p>
              <p className="inline-block px-4 py-2 text-sm text-right text-gray-500">
                E-Commerce Store
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
      </section>
      <section className="grid h-screen select-none bg-gradient-to-b from-sky-500 to-cyan-500 place-items-center">
        <div className="grid w-2/3 p-8 mx-auto text-center bg-white rounded sm:w-1/2 h-1/2 drop-shadow-lg place-items-center">
          <div className="grid w-full h-full text-center place-content-center">
            <h1 className="mb-4 text-xl font-bold underline sm:mb-8 sm:text-2xl">
              Vincent Cayadi
            </h1>
            <div className="grid grid-cols-1 grid-rows-4 gap-2 sm:gap-6 sm:grid-cols-2 sm:grid-rows-2 place-items-center">
              <IconContext.Provider
                value={{ size: "1.5rem", className: "inline-block" }}
              >
                <div className="p-2 duration-500 border-2 border-transparent cursor-pointer sm:hover:border-b-gray-200">
                  <Link href="https://www.github.com/Vincent-Cayadi">
                    <div>
                      <FiGithub />
                      <p className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        My Github Page
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="p-2 duration-500 border-2 border-transparent cursor-pointer sm:hover:border-b-gray-200">
                  <Link href="https://discord.com/users/678790092000854017">
                    <div>
                      <SiDiscord />
                      <p className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        Chat On Discord
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="p-2 duration-500 border-2 border-transparent cursor-pointer sm:hover:border-b-gray-200">
                  <Link href="https://www.instagram.com/vincentcayadi/">
                    <div>
                      <FaInstagram />
                      <p className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        Follow Me On Insta
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="p-2 duration-500 border-2 border-transparent cursor-pointer sm:hover:border-b-gray-200">
                  <Link href="https://www.ko-fi.com/vincentcayadi">
                    <div>
                      <FiCoffee />
                      <p className="inline p-2 text-base align-middle sm:text-l md:text-xl">
                        Support Me On KoFi
                      </p>
                    </div>
                  </Link>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

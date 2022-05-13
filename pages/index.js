import Navbar from "../components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid h-screen place-items-center">
        <div className="">
          <div className="inline-block m-8">
            <h1 className="text-3xl font-bold text-slate-200">
              Hi, I&apos;m Vincent
            </h1>
            <h2 className="text-slate-300">
              Student, Swimmer, Web Developer and Engineer
            </h2>
            <p className="text-slate-400">
              Building Web Apps 💻 and Robots 🤖 while juggling with school
            </p>
          </div>
          <div className="inline-block">
            <Image
              src="https://avatars.githubusercontent.com/u/57314503?v=4"
              width={160}
              height={160}
              alt="pfp"
              className="rounded-full"
            ></Image>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-bold text-slate-200">Highlights</h1>
          <div className="flex text-slate-200">
            <div className="p-2 m-2 border-2 rounded-xl">
              <p>Secetary of Hwa Chong Robotics</p>
            </div>
            <div className="p-2 m-2 border-2 rounded-xl">
              <p>Swimming NSG 5th Place 50 Breastroke</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

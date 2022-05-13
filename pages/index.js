import Navbar from "../components/Nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-evenly">
        <h1 className="m-2 mx-auto text-xl text-white">Hello world</h1>
      </div>
    </>
  );
}

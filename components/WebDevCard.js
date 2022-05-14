/* https://css-tricks.com/how-to-animate-the-details-element */
const WebDevCard = () => {
  return (
    <>
      <details>
        <summary className="p-2 text-white bg-opacity-20 rounded-tl-md rounded-tr-md bg-slate-500">
          Front End Frameworks
        </summary>
        <div className="grid grid-cols-2 gap-6 bg-opacity-20 bg-slate-500 ">
          <div className="max-w-sm overflow-hidden">
            <div className="px-6 py-4 bg-opacity-20 bg-slate-500 rounded-bl-md">
              <div className="mb-2 text-xl font-bold bg-transparent text-slate-300">
                React.js
              </div>
              <p className="text-base bg-transparent text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden ">
            <div className="px-6 py-4 bg-opacity-20 bg-slate-500 rounded-br-md ">
              <div className="mb-2 text-xl font-bold bg-transparent text-slate-300">
                Next.js
              </div>
              <p className="text-base bg-transparent text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </details>
      <details>
        <summary className="text-white">JS Runtimes</summary>
        <div className="grid grid-cols-2 gap-6">
          <div className="max-w-sm overflow-hidden duration-150 border-2 rounded hover:scale-110 transform-gpu">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-slate-300">
                React.js
              </div>
              <p className="text-base text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden duration-150 border-2 rounded hover:scale-110 transform-gpu">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-slate-300">
                Next.js
              </div>
              <p className="text-base text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </details>
      <details>
        <summary className="text-white">Backend</summary>
        <div className="grid grid-cols-2 gap-6">
          <div className="max-w-sm overflow-hidden duration-150 border-2 rounded hover:scale-110 transform-gpu">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-slate-300">
                Firebase
              </div>
              <p className="text-base text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden duration-150 border-2 rounded hover:scale-110 transform-gpu">
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-slate-300">
                MongoDB
              </div>
              <p className="text-base text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </details>
    </>
  );
};

export default WebDevCard;

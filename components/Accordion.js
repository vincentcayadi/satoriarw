import { Accordion } from "@mantine/core";

/* https://css-tricks.com/how-to-animate-the-details-element */
const accordion = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item label="Web Development">
          <div className="grid grid-cols-2 gap-6">
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 ">
                <div className="mb-2 text-xl font-bold ">React.js</div>
                <p className="text-base ">Used React for BlockVault</p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 ">
                <div className="mb-2 text-xl font-bold ">Next.js</div>
                <p className="text-base ">
                  Built this website using Next.js and Tailwind and Mantine
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold ">MongoDB</div>
                <p className="text-base ">
                  Used MongoDB for my ecommerce website
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 ">
                <div className="mb-2 text-xl font-bold ">Firebase</div>
                <p className="text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Item>
        <Accordion.Item label="Robotics Engineer">
          <div className="grid grid-cols-2 gap-6">
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-bl-md">
                <div className="mb-2 text-xl font-bold ">Autodesk AutoCAD</div>
                <p className="text-base ">
                  Used AutoCAD for generating 2D and 3D models for my robots.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-br-md">
                <div className="mb-2 text-xl font-bold">Fusion 360</div>
                <p className="text-base ">
                  Moved to Fusion 360 as it is more powerful and has a Altium
                  integration.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-bl-md">
                <div className="mb-2 text-xl font-bold">Altium</div>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-br-md">
                <div className="mb-2 text-xl font-bold">KiCad</div>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-br-md">
                <div className="mb-2 text-xl font-bold">Eagle</div>
              </div>
            </div>
          </div>
        </Accordion.Item>
        <Accordion.Item label="Computer Science">
          <div className="grid grid-cols-2 gap-6">
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-bl-md">
                <div className="mb-2 text-xl font-bold ">Python</div>
                <p className="text-base ">
                  Used AutoCAD for generating 2D and 3D models for my robots.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-br-md">
                <div className="mb-2 text-xl font-bold">C++</div>
                <p className="text-base ">
                  Moved to Fusion 360 as it is more powerful and has a Altium
                  integration.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-bl-md">
                <div className="mb-2 text-xl font-bold">Rust</div>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 rounded-br-md">
                <div className="mb-2 text-xl font-bold">Machine Learning</div>
              </div>
            </div>
          </div>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default accordion;

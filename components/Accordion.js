import { Accordion } from "@mantine/core";

/* https://css-tricks.com/how-to-animate-the-details-element */
const accordion = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item label="Web Development">
          <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">React.js</div>
                <p className="text-base">Used React for BlockVault</p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l ">Next.js</div>
                <p className="text-base">
                  Built this website using Next.js and Tailwind and Mantine
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l ">MongoDB</div>
                <p className="text-base">
                  Used MongoDB for my ecommerce website
                </p>
              </div>
            </div>
          </div>
        </Accordion.Item>
        <Accordion.Item label="Robotics Engineer">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">AutoCAD</div>
                <p className="text-base">
                  Used AutoCAD for generating 2D and 3D models for my robots.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">
                  Fusion 360
                </div>
                <p className="text-base">
                  Moved to Fusion 360 as it is more powerful and has a Altium
                  integration. And wanted to dip my toes into parametric 3D
                  modelling
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">FreeCAD</div>
                <p className="text-base">
                  Wanted to find a free alternative so that I can continue to
                  desgin PCBs even after my student license expires
                </p>
                <p className="text-base">
                  Teach people how to make PCBs for those that don&apos;t have a
                  student license
                </p>
                <p className="text-base">
                  Its a parametric 3D modelling Software!!!
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">Altium</div>
                <p className="text-base">
                  Wanted to try out what people in the ECAD industry use
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">KiCad</div>
                <p className="text-base">
                  Wanted to find a free alternative so that I can continue to
                  desgin PCBs even after my student license expires
                </p>
                <p className="text-base">
                  Teach people how to make PCBs for those that don&apos;t have a
                  student license
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">Eagle</div>
                <p className="text-base">
                  My very first ECAD Desgining software
                </p>
              </div>
            </div>
          </div>
        </Accordion.Item>
        <Accordion.Item label="Computer Science">
          <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">Python</div>
                <p className="text-base">
                  Used python for a majority of my projects such as ML, Data
                  Science
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">C++</div>
                <p className="text-base">
                  Learnt CPP for programming my robots
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="p-4">
                <div className="mb-2 text-xl font-bold md:text-l">
                  Machine Learning
                </div>
                <p className="text-base">TensorFlow for my ML Waifu projects</p>
              </div>
            </div>
          </div>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default accordion;

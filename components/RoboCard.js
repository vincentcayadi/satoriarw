import { Accordion } from "@mantine/core";

/* https://css-tricks.com/how-to-animate-the-details-element */
const RoboCard = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item label="Mechanical Engineering">
          <div className="grid grid-cols-2 gap-6 bg-opacity-20">
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 bg-opacity-20 rounded-bl-md">
                <div className="mb-2 text-xl font-bold bg-transparent">
                  Autodesk AutoCAD
                </div>
                <p className="text-base bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 bg-opacity-20 rounded-br-md">
                <div className="mb-2 text-xl font-bold bg-transparent">
                  Fusion 360
                </div>
                <p className="text-base bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Item>

        <Accordion.Item label="Electrical Engineering">
          <div className="grid grid-cols-3 gap-6 bg-opacity-20">
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 bg-opacity-20 rounded-bl-md">
                <div className="mb-2 text-xl font-bold bg-transparent">
                  Altium
                </div>
                <p className="text-base bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 bg-opacity-20 rounded-br-md">
                <div className="mb-2 text-xl font-bold bg-transparent">
                  KiCad
                </div>
                <p className="text-base bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 bg-opacity-20 rounded-br-md">
                <div className="mb-2 text-xl font-bold bg-transparent">
                  Eagle
                </div>
                <p className="text-base bg-transparent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,x
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default RoboCard;

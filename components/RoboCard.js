import { Accordion } from "@mantine/core";

/* https://css-tricks.com/how-to-animate-the-details-element */
const RoboCard = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item label="MCAD">
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
                  Moved to Fusion 360 as it is more powerful and has a Altium integration.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Item>

        <Accordion.Item label="ECAD">
          <div className="grid grid-cols-3 gap-6 ">
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
      </Accordion>
    </>
  );
};

export default RoboCard;

import { Accordion } from "@mantine/core";

/* https://css-tricks.com/how-to-animate-the-details-element */
const WebDevCard = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item label="Front End">
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
          </div>
        </Accordion.Item>

        <Accordion.Item label="Back End">
          <div className="grid grid-cols-2 gap-6">
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 ">
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
      </Accordion>
    </>
  );
};

export default WebDevCard;

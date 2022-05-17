import { Accordion } from "@mantine/core";

/* https://css-tricks.com/how-to-animate-the-details-element */
const WebDevCard = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item label="Front End">
          <div className="grid grid-cols-2 gap-6 bg-opacity-20">
            <div className="max-w-sm overflow-hidden">
              <div className="px-6 py-4 bg-opacity-20 rounded-bl-md">
                <div className="mb-2 text-xl font-bold bg-transparent">
                  React.js
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
                  Next.js
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

        <Accordion.Item label="Back End">
          Configure components appearance and behavior with vast amount of
          settings or overwrite any part of component styles
        </Accordion.Item>

        <Accordion.Item label="No annoying focus ring">
          With new :focus-visible pseudo-class focus ring appears only when user
          navigates with keyboard
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default WebDevCard;

import { Timeline, Text } from "@mantine/core";
import Navbar from "../components/Nav";
export default function achievement() {
  return (
    <>
      <Navbar />
      <div className="w-1/3 m-auto mt-20">
        <Timeline active={2} bulletSize={20} lineWidth={4} color="teal">
          <Timeline.Item title="21st March 2007">
            <Text className="mt-2 text-s">I was born👶</Text>
          </Timeline.Item>
          <Timeline.Item title="Secondary 1">
            <Text className="mt-2 text-s">DSA to Hwa Chong Robotics</Text>
          </Timeline.Item>
          <Timeline.Item title="Secondary 2">
            <Text className="mt-2 text-s">Hwa Chong Robotics Secetary</Text>
            <Text className="text-s">
              Best Mechanical Design for Robocup Junior Soccer
            </Text>
            <Text className="text-s">Trainer for Rulang Workshop</Text>
          </Timeline.Item>
          <Timeline.Item title="Secondary 3" lineVariant="dashed">
            <Text className="mt-2 text-s">National School Games 5th Place</Text>
            <Text className="mt-2 text-s">
              Trainer for <i>EveryOneCanBuild</i>
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Secondary 4">
            <Text>Unknown</Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
}

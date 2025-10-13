import React from "react";
import BannerCarousel from "../BannerCarousel";
import IntroCard from "../IntroCard";
import { Flex } from "antd";

function Home() {
  return (
    <Flex vertical gap={12}>
      <Flex>
        <BannerCarousel />
      </Flex>
      <Flex>
        <IntroCard />
      </Flex>
    </Flex>
  );
}

export default Home;

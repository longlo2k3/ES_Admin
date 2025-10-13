import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import IntroText from "./IntroText";

function BannerCarousel() {
  return (
    <Flex gap={32}>
      <Flex flex={1}>
        <Banner />
      </Flex>
      <Flex vertical flex={1} gap={8} justify="center">
        <IntroText />
      </Flex>
    </Flex>
  );
}

export default BannerCarousel;

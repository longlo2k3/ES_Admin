import { Tabs, TabsProps } from "antd";
import React from "react";
import LevelCard from "./LevelCard";

function Levels() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <LevelCard
          title="Cấp độ cơ bản"
          code="Beginner"
          desc="Dành cho người mới bắt đầu"
          active
        />
      ),
      children: `Content of tab 1`,
    },
    {
      key: "2",
      label: (
        <LevelCard
          title="Cấp độ trung cấp"
          code="Intermediate"
          desc="Dành cho người đã có nền tảng"
        />
      ),
      children: `Content of tab 2`,
    },
    {
      key: "3",
      label: (
        <LevelCard
          title="Cấp độ nâng cao"
          code="Advanced"
          desc="dành cho người đã thành thạo"
        />
      ),
      children: `Content of tab 3`,
    },
  ];
  return <Tabs tabPosition="left" defaultActiveKey="1" items={items} />;
}

export default Levels;

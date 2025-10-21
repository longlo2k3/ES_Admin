import { Divider, Tabs, TabsProps } from "antd";
import React from "react";
import LevelCard from "../ts-module-skills-listening/page";
import TopicList from "./TopicList"
function LevelListListening() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <LevelCard
          title="Cấp độ cơ bản"
          code="Beginner"
          desc="Dành cho người mới bắt đầu"
          isActive
        />
      ),
      children: <div>
        <TopicList />
      </div>,
    },
    {
      key: "2",
      label: (
        <LevelCard
          title="Cấp độ trung cấp"
          code="Intermediate"
          desc="Dành cho người đã có nền tảng"
          isActive={false}
        />
      ),
      children: <div>
        <TopicList />
      </div>,
    },
    {
      key: "3",
      label: (
        <LevelCard
          title="Cấp độ nâng cao"
          code="Advanced"
          desc="Dành cho người đã thành thạo"
          isActive={false}
        />
      ),
      children:
        <div>
          <TopicList />
        </div>
      ,
    },
  ];
  return (
    <div> Cấp độ
      <Tabs tabPosition="top" defaultActiveKey="1" items={items} />
    </div>
  );
}

export default LevelListListening;

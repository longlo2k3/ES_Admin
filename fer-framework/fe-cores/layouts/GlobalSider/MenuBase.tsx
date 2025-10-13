"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { items } from "@/app/menu";
import { useTheme } from "@/fer-framework/fe-global/themes";
import { useCollapsed } from "../GlobalLayoutBase/CollapsedProvider";
import { useRouter, usePathname } from "next/navigation";

function MenuBase() {
  const { mode } = useTheme();
  const { collapsed } = useCollapsed();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    // Hàm tìm key tương ứng với pathname
    const findKeyByLink = (path, items) => {
      for (const item of items) {
        if (item.link === path) return item.key;
        if (item.children) {
          const childKey = findKeyByLink(path, item.children);
          if (childKey) return childKey;
        }
      }
      return null;
    };

    const currentKey = findKeyByLink(pathname, items);
    if (currentKey) {
      setSelectedKeys([currentKey]);
    }
  }, [pathname]);

  const handleClick = (e) => {
    const findLink = (key, items) => {
      for (const item of items) {
        if (item.key === key) return item.link;
        if (item.children) {
          const result = findLink(key, item.children);
          if (result) return result;
        }
      }
      return null;
    };

    const link = findLink(e.key, items);
    if (link) {
      router.push(link);
    }
  };

  return (
    <Menu
      style={{ height: "100%" }}
      mode="inline"
      theme={mode === "dark" ? "dark" : "light"}
      items={items}
      inlineCollapsed={collapsed}
      selectedKeys={selectedKeys}
      onClick={handleClick}
    />
  );
}

export default MenuBase;

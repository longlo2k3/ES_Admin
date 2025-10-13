import {
  CustomerServiceOutlined,
  EditOutlined,
  ProfileOutlined,
  ReadOutlined,
  SnippetsOutlined,
  SoundOutlined,
} from "@ant-design/icons";

export const SKILLS = [
  {
    icon: (
      <CustomerServiceOutlined style={{ fontSize: 28, color: "#5066FF" }} />
    ),
    title: "Kỹ năng Nghe ",
    desc: "Luyện nghe tiếng Anh với các bài hội thoại, tin tức và podcast đa dạng chủ đề.",
    link: "/skills/listening",
  },
  {
    icon: <SoundOutlined style={{ fontSize: 28, color: "#5066FF" }} />,
    title: "Kỹ năng Nói ",
    desc: "Luyện nghe tiếng Anh với các bài hội thoại, tin tức và podcast đa dạng chủ đề.",
    link: "/skills/speaking",
  },
  {
    icon: <ReadOutlined style={{ fontSize: 28, color: "#5066FF" }} />,
    title: "Kỹ năng Đọc ",
    desc: "Luyện nghe tiếng Anh với các bài hội thoại, tin tức và podcast đa dạng chủ đề.",
    link: "/skills/reading",
  },
  {
    icon: <EditOutlined style={{ fontSize: 28, color: "#5066FF" }} />,
    title: "Kỹ năng Viết ",
    desc: "Luyện nghe tiếng Anh với các bài hội thoại, tin tức và podcast đa dạng chủ đề.",
    link: "/skills/writing",
  },
  {
    icon: <SnippetsOutlined style={{ fontSize: 28, color: "#5066FF" }} />,
    title: "Kỹ năng học từ vựng ",
    desc: "Luyện nghe tiếng Anh với các bài hội thoại, tin tức và podcast đa dạng chủ đề.",
    link: "/flashcard",
  },
  {
    icon: <ProfileOutlined style={{ fontSize: 28, color: "#5066FF" }} />,
    title: "Thi thử ",
    desc: "Luyện nghe tiếng Anh với các bài hội thoại, tin tức và podcast đa dạng chủ đề.",
    link: "/test",
  },
];

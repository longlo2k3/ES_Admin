import { Button, Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

function IntroText() {
  return (
    <>
      <Title style={{ margin: 0 }} level={1}>
        Học tiếng anh cùng ES English
      </Title>
      <Text type="secondary">
        Khóa học tiếng Anh trực tuyến của chúng tôi là sự lựa chọn hoàn hảo cho
        bất kỳ ai muốn cải thiện kỹ năng tiếng Anh của mình. Với sự hỗ trợ của
        ES English, bạn sẽ có thể giúp bản thân thăng tiến trong sự nghiệp, đi
        du lịch, vượt qua các kỳ thi và cuộc thi và nhiều hơn nữa! Học tiếng Anh
        trực tuyến sẽ giúp bạn tự tin hơn và thuận tiện hơn trong giao tiếp với
        người nói tiếng Anh.
      </Text>
      <Button href="/home" style={{ width: 150 }} type="primary">
        Tìm hiểu thêm
      </Button>
    </>
  );
}

export default IntroText;

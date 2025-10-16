import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    count: number;
    progress: number
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Tên chủ đề',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Số lượng câu hỏi',
        dataIndex: 'count',
        key: 'count',
    },

    {
        title: 'Tiến độ',
        dataIndex: 'progress',
        key: 'progress',

    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Cây cối xung quanh',
        count: 32,
        progress: 80
    },
    {
        key: '2',
        name: 'Cây cối xung quanh',
        count: 32,
        progress: 80
    },
    {
        key: '3',
        name: 'Cây cối xung quanh',
        count: 32,
        progress: 80
    },
];

const TopicList: React.FC = () => {

    const handleRowClick = (record: DataType) => {
        console.log("Bạn vừa click vào:", record);
        alert(`Bạn chọn chủ đề: ${record.name}`);
    };
    return (
        <div>
            Chủ đề
            <Table<DataType>
                columns={columns}
                dataSource={data}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                })}
                rowClassName="cursor-pointer"
            />
        </div>

    )

};

export default TopicList;
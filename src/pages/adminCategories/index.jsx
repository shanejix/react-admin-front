import React from "react";
import { Table } from "antd";

import "./index.less";
// import LinkBotton from '../../components/linkBotton/';

export default class AdminCategories extends React.Component {
    render() {
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ];
          
          const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];

        return (
            <div className="categores">
                <h2>Middle size table</h2>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    bordered
                />
            </div>
        );
    }
}

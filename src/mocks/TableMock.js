import React from "react";

import Table from "../components/Table/Table";
import {toSimpleDataDTO} from '../helpers/componentHelpers'

const TableMock = (props) => {

    const headerId1 = 'test1';
    const headerId2 = 'test2';
    const headerId3 = 'test3';

    const data = {
        headers: [
            {id: headerId1, name: 'header 1'},
            {id: headerId2, name: 'header 2'},
            {id: headerId3, name: 'header 3'},
        ],
        rows: [
            {
                [headerId1]: toSimpleDataDTO(1, 'r1'),
                [headerId2]: toSimpleDataDTO(2, 'r2'),
                [headerId3]: toSimpleDataDTO(3, 'r3')
            },
            {
                [headerId1]: toSimpleDataDTO('test1', 'test1'),
                [headerId2]: toSimpleDataDTO('test2', 'test2'),
                [headerId3]: toSimpleDataDTO('test3', 'test3')
            },
            {
                [headerId1]: toSimpleDataDTO('xd', 'xd'),
                [headerId2]: toSimpleDataDTO('xh', 'xh'),
                [headerId3]: toSimpleDataDTO('xc', 'xc')
            },
        ]
    };

    return <Table data={data}/>

};

export default TableMock;

import React from 'react';
import PropTypes from 'prop-types';

import './css/Table.css';

const TableCell = (props) => {

    const {value, isHeader} = props;

    const renderCell = () => {
        if (isHeader) {
            return (
                <th className="table__cell--header">
                    {value}
                </th>
            );
        }
        return (
            <td className="table__cell">
                {value}
            </td>
        );
    };

    return renderCell();

};

TableCell.propTypes = {
    isHeader: PropTypes.bool,
    value: PropTypes.string
};

export default TableCell;

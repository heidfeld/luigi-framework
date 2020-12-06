import React from 'react';
import PropTypes from 'prop-types';

const TableCell = (props) => {

    const {value, isHeader} = props;

    const renderCell = () => {
        if (isHeader) {
            return (
                <th>
                    {value}
                </th>
            );
        }
        return (
            <td>
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

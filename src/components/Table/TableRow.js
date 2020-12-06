import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
import {getReadableValue} from '../../helpers/componentHelpers';

const TableRow = (props) => {

    const {isHeader, headers, row} = props;

    const renderCells = () => {
        return headers.map((header) => {
            const {id} = header;
            const value = getReadableValue(row[id]);
            return (
                <TableCell value={value} isHeader={isHeader}/>
            );
        });
    };

    const renderRow = () => {
        return (
            <tr>
                {renderCells()}
            </tr>
        );
    };

    return renderRow();

}

TableRow.propTypes = {
    isHeader: PropTypes.bool,
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        })
    ).isRequired,
    row: PropTypes.shape({
        value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
        readableValue: PropTypes.string
    }).isRequired
};

export default TableRow;
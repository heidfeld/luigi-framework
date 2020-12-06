import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';
import { toSimpleDataDTO } from '../../helpers/componentHelpers';

const Table = (props) => {

    const {data} = props;

    const {headers = [], rows = []} = data;

    const renderHeader = () => {
        const headersRow = headers.reduce((acc, header) => {
            const {id, name} = header;
            return {
                ...acc,
                [id]: toSimpleDataDTO(id, name)
            };
        }, {});
        return (
            <thead>
                <TableRow isHeader={true} headers={headers} row={headersRow}/>
            </thead>
        
        );
    };

    const renderRows = (rows) => {
        const allRows = rows.map((row) => {
            return (
                <TableRow isHeader={false} headers={headers} row={row}/>
            );
        });
        return (
            <tbody>
                {allRows}
            </tbody>
        );
    };

    return (
        <table>
            {renderHeader(headers)}
            {renderRows(rows)}
        </table>
    );

};

Table.propTypes = {
    data: PropTypes.shape({
        headers: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string
            })
        ),
        rows: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
                readableValue: PropTypes.string
            })
        )
    }).isRequired
};

export default Table;
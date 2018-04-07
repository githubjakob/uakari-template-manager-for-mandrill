import { Grid, Input, Select } from 'react-spreadsheet-grid'
import React from 'react'

const rows=[
    { id: '1', name: 'John Doe', positionId: 'position1', managerId: 'manager1' },
    // and so on...
];

class TextStrings extends React.Component {

    constructor(props) {
        super(props);

        // Rows are stored in the state.
        this.state = {
            rows,
            columns: this.initColumns()
        };
    }

    // A callback called every time a value changed.
    // Every time it save a new value to the state.
    onFieldChange(rowId, field, value) {
        rows[rowId-1][field] = value;

        this.setState({
            rows: [].concat(rows),
            // Blurring focus from the current cell is necessary for a correct behavior of the Grid.
            blurCurrentFocus: true
        });
    }

    initColumns() {
        return [
            {
                title: () => 'Name',
                value: (row, { focus }) => {

                    // You can use the built-in Input.
                    return (
                        <Input
                            value={row.name}
                            focus={focus}
                            onChange={this.onFieldChange.bind(this, row.id, 'name')}
                        />
                    );
                }
            }, {
                title: () => 'positionId',
                value: (row, { focus }) => {

                    // You can use the built-in Input.
                    return (
                        <Input
                            value={row.positionId}
                            focus={focus}
                            onChange={this.onFieldChange.bind(this, row.id, 'positionId')}
                        />
                    );
                }
            },

        ]
    }

    render() {
        return (
            <Grid
                columns={this.state.columns}
                rows={this.state.rows}
                getRowKey={row => row.id}

                // Don't forget to blur focused cell after a value has been changed.
                blurCurrentFocus={this.state.blurCurrentFocus}
            />
        )
    }
}

export default TextStrings
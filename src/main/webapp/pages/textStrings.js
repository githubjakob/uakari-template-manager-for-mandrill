import { Grid, Input, Select } from 'react-spreadsheet-grid'
import React from 'react'
import TextStringsStore from '../stores/textStringsStore'
import dispatcher from '../dispatcher/dispatcher'

class TextStrings extends React.Component {

    constructor(props) {
        super(props);

        // Rows are stored in the state.
        this.state = {
            rows: TextStringsStore.getAllTextStrings(),
            columns: this.initColumns()
        };
    }

    componentDidMount() {
        TextStringsStore.addListener("change", () => {
            console.log("change")
            this.setState({
                rows: TextStringsStore.getAllTextStrings(),
                // Blurring focus from the current cell is necessary for a correct behavior of the Grid.
                blurCurrentFocus: true
            })
        })
    }

    // A callback called every time a value changed.
    // Every time it save a new value to the state.
    onFieldChange(rowId, field, value) {
        dispatcher.dispatch({
            type: "FIELD_CHANGE",
            data: {
                rowId: rowId,
                field: field,
                value: value
            }
        })
    }

    initColumns() {
        console.log("init col")
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
                title: () => 'String',
                value: (row, { focus }) => {

                    // You can use the built-in Input.
                    return (
                        <Input
                            value={row.string}
                            focus={focus}
                            onChange={this.onFieldChange.bind(this, row.id, 'string')}
                        />
                    );
                }
            },

        ]
    }

    addRow() {
        dispatcher.dispatch({
            type: "ADD_ROW"
        })
    }

    render() {
        return (
            <div>
                <Grid
                    columns={this.state.columns}
                    rows={this.state.rows}
                    getRowKey={row => row.id}
                    
                    // Don't forget to blur focused cell after a value has been changed.
                    blurCurrentFocus={this.state.blurCurrentFocus}
                />
                <button onClick={this.addRow.bind(this)}>New Row</button>
            </div>


        )
    }
}

export default TextStrings
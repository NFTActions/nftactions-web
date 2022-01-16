import {Table} from "react-bulma-components";
import React from "react";

const data = {
    header: ['Name',
        'Number of Sales in the Past Hour',
        'Total Sales Amount in the Past Hour (USD)'],
    rows: [
        ['Bored Apt Yacht Club', '123', '$123,456,789.13'],
        ['Cryptokitties', '3', '$2.23'],
    ]
}

const renderHTML = (rawHTML) =>
    React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });


const NFTTable = ({ tableData }) => {
    // console.log(JSON.stringify(tableData));
    let colNames = tableData.columns;
    let rows = tableData.rows;
    console.log(rows);
    console.log(JSON.stringify(tableData.columns));

    return (
        <div>
            <Table hoverable={true} striped={true}>
                <tbody>
                {rows.map((row, index) => {
                    return <tr key={index}>
                        {row.map((col, index) => {
                            return <td key={index}>{col}</td>
                        })}
                    </tr>
                })}
                </tbody>
                <thead>
                    <tr>
                        {colNames.map((item, index) => {
                            return <th key={index}>{renderHTML(item)}</th>
                        })}
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

export default NFTTable;

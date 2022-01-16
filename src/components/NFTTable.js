import {Table} from "react-bulma-components";

const data = {
    header: ['Name',
        'Number of Sales in the Past Hour',
        'Total Sales Amount in the Past Hour (USD)'],
    rows: [
        ['Bored Apt Yacht Club', '123', '$123,456,789.13'],
        ['Cryptokitties', '3', '$2.23'],
    ]
}

const NFTTable = () => {
    return (
        <div>
            <Table hoverable={true} striped={true}>
                <tbody>
                {data.rows.map((row, index) => {
                    return <tr key={index}>
                        {row.map((col, index) => {
                            return <td key={index}>{col}</td>
                        })}
                    </tr>
                })}
                </tbody>
                <thead>
                    <tr>
                        {data.header.map((item, index) => {
                            return <th key={index}>{item}</th>
                        })}
                    </tr>
                </thead>

                {/*<tfoot>*/}
                {/*    <tr>*/}
                {/*        {data.header.map((item, index) => {*/}
                {/*            return <th key={index}>{item}</th>*/}
                {/*        })}*/}
                {/*    </tr>*/}
                {/*</tfoot>*/}
            </Table>
        </div>
    )
}

export default NFTTable;

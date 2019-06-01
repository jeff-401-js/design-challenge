import React from 'react';

import './table.scss';

// Default Data Shape / Contract
const defaultData = {
  header: ['Heading 3', 'Heading 2', 'Heading 3', 'Heading 4'],
  rows: [
    ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
    ['Data 5', 'Data 6', 'Data 7', 'Data 8'],
    ['Data 9', 'Data 10', 'Data 11', 'Data 12'],
  ],
  footer: ['Footer 1', 'Footer 2', 'Footer 3', 'Footer 4'],
};

const Table = props => {
  const data = props.data || defaultData;
  return (
    <table className={props.type}>
      <thead>
        <tr>
          {data.header &&
            data.header.map((title, i) => <th key={i}>{title}</th>)}
        </tr>
      </thead>

      <tbody>
        {data.rows &&
          data.rows.map((row, i) => (
            <tr>
              {row.map((content, j) => (
                <td key={j}>{content}</td>
              ))}
            </tr>
          ))}
      </tbody>

      <tfoot>
        <tr>
          {data.footer &&
            data.footer.map((title, i) => <th key={i}>{title}</th>)}
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;

Table.defaultProps = {
  data: {
    header: ['Heading 3', 'Heading 2', 'Heading 3', 'Heading 4'],
    rows: [
      ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
      ['Data 5', 'Data 6', 'Data 7', 'Data 8'],
      ['Data 9', 'Data 10', 'Data 11', 'Data 12'],
    ],
    footer: ['Footer 1', 'Footer 2', 'Footer 3', 'Footer 4'],
  },
};

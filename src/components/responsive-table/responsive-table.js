import React from 'react';

import './responsive-table.scss';

// https://css-tricks.com/accessible-simple-responsive-tables/

const ResponsiveTable = props => {
  const data = props.data;
  return (
    <section className={props.stack}>
      {data.map((content, i) => (
        <div key={i}>
          <header>{content.heading}</header>
          {content.records &&
            content.records.map((record, j) => <div key={j}>{record}</div>)}
          <footer>{content.footer}</footer>
        </div>
      ))}
    </section>
  );
};

export default ResponsiveTable;

ResponsiveTable.defaultProps = {
  data: [
    {
      heading: 'Heading 1',
      records: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
      footer: 'Footer 1',
    },
    {
      heading: 'Heading 2',
      records: ['Data 5', 'Data 6', 'Data 7', 'Data 8'],
      footer: 'Footer 2',
    },
    {
      heading: 'Heading 3',
      records: ['Data 9', 'Data 10', 'Data 11', 'Data 12'],
      footer: 'Footer 3',
    },
  ],
};

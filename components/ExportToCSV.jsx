import {CSVLink, CSVDownload} from 'react-csv';

const csvData =[
  ['Ingredient', 'Amount'],
  ['Chimken', '10lbs' ] ,
  ['Steak', '10lbs' ]
];
<><CSVLink data={csvData}>Download CSV</CSVLink>
    // or
    <CSVDownload data={csvData} target="_blank" /></>

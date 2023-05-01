import {CSVLink, CSVDownload} from 'react-csv';
import ShoppingList from './ShoppingList';
const headers = [
  { label: "Name", key: "name" },
  { label: "Amount", key: "amount" },
  { label: "Metric", key: "metric" }
];
const csvReport = {
  data: data,
  headers: headers,
  filename: 'Shopping_List.csv'
};
<> 
<csvlink {...csvreport}>Export to CSV</csvlink>
  </>
export default ExportToCSV;
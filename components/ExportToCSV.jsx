import {CSVLink, CSVDownload} from 'react-csv';
import ReactTable from "react-table";
import ShoppingList from './ShoppingList';

//Code was heavily inspired from https://stackoverflow.com/questions/48760815/export-to-csv-button-in-react-table
//usede a different format to place the data.

//const data = [
//put data here, need to dynamically import data from the shopping list
//]
const columns = [
  {
    Header: "Name",
    accessor: "Name", //need this 2 more times, accessor is the way you'll get it
  },
  {
    Header: "Amount",
    accessor: "Amount",
  },
  {
    Header: "Metric",
    accessor: "Metric",
  }
];

class AllPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
    this.state = {
      tableproperties: {
        allData: [
          { Name: "Chicken", Amount: "12", Metric: "oz" },
          { Name: "Salt", Amount: "5", Metric:"tbsp" }, //dummy data, need dynamic data, use a map??
          { Name: "Extra Virgin Olive oil", Amount: "9",Metric: "oz" },
          { Name: "Pepper ", Amount: "21", Metric: "tbsp" },
        ],
      },
      dataToDownload: [],
    };
  }
  

  download(event) {
    const currentShoppingList = this.reactTable.getResolvedState().sortedData; //pushes 
    var data_to_download = [];
    for (var index = 0; index < currentShoppingList.length; index++) {
      let list_to_download = {};
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        list_to_download[columns[colIndex].Header] =
        currentShoppingList[index][columns[colIndex].accessor];
      }
      data_to_download.push(list_to_download);
    }
    this.setState({ dataToDownload: data_to_download }, () => {
      // click the CSVLink component to trigger the CSV download
      this.csvLink.link.click();
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.download}>Download</button>
        </div>
        <div>
          <CSVLink
            data={this.state.dataToDownload}
            filename="Shopping_list.csv"
            className="hidden"
            ref={(r) => (this.csvLink = r)}
            target="_blank"
          />
        </div>
        <div>
          <ReactTable
            ref={(r) => (this.reactTable = r)}
            data={this.state.tableproperties.allData}
            columns={columns}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id])
                .toLowerCase()
                .includes(filter.value.toLowerCase())
            }
          />
        </div>
      </div>
    );
  }
}

export default ExportToCSV;
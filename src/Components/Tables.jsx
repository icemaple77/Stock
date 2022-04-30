import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

function Tables(props) {
  const navigate = useNavigate();
  return (
    <div className={"ag-theme-balham " + props.style}>
      <AgGridReact
        columnDefs={props.columns}
        rowData={props.rows}
        pagination={true}
        paginationPageSize={25}
        rowSelection="Single"
        onRowClicked={(e) =>
          props.clickable
            ? navigate(`/history/${props.rows[e.rowIndex].symbol}`, {
                state: { name: props.rows[e.rowIndex].symbol },
              })
            : ""
        }
      />
    </div>
  );
}

export default Tables;

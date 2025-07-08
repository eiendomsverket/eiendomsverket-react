import * as React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {useReports} from '@/app/utils/ReportsContext';


export default function CustomizedDataGrid() {
  const { reports, loading } = useReports();
  const [rows, setRows] = React.useState<never[]>([]);
  const [columns, setColumns] = React.useState<GridColDef[]>([]);

  React.useEffect(() => {
    if (!reports || reports.length === 0) {
      setRows([]);
      setColumns([]);
      return;
    }
    const mappedRows = reports.map((report) => ({
      id: report.id,
      ordered: report.ordered,
      lastUpdated: report.lastUpdated,
      completed: report.completed,
      takstCompany: report.takstCompany?.name,
      responsible: report.responsibleTakstUser?.firstName + ' ' + report.responsibleTakstUser?.surname,
      orderedBy: report.orderedByUser?.firstName + ' ' + report.orderedByUser?.surname
    }));
    setRows(mappedRows);
    const firstRow = mappedRows[0];
    const column: GridColDef[] = firstRow ? Object.keys(firstRow).map((key) => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      flex: 1,
      minWidth: 100,
    })) : [];
    setColumns(column);
  }, [reports]);

  return (
      <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          loading={loading}
          getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
          initialState={{
            pagination: {paginationModel: {pageSize: 20}},
          }}
          pageSizeOptions={[10, 20, 50]}
          disableColumnResize
          density="compact"
          slotProps={{
            filterPanel: {
              filterFormProps: {
                logicOperatorInputProps: {
                  variant: 'outlined',
                  size: 'small',
                },
                columnInputProps: {
                  variant: 'outlined',
                  size: 'small',
                  sx: {mt: 'auto'},
                },
                operatorInputProps: {
                  variant: 'outlined',
                  size: 'small',
                  sx: {mt: 'auto'},
                },
                valueInputProps: {
                  InputComponentProps: {
                    variant: 'outlined',
                    size: 'small',
                  },
                },
              },
            },
          }}
      />
  );
}

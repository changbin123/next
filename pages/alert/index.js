import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AlertEditDialog from '../../components/AlertEdit';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
function createData(
    name,
    ID,
    alertStandard,
    trend,
    time,
    creater,
    type,
    operate,
) {
    return {
        name,
        id: ID,
        alertStandard,
        trend,
        time: '2023/07/06 23:40:09',
        creater,
        type,
        operate,
    };
}

const rows = [
    createData('Frozen yoghurt', 1, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt1', 2, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt2', 3, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt', 4, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt', 5, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt', 6, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt', 7, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt', 8, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),
    createData('Frozen yoghurt', 9, '中', '降低', '2023/11/2', 'laozhang', true, 'caozuo'),

];


function Alert() {
    const router = useRouter();
    const [newRows, setRows] = React.useState(rows);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(newRows[0]);

    const columns = [
        {
            field: 'name', headerName: '名称', width: 200, renderCell: (params) => {
                return (
                    <>
                        <Button variant="text" color="primary" onClick={() => handleDetails(params.row)}>
                            {params.row.name}
                        </Button>
                    </>
                );
            },
        },
        {
            field: 'id',
            headerName: 'ID',
            width: 150
        },
        {
            field: 'alertStandard',
            headerName: '预警标准',
            width: 150

        },
        {
            field: 'trend',
            headerName: '趋势',
            width: 150,
            renderCell: (params) => (
                <ArrowDropDownIcon
                    color="success"
                    style={{ cursor: 'pointer' }}
                />
            ),
        },
        {
            field: 'time',
            headerName: '最近告警时间',
            width: 200

        },
        {
            field: 'creater',
            headerName: '创建⼈',
            width: 200

        }, {
            field: 'type',
            headerName: '状态',
            width: 150,
            renderCell: (params) => {
                return <Switch checked={params.row.type} onChange={() => handleTypeChange(params.row)} />
            }
            ,
        }, {
            field: 'opera',
            headerName: '操作',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Button variant="text" color="primary" onClick={() => handleOpenDialog(params.row)}>
                            编辑
                        </Button>
                        <Button variant="text" color="error" onClick={() => handleDelete(params.row)}>
                            删除
                        </Button>
                    </>
                );
            },
        },
    ];
    function handleDetails(row) {
        router.push({
            pathname: 'alert/details',
            query: { rowData: JSON.stringify(row) },
        });
    }
    function handleTypeChange(row) {
        const _newRows = newRows.map((_row) => {
            if (_row.id === row.id) {
                _row.type = !row.type;
                return _row;
            } else {
                return _row;
            }
        });
        setRows(_newRows)

    }
    function handleDelete(row) {
        const _newRows = newRows.filter((_row) => _row.id !== row.id);
        setRows(_newRows)
    }
    const handleOpenDialog = (value) => {
        setOpenDialog(true);
        setSelectedValue(value);
      };
    const handleCloseDialog = () => {
        setOpenDialog(false);
      };
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={newRows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
            <AlertEditDialog
                selectedValue={selectedValue}
                open={openDialog}
                onClose={handleCloseDialog}>
            </AlertEditDialog>
        </ThemeProvider>
    );
}

export default Alert;

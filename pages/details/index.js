import * as React from 'react';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useRouter } from 'next/router';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import * as ECharts from "echarts";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
function createData(
    id,
    appealTime,
    Title,
    address,
    category,
    name,
) {
    return {
        id,
        appealTime,
        Title,
        address,
        category,
        name,
    };
}

const rows = [
    createData( 1, '2023/11/2', '求助', '之海小区', '已处置',  '王**'),
    createData( 2, '2023/11/2', '求助', '之海小区', '已处置',  '张**'),
    createData( 3, '2023/11/2', '求助', '之海小区', '已处置', '吴**'),
    createData(4, '2023/11/2', '报警', '之海小区', '已处置', '孙**'),
    createData( 5, '2023/11/2', '报警', '之海小区', '已处置', '钱**'),
    createData(6, '2023/11/2', '报警', '安置小区', '处置中', '张**'),
    createData( 7, '2023/11/2', '纠纷', '安置小区', '处置中', '找**'),
    createData( 8, '2023/11/2', '纠纷', '安置小区', '处置中', '张**'),
    createData( 9, '2023/11/2', '纠纷', '安置小区', '处置中', '李**'),

];
function Details() {
    const router = useRouter();
    const { pathname, query } = router;
    const row = JSON.parse(query.rowData)
    const [name, setName] = useState(row.name);
    const [id, setId] = useState(row.id);
    const [alertStandard, setAlertStandard] = useState(row.alertStandard);
    const [threshold, setThreshold] = useState(true);
    const [send, setSend] = useState(true);
    const handleThreshold = (event) => {
        setThreshold(event.target.value);
    };
    const handleSend = (event) => {
        handleSend(event.target.value)
    };
    const initChart = () => {
        let element = document.getElementById('chart1');
        let myChart = ECharts.init(element);
        myChart.clear()
        let option;
        let base = +new Date(1968, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let date = [];
        let data = [Math.floor(Math.random() * 10)];
        for (let i = 1; i < 30; i++) {
            var now = new Date((base += oneDay));
            date.push([now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.floor(Math.random() * 10));
        }
        option = {
            grid: {
                left: '2%', // 调整左侧留白空间
                right: '5%', // 调整右侧留白空间
                bottom: '10%',
                containLabel: true,
            },
            textStyle: {
                fontSize: 20,
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 10
                },

            ],
            tooltip: {
                trigger: 'axis'
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                name: '预警时间段',
                nameLocation: 'middle',
                axisLabel: {
                    textStyle: {
                        fontSize: 20,
                    },
                },
                nameGap: 30,
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                name: '出现次数',
                axisLabel: {
                    textStyle: {
                        fontSize: 20,
                    },
                },
            },
            series: [
                {
                    name: 'Highest',
                    type: 'line',
                    data: data,
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Avg' }]
                    }
                },
            ]
        };
        option && myChart.setOption(option);
    }

    useEffect(() => {
        initChart()
    }, [])
    const [newRows, setRows] = React.useState(rows);
    const columns = [
        {
            field: 'id',
            headerName: '事件ID',
            width: 150
        },
        {
            field: 'appealTime',
            headerName: '诉求时间',
            width: 200

        },
        {
            field: 'Title',
            headerName: '标题',
            width: 200,

        },
        {
            field: 'address',
            headerName: '发生地点',
            width: 200

        },
        {
            field: 'category',
            headerName: '类别',
            width: 200
        },
        {
            field: 'name',
            headerName: '诉求人姓名',
            width: 200
        }
    ];
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div style={{ backgroundColor: '#3A3A3A', marginBottom: '4rem' }}>
                <FormControl>
                    {/* <InputLabel htmlFor="my-input">任务名称</InputLabel> */}
                    <div style={{ display: 'flex', marginBottom: 5 }}>
                        <FormLabel sx={[
                            {
                                flexBasis: '100px',
                                alignSelf: 'center',
                            },
                        ]}>任务名称</FormLabel>
                        <FormControlLabel
                            control={<TextField disabled={true} id="outlined-basic" label={pathname === '/details' ? name : "任务名称"} variant="outlined" />
                            }
                        />
                    </div>
                    <div style={{ display: 'flex', marginBottom: 5 }}>
                        <FormLabel sx={[
                            {
                                minWidth: '100px',
                                alignSelf: 'center',
                            },
                        ]}>编号</FormLabel>
                        <FormControlLabel
                            control={<TextField disabled={true} id="outlined-basic" label={pathname === '/details' ? id : "编号"} variant="outlined" />
                            }
                        />

                    </div>
                    <div style={{ display: 'flex', marginBottom: 5 }}>
                        <FormLabel sx={[
                            {
                                minWidth: '100px',
                                alignSelf: 'center',
                            },
                        ]}>预警对象</FormLabel>
                        <FormControlLabel
                            control={<TextField disabled={true} id="outlined-basic" label="小区" variant="outlined" />}
                        />
                        <FormControlLabel

                            control={<TextField disabled={true} id="outlined-basic" label="出现次数" variant="outlined" />}
                        />


                    </div>
                    <div style={{ display: 'flex', marginBottom: 5 }}>
                        <FormLabel sx={[
                            {
                                minWidth: '100px',
                                alignSelf: 'center',
                            },
                        ]}>计算周期</FormLabel>
                        <FormControlLabel
                            control={<TextField disabled={true} id="outlined-basic" label="计算周期" variant="outlined" />
                            }
                        />

                    </div>
                    <div style={{ display: 'flex', marginBottom: 5 }}>
                        <FormLabel sx={[
                            {
                                minWidth: '100px',
                                alignSelf: 'center',
                            },
                        ]}>预警标准</FormLabel>
                        <FormControlLabel
                            control={<Select
                                disabled={true}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={threshold}
                                onChange={handleThreshold}
                            >
                                <MenuItem value={true}>大于</MenuItem>
                                <MenuItem value={false}>小于</MenuItem>
                            </Select>}
                        />
                        <FormControlLabel
                            control={<TextField disabled={true} id="outlined-basic" label="次数" variant="outlined" />
                            }
                        />

                    </div>
                    <div style={{ display: 'flex', marginBottom: 5 }}>
                        <FormLabel sx={[
                            {
                                flexBasis: '100px',
                                alignSelf: 'center',
                            },
                        ]}>发送设置</FormLabel>
                        <FormControlLabel
                            control={<Select
                                disabled={true}
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={send}
                                onChange={handleSend}
                            >
                                <MenuItem value={true}>邮件</MenuItem>
                                <MenuItem value={false}>短信</MenuItem>
                            </Select>}
                        />

                    </div>
                </FormControl>
            </div>
            <Typography variant="h3">
                预警图表
            </Typography>
            <div style={{ backgroundColor: '#3A3A3A' }}>

                <div id='chart1' style={{ width: '100%', height: '400px' }}></div>
                <div style={{ width: '100%' }}>
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
                </div>

            </div>


        </ThemeProvider >


    );
}
export default Details
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useRouter } from 'next/router';
import FormControlLabel from '@mui/material/FormControlLabel';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
function Edit() {

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
    const handleSubmit = (event) => {
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
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
                        control={<TextField disabled={pathname === '/alert/edit'} id="outlined-basic" label={pathname === '/alert/edit' ? name : "任务名称"} variant="outlined" />
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
                        control={<TextField disabled={pathname === '/alert/edit'} id="outlined-basic" label={pathname === '/alert/edit' ? id : "编号"} variant="outlined" />
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
                        control={<TextField id="outlined-basic" label="小区" variant="outlined" />}
                    />
                    <FormControlLabel

                        control={<TextField id="outlined-basic" label="出现次数" variant="outlined" />}
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
                        control={<TextField id="outlined-basic" label="计算周期" variant="outlined" />
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
                        control={<TextField id="outlined-basic" label="次数" variant="outlined" />
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
                <div style={{ display: 'flex', marginBottom: 5 }}>
                    <FormLabel sx={[
                        {
                            flexBasis: '100px',
                            alignSelf: 'center',
                        },
                    ]}></FormLabel>
                    <FormControlLabel
                        control={<Button variant="outlined" onClick={() => {
                            handleSubmit()
                        }}>保存</Button>
                        }
                    />

                </div>
            </FormControl>
        </ThemeProvider>


    );
}
export default Edit
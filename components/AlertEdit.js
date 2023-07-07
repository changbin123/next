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
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
function AlertEditDialog(props) {
    const { onClose, open, selectedValue } = props;
    const [name, setName] = useState(selectedValue.name);
    const [id, setId] = useState(selectedValue.id);
    const [alertStandard, setAlertStandard] = useState(selectedValue.alertStandard);
    const [threshold, setThreshold] = useState(true);
    const [send, setSend] = useState(true);
    const handleThreshold = (event) => {
        setThreshold(event.target.value);
    };
    const handleSend = (event) => {
        handleSend(event.target.value)
    };
    const handleSubmit = (event) => {
        onClose();
    };
    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>预警编辑</DialogTitle>
            <DialogContent>
                <div style={{ display: 'flex', marginBottom: 5 }}>
                    <FormLabel sx={[
                        {
                            flexBasis: '100px',
                            alignSelf: 'center',
                        },
                    ]}>任务名称</FormLabel>
                    <FormControlLabel
                        control={<TextField disabled id="outlined-basic" label={name} variant="outlined" />
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
                        control={<TextField disabled id="outlined-basic" label={id} variant="outlined" />
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>取消</Button>
                <Button onClick={handleSubmit}>保存</Button>
            </DialogActions>
        </Dialog>


    );
}
export default AlertEditDialog
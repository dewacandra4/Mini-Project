import { AppBar, useTheme } from 'react-admin';
import { Box } from '@mui/material';

import logoDark from '/logoDark.png';
import logo from '/logo.png';

export const CustomAppBar = () =>{ 
    const [theme] = useTheme();

    return (
    <AppBar userMenu={true}>
        {theme === 'dark' ? <img src={logoDark} alt="logoDark" width={100} /> : <img src={logo} alt="logo" width={100} />}
        <Box component="span" flex={1} />   
    </AppBar>
);
}

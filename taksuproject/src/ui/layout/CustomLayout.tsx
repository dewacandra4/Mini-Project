// in src/MyLayout.js
import { Layout, LayoutProps, useGetResourceLabel, useResourceContext } from 'react-admin';
import { CustomAppBar } from '../appbar/CustomAppBar';
import { CustomMenu } from '../menu/CustomMenu';
import { Breadcrumbs, Link } from '@mui/material';


export const CustomLayout = (props: LayoutProps) => 
{
    return (
        <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} >

        </Layout>
    )
}


import { Menu, MenuProps } from "react-admin";



export const CustomMenu = (props: MenuProps) => {
    return  <Menu {...props}  >
        <Menu.ResourceItem name="employee" />
        <Menu.ResourceItem name="assets" />

    </Menu>;
}

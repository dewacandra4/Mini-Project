
import {
    List,
    Datagrid,
    TextField,
    ChipField,
    EditButton,
    DeleteWithConfirmButton,
    TopToolbar,
    CreateButton,
    ExportButton,
    TextInput,
} from 'react-admin';

const ListActions = () => (
    <TopToolbar>
        <CreateButton label='Add new employee' resource="employee"/>
        <ExportButton/>
    </TopToolbar>
);


const postFilters = [
    <TextInput key= "q" label="Search" source="q"  alwaysOn={true}/>,
];

export const EmployeeList = () => 
    <List actions={<ListActions />} filters={postFilters}>
        <Datagrid rowClick="show" >
            <TextField source="id" label ="ID"/>
            <TextField source="name" />
            <ChipField source="email" label="Email" />
            <TextField source="position" />
            <EditButton />
            <DeleteWithConfirmButton confirmTitle="Delete" confirmContent="Are you sure you want to delete this item?" />
        </Datagrid>
    </List>



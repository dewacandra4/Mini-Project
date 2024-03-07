
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteWithConfirmButton,
    TopToolbar,
    CreateButton,
    ExportButton,
    ImageField,
    TextInput,
} from 'react-admin';

const ListActions = () => (
    <TopToolbar sx={{ mt: 1 }}>
        <CreateButton label='Add new assets' resource="assets"/>
        <ExportButton/>
    </TopToolbar>
);


const postFilters = [
    <TextInput key= "q" label="Search" source="q"  alwaysOn={true}/>,
];


export const AssetsList = () => 
     (
    <List actions={<ListActions />} filters={postFilters}>
        <Datagrid >
            <TextField source="id" label ="ID" />
            <TextField source="name" />
            <ImageField source="image.src" label="Picture"  />
            <EditButton />
            <DeleteWithConfirmButton confirmTitle="Delete" confirmContent="Are you sure you want to delete this item?" />
        </Datagrid>
    </List>
);


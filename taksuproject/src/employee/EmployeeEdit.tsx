import { Edit, ImageField, ImageInput, SimpleForm, TextInput, required } from "react-admin";

export const EmployeeEdit = () => (
    <Edit title='Edit an Employee' >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]} fullWidth />
            <TextInput source="email" validate={[required()]} fullWidth />
            <TextInput source="position" validate={[required()]} fullWidth />
            <ImageInput source="image" label="Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
)
import {
    Create,
    ImageField,
    ImageInput,
    SimpleForm,
    TextInput,
    email,
    required
} from 'react-admin';

export const EmployeeCreate = () => {

    return  (
    <Create title={'Add new employee'} redirect="list">
        <SimpleForm >
            <TextInput source="name" validate={[required()]} fullWidth />
            <TextInput source="email" validate={[required(), email()]} fullWidth />
            <TextInput source="position" validate={[required()]} fullWidth />
            <ImageInput source="image" label="Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
    )
}

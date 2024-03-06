import {
    Create,
    ImageField,
    ImageInput,
    SimpleForm,
    TextInput,
    required
} from 'react-admin';

export const AssetsCreate = () => {

    return  (
    <Create title={'Add new Assets'} redirect="list">
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth />
            <ImageInput source="image" label="Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
    )
}

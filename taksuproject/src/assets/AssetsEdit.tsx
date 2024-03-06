import { Edit, ImageField, ImageInput, SimpleForm, TextInput, required } from "react-admin";

export const AssetsEdit = () => (
    <Edit title='Edit an Assets' >
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]} fullWidth />
            <ImageInput source="image" label="Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
)

import { AutocompleteInput, Create, ReferenceInput, SelectInput, SimpleForm, required } from "react-admin"
import { useLocation } from 'react-router-dom';

const AssetEmployeeCreate = () => {

    const location = useLocation();
    const employee_id = location.state?.employee_id;





    // set the employee selected
    const selectedEmployee = employee_id ;
    const transform = (data = {}) => ({ ...data, created_at: new Date() });

    return (
        <Create title="Add new asset-employee" transform={transform} redirect={() => `employee/${selectedEmployee}/show/assets`}>
            <SimpleForm>
                <ReferenceInput source="employee_id" reference="employee">
                    <SelectInput optionText="name" validate={[required()]} fullWidth defaultValue={selectedEmployee} disabled />
                </ReferenceInput>
                <ReferenceInput source="asset_id" reference="assets" perPage={10}>
                    <AutocompleteInput optionText="name" validate={[required()]} fullWidth />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
}

export default AssetEmployeeCreate;

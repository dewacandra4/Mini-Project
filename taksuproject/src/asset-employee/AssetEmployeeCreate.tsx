
import { Create, SelectInput, SimpleForm, required, useGetList } from "react-admin"
import { useLocation } from 'react-router-dom';

const AssetEmployeeCreate = () => {

    const { data: employees, isLoading : isLoadingEmployee, error: errorEmployee } = useGetList('employee');
    const { data: assets, isLoading : isLoadingAssets, error:errorAssets } = useGetList('employee');
    const location = useLocation();
    const employee_id = location.state?.employee_id;



    if (isLoadingEmployee || isLoadingAssets) return <p>Loading...</p>;
    if (errorEmployee || errorAssets) return <p>Error: {errorEmployee ? errorEmployee.message : errorAssets?.message}</p>;

    // set the employee selected
    const selectedEmployee = employee_id ;
    const transform = (data = {}) => ({ ...data, created_at: new Date() });

    return (
        <Create title="Add new asset-employee" transform={transform} redirect={() => `employee/${selectedEmployee}/show/assets`}>
            <SimpleForm>
                <SelectInput source="employee_id" defaultValue={selectedEmployee} validate={[required()]} fullWidth choices={employees} disabled/>
                <SelectInput source="asset_id" validate={[required()]} fullWidth choices={assets} />
            </SimpleForm>
        </Create>
    );
}

export default AssetEmployeeCreate;

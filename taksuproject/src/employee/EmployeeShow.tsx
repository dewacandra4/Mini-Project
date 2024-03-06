import { Avatar } from "@mui/material"
import { CreateButton, Datagrid, DateField, EditButton, ImageField, ReferenceField, ReferenceManyField, Show, TabbedShowLayout, TextField, useRecordContext } from "react-admin"


const CreateRelatedAssetsButton = () => {
    const record = useRecordContext()

    return (
        <CreateButton
            label="Add assets"
            resource="asset_employee"
            state= {
                {
                    employee_id: record.id
                }
            }
        />
    )
}

const ActionsToolProfile = () => {
    return (
        <div className="mt-10">
        </div>
    )
}
export const EmployeeShow = () => {

    
  return (
    <Show actions={<ActionsToolProfile />}> 
        <TabbedShowLayout >
            <TabbedShowLayout.Tab label="Employee info" path="" >
                <div className="flex flex-row justify-end">
                    <EditButton label="Edit profile"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Avatar sx={{ width: 220, height: 220 }} >
                        <ImageField source="image.src" label="Image" />
                    </Avatar>

                    <TextField source="name" sx={{ mt: 2, fontSize: 35, fontWeight: 'bold' }} />
                    <TextField source="email" sx={{ fontSize: 15 }}/>
                    <TextField source="position" sx={{ mt: 2, fontSize: 20 }} />

                </div>

            {/* <div className="grid grid-cols-2  gap-2">
                    <div className="flex flex-col">
                        <Labeled label="ID">
                            <TextField label="ID" source="id" />
                        </Labeled>
                        <Labeled label="Name">
                            <TextField source="name" />
                        </Labeled>
                        <Labeled label="Position">
                            <TextField source="position" />
                        </Labeled>
                        <Labeled label="Email">
                            <TextField source="email" />
                        </Labeled>

                    </div>

                    <div >
                        <Labeled label="Avatar">
                            <Avatar   sx={{ width: 220, height: 220 }}>
                                <ImageField source="picture.src" label="Image" />
                            </Avatar>
                        </Labeled>
                    </div>
                </div> */}

            </TabbedShowLayout.Tab>
            <TabbedShowLayout.Tab label="Assets" path="assets">
                <div className="flex flex-row justify-end ">
                    <CreateRelatedAssetsButton />
                </div>
                <ReferenceManyField reference="asset_employee" target="employee_id">
                    <Datagrid >
                        <TextField source="id" label="ID"/>
                        <ReferenceField source="asset_id" reference="assets">
                            <TextField source="name" />
                        </ReferenceField>
                        <DateField source="created_at" label="Created at" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}/>
                    </Datagrid>
                </ReferenceManyField>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
  )
}

export default EmployeeShow

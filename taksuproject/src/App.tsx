import {
  Admin,
  Resource,
  radiantDarkTheme,
  radiantLightTheme,
} from "react-admin";
import { authProvider } from "./authProvider";
import AssetIcon from "@mui/icons-material/Book";
import EmployeeIcon from "@mui/icons-material/Person";
import { AssetsEdit } from "./assets/AssetsEdit";
import { AssetsList } from "./assets/AssetsList";
import { AssetsCreate } from "./assets/AssetsCreate";
import "./App.css";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { CustomLayout } from "./ui/layout/CustomLayout";
import EmployeeShow from "./employee/EmployeeShow";
import AssetEmployeeCreate from "./asset-employee/AssetEmployeeCreate";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin  
    dataProvider={dataProvider} 
    authProvider={authProvider} 
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
    layout={CustomLayout}
    >
      <Resource
        icon={ EmployeeIcon }
        name="employee"
        list={ EmployeeList }
        create={EmployeeCreate}
        edit={EmployeeEdit }
        show={EmployeeShow}
        
      />
      <Resource
        name="assets"
        icon={ AssetIcon }
        list={ AssetsList }
        create={AssetsCreate}
        edit={AssetsEdit}
      />
      <Resource
        name="asset_employee" 
        create={AssetEmployeeCreate}

      />
  </Admin>
);

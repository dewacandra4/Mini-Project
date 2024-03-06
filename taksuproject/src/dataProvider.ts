import jsonServerProvider from "ra-data-json-server";
import { DataProvider, withLifecycleCallbacks } from "react-admin";


export const dataProvider = withLifecycleCallbacks (
  jsonServerProvider("http://localhost:5000"),
  [
    {
      resource: "assets",
      beforeCreate: async (params: any, dataProvider: DataProvider) => {
        return  processImageBeforeCreate(params, dataProvider)
      },
      beforeUpdate: async (params: any, dataProvider: DataProvider) => {
        return  processImageBeforeCreate(params, dataProvider)
      },

        beforeDelete: async (params, dataProvider) => {
            // delete all assets related to the employee
            // first, fetch the assets
            const { data: assets } = await dataProvider.getList('asset_employee', {
                filter: { asset_id: params.id },
                pagination: { page: 1, perPage: 1000 },
                sort: { field: 'id', order: 'DESC' },
            });
            // then, delete them
            await dataProvider.deleteMany('asset_employee', { ids: assets.map(asset => asset.id) });

            return params;
        },
    },
    {
      resource: "employee",
      beforeCreate: async (params: any, dataProvider: DataProvider) => {
        return  processImageBeforeCreate(params, dataProvider)
      },
      beforeUpdate: async (params: any, dataProvider: DataProvider) => {
        return  processImageBeforeCreate(params, dataProvider)
      }
    }
  ])


const processImageBeforeCreate = async (params: any, dataProvider: DataProvider) => {
  console.log("beforeUpdate", params, dataProvider);
        
        if (params.data.image && params.data.image.rawFile instanceof File) {
            const base64Image = await convertFileToBase64(params.data.image.rawFile);
    
            const image = {
                src: base64Image,
                title: params.data.image.title,
            };
    
            return {
                ...params,
                data: {
                    ...params.data,
                    image : image,
                }
            };
        } else {
            return params;
        }
}

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 */

const convertFileToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    console.log("convertFileToBase64", file);
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
  });

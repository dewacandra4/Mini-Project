import jsonServerProvider from "ra-data-json-server";
import { DataProvider, withLifecycleCallbacks } from "react-admin";


export const dataProvider = withLifecycleCallbacks (
  jsonServerProvider(import.meta.env.VITE_JSON_SERVER_URL),
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

/**
 * Process the image before creating or updating it.
 *
 * @param {any} params - The parameters for processing the image.
 * @param {DataProvider} dataProvider - The data provider for processing the image.
 * @return {Promise<any>} The processed parameters with the updated image data.
 */
const processImageBeforeCreate = async (params: any, dataProvider: DataProvider) => {
        
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

# TaksuERP Small Project

This is a small project named TaksuERP, which combines a JSON Server and React admin for managing data efficiently.

## Installation

To install the necessary dependencies, run the following command in your terminal:
```bash
npm install
```

## DataProvider

The included data provider use [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server). It fits REST APIs powered by [JSON Server](https://github.com/typicode/json-server), such as [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend.


## Usage
To run the JSON Server and React admin concurrently, navigate to the project directory and execute the following command:

```javascript
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
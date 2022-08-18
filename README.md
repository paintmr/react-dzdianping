Technology used: React, React Router, Redux

The app includes three major functions: display, search, and order. (1) The home page displays products, and a user can be directed to a product detail page by clicking a product picture. (2) The user can be directed to the search result page when she has clicked the search input. (3) When a user has logged in, she can place orders and then be directed to the order page.

There are two component files in the src file: components and containers. The components file contains global UI components like loading, error alerts, header, and footer. The containers file contains container components. Inside each container component file (e.g. Home), there are special UI components.

The Redux structure is the 'ducks' structure. The src/redux file contains the middleware file and the modules file. Each module contains all the relevant actions，action types，reducers，and selectors.

State includes 3 sub-states: entity states(products, shops, orders, and comments), UI states (Is a checkbox checked? input box info, loading status), and general states (whether logged in, error messages). Container components can use UI states and general states directly. Container components use entity states through UI states after some calculation has been done.

Use src/utils/request.js to deal with requests, data responded from the server, and error messages.

Use src/utils/url.js to deal with URLs.

Use src/redux/middleware/api.js as a middleware to handle actions containing the 'FETCH_DATA' mark. This file can avoid redundant code. Many UI components will dispatch similar actions (requestType, successType, failureType) to get data from the server. The file src/redux/middleware/api.js abstract these actions, so different UI components making requests can share this file of code and redundant code can be avoided.

src/components/ErrorToast/index.js is the UI component to display an error. src/redux/modules/app.js contains the state, types, actions, reducer, and selectors for errors. src/containers/App/index.js is the container component for errors that conncect the UI component and the state.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

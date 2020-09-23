# React app scaffolding demo

A step-by-step demo of scaffolding an app using [create-react-app + TypeScript](https://create-react-app.dev/docs/adding-typescript/#installation) + [Material UI](https://material-ui.com/)

## Prerequisistes

Then only dependency is to install the latest [LTS version of NodeJS](https://nodejs.org/en/download/)

## Navigating this demo

There is a branch for each step showing the completed step state. Master reflects the final step state. You can jump between branches to view the completed step or compare branches to see the difference.

## Step 1 - create the app

Generate a scaffolded app using the single [create-react-app](https://create-react-app.dev/) command using the TypeScript template:

```
npx create-react-app my-app --template typescript
```

## Step 2 - add local debugging support for VS Code

Add VS Code launch and attach debug configurations

## Step 3 - install Material UI

Following the [steps here](https://material-ui.com/getting-started/installation/) we add the:

- Material UI library
- Roboto Font
- Font Icons
- SVG Icons

## Step 4 - configure Material UI

Follow the [minimizing bundle size](https://material-ui.com/guides/minimizing-bundle-size/#when-and-how-to-use-tree-shaking) guide. This is an optimisation but is nice to do upfront as standard.

We add:

- babel-plugin-transform-imports
- react-app-rewired
- customize-cra
- some babel config
- a function in `customize-cra` to apply the babel config

## Step 5 - configure VS code auto formatting

Now we are about to write some code:

- add .editorconfig and .prettierrc
- turn on auto format on save (no manual formatting or disagreements required)

## Step 6 - use Material UI

- delete the OOTB CRA styling and HTML
- follow the [Usage page](https://material-ui.com/getting-started/usage/)
  - add the responsive meta tag
  - add [CssBaseline](https://material-ui.com/components/css-baseline/)
  - create and apply the [dark theme](https://material-ui.com/customization/theming/)
  - use [MUI Typography](https://material-ui.com/components/typography/)

## Step 7 - add basic layout

We will start off making the layout more 'mobile first' with a container + maxWidth and menu bar:

- add a responsive [Container](https://material-ui.com/components/container/)
- create a component called MenuBar
- add some styles to the MenuBar component

## Step 8 - add a couple of different 'pages' or 'features' with routing

We will install react-router-dom and add:

- a 'landing' page for the default route '/'
- a 'survey' page for 'survey'
- a button on each one to navigate between

## Step 9 - call a REST API with axios + axios-hooks

We will start off basic:

- npm install axios axios-hooks
- use the useAxios hook to call https://icanhazdadjoke.com/ random joke API
- display the text
- hook up a button to use the refetch function and loading state

Also add some more DX stuff:

- create a list of recommended extensions (eslint, prettier, editorconfig support)
- local settings to tell VS code to use prettier-vscode extension for formatting

## Step 10 - use configuration + handle network events (pending requests, errors)

- No one likes hard coded endpoint addresses, set up a .env file with config
- It's nice to be able to see an indication of network calls in progress, lets add support for app-level network status through axios interceptors
- Create a hook that supports communication from non-react code (axios) to React code via useEffect (and useState)
- Create a NetworkErrorAlert component to show network failures as error messages
- Consider the complexity of this code and alternatives
- Consider alternatives for where to embed 'behaviour' such as asynchronous IO (in presentation components, container components or outside components, e.g. in Redux action creators that can be use anywhere)

## Step 11 - create a 3 page survey using Material UI input components

- Create 3 survey page components to display (Page1, Page2, Page3)
- Add nested routing under /survey to navigate between the page components
- Add some MUI input components to each page

## Step 12 - add state for survey pages and the parent survey component

- Maintain state within each component and use a callback to notify the main survey component when each section is complete

- Consider the amount of boilerplate for 'controlled components'
- Consider the amount of code to write validation manually
- Look at some form validation libraries

## Step 13 - use recoil state to maintain survey data

- Add the recoil library
- Create recoil `atom`s to hold each page's data
- Create a recoil `selector` to represent the combined data across all pages
- Refactor the parent component to `useRecoilState`

# Create React App documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

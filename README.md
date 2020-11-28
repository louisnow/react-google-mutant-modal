# Demo Repo for Google Mutant Error

https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant/-/issues/118

Problem goes away if you downgrade google mutant to 0.10.0

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs dependencies

If you don't have yarn, install it by running `npm i -g yarn`

### `.env`

Copy `example.env` to `.env` at the root of the project and add your google maps API key to ensure google mutant is being used. Will not work without a valid key, falls back to default OSM tile layer.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

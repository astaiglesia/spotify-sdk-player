# React App Quickstart

You never know when inspiration will hit you so get your ideas off the ground FAST with this is ultralight React application boilerplate folder pre-installed dependencies and configurations for :

- React
- Sass
- Parcel
- Prettier 
- Prettier
- ESlint

## Get Started Fast
```
npm install
npm run dev
```

application will spin up on [localhost:1234](http://localhost:1234)



<hr>

## tl; dr 
- Setup Walk Through

Init File Structure
~~~
/root
  /client
      /src
          App.jsx
          index.js
          index.html
      /_helpers
      /assets
          /fonts
          /images
          /styles
              stylesheet.scss
      /components
      /features
      /pages
      package.json
  /server
  .eslintrc.json
  .gitignore
  .prettierrc
  readme.md
~~~



## mkdir ...
create the app directory and folder tree

<hr>

## git init 
initialize git repository


- echo .gitignore
  - restricts source control
```
# dependencies
node_modules
.pnp

# testing
coverage/

# production
build
dist/

#misc
.parcel-cache/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
.DS_Store
.vscode/
```

<hr>

### npm init
Initialize a package.json

### Install Packages
	- prettier -D                 -> code formatting
	- eslint -D                   -> code styling
	- eslint-config-prettier  -D
	- eslint-plugin-import -D
	- eslint-plugin-jsx-a11y -D
	- eslint-plugin-react -D
	- sass -D                      -> stylesheet syntax 
	- parcel -D                    -> bundling 
	- react
	- react-dom
	
	opt:
	- react-redux
	- react-router-dom

	
	
``` 
npm i react react-dom

npm i -D prettier eslint-config-prettier eslint parcel eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks

```

<hr>

### Configure Tools
<hr>


echo >> .prettierrc
```
{}
```

echo >> package.json
```
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx}\"",
  "dev": "parcel src/index.html"
},
```

echo >> .eslintrc.json
```
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

<hr>

### Configure Parcel

babel transpilation via parcel

echo >> package.json
```
"browserslist": [
"last 2 Chrome versions"
]
```

## Populate initial files
<hr>

echo >> stylesheet.scss
- the global markup styling

```
* {
  box-sizing: border-box;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
}

html, body {
  margin: 0px;
  height: 100%;
  background-color: black;
}

#root {
  height: 100%;
}
```

echo >> index.html
- add the following to the head and body to link our html to the main stylesheet 
- include #root element and scripting for hanging and styling our React app
```
<link rel="stylesheet" href="{location of style.css}" >
<div id="root"></div>
<script type="module" src="./index.js"></script>
```
	
echo >> index.js
- our React app entry point
- React Router and Redux store and providers commented out here for quick access

echo >> App.js
-	our parent React component
-	we can define React-Router routes here


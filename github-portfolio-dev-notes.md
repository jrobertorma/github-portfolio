# NOTES
## About create-react-app

I've been using create-react-app since my first steps with react. But never actually realized the things you need to run a react app when setting yourself the environment, such as configuring webpack and babel.

So in a few words, 'create-react-app' creates a basic setup like the one used in the 'MovieList App' but with only one comand.

Better written articles you can read about this: 
* [Popular React toolchains](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
* [CRA Docs](https://create-react-app.dev)

Install the tool with:
	
		npm install -g create-react-app

Create a new app with
	
		npx create-react-app my-app
		cd my-app
		npm start //or yarn start

### Sources

* [Create react app docs](https://create-react-app.dev/docs/getting-started)

## About progressive web apps (PWA)

A PWA is a web app that is a web app that can be used on both mobile and desktop devices.

"A PWA is usually faster and more reliable than regular web applications as it focuses on an offline/cache-first approach. This makes it possible for users to still open our application when they have no or a slow internet connection due to its focus on caching. Also, users can add our application to the home screen of their smartphone or tablet and open it like a native application."

You can create a PWA with a new create-react-app template with the command:
	
		npx create-react-app my-app --template cra-template-pwa

This template has this lines in the src\index.js file
	
		// If you want your app to work offline and load faster, you can change
		// unregister() to register() below. Note this comes with some pitfalls.
		// Learn more about service workers: https://cra.link/PWA
		serviceWorkerRegistration.unregister();

So you change the unregister() to register() and when you run:

		npm run build

This command starts the build process, wich minifies the application and stores it in the build directory.

Then, to serve the application run:
	
		npm install -g serve
		serve -s build

### Sources

* [Create a PWA with CRA](https://create-react-app.dev/docs/making-a-progressive-web-app)

## About Github API

We can retrieve public GitHub information from GitHub by calling this endpoint:

		https://api.github.com/users/<username>

If we use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) or [axios](https://axios-http.com/docs/intro) to call that endpoint we will be able to render all the public repositories of the github user.

### Sources

* [Github REST API Docs](https://docs.github.com/en/rest)
* [MD Synthax](https://guides.github.com/features/mastering-markdown/)

## About a Github portfolio

The idea is to create a small showcase with links to al public repos and data of a github profile, maybe with some cards.

The App structure will be fairly simple.

* A Header element, with the github logo and app name
* A Profile element, that will display the user name and its public data
* A Projects element, that will display the public repos

The project structure will be as follows
	
	/src
	/components
		/Header
			index.js
		/Profile
			index.js
	/containers
		App.js //root component
		/Projects
			index.js //this will be a container with state and handlers

The root component will make the API call and pass the github user data as props to the Header, Profile and Projects components.

## Useful notes

### Profile component
This component (src\components\Profile\index.js) gets an object returned by the Github API, the object contains all the user data.

We could render every link we wanted by hand, but this will require a lot of copying and pasting the same piece of code with little variations.

That is why I decided to parse the object into an array and then filter it to create a final array with objects as its items to render every link usign a map() function.

Like this:

	finalArray.map( (item) => {
		<Link to={item.route}/>
	});

## Projects component




### Useful links
* https://www.pluralsight.com/guides/using-fetch-with-github-api-v3
* https://reactjs.org/docs/hooks-state.html
* https://reactjs.org/docs/hooks-rules.html
* https://reactjs.org/docs/hooks-effect.html
* https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
# NOTES
## About create-react-app
I've been using create-react-app since my first steps with react. But never actually realized the things you need to run a react app when setting yourself the environment, such as configuring webpack and babel.

So in a few words, 'create-react-app' creates a basic setup like the one used in the 'MovieList App' but with only one comand.

Better written articles you can read about this: 
	- [Popular React toolchains](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
	- [CRA Docs](https://create-react-app.dev/)

Install the tool with:
	
		> `npm install -g create-react-app`

Create a new app with
	
		> `npx create-react-app my-app`
		> `cd my-app`
		> `npm start //or yarn start`

### Sources
	- Create react app docs (https://create-react-app.dev/docs/getting-started)

## About progressive web apps (PWA)
A PWA is a web app that is a web app that can be used on both mobile and desktop devices.

"A PWA is usually faster and more reliable than regular web applications as it focuses on an offline/cache-first approach. This makes it possible for users to still open our application when they have no or a slow internet connection due to its focus on caching. Also, users can add our application to the home screen of their smartphone or tablet and open it like a native application."

You can create a PWA with a new create-react-app template with the command:
	
		> `npx create-react-app my-app --template cra-template-pwa`

This template has this lines in the src\index.js file
	
		> // If you want your app to work offline and load faster, you can change
		> // unregister() to register() below. Note this comes with some pitfalls.
		> // Learn more about service workers: https://cra.link/PWA
		> serviceWorkerRegistration.unregister();

So you change the unregister() to register() and when you run:

		> `npm run build`

This command starts the build process, wich minifies the application and stores it in the build directory.

Then, to serve the application run:
	
		> `npm install -g serve`
		> `serve -s build`

### Sources
	- [Create a PWA with CRA](https://create-react-app.dev/docs/making-a-progressive-web-app/)
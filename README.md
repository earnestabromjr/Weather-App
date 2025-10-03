# Weather App

## Assignment

• Set up a blank HTML document with the appropriate links to your JavaScript and CSS
files.

• Write the functions that hit the API. You're going to want functions that can take a
location and return the weather data for that location. For now, just console.log()
the information.

• Write the functions that process the JSON data you're getting from the API and
return an object with only the data you require for your app.

• Set up a form that will let users input their location and will fetch the weather
info (still just console.log() it).

• Display the information on your webpage!

• While you don't have to, if you wish to display weather icons then there can be a
lot of them to import, so have a look at the dynamic import() function. Unlike plain
template strings without an import, Webpack can read dynamic imports and still bundle
all the relevant assets.

• Add any styling you like!

• Optional: add a 'loading' component that displays from the time the form is
submitted until the information comes back from the API. Use DevTools to simulate
network speeds.

• Push that baby to GitHub and share your solution below!

1. Start the project the same way you began the webpack tutorial project, by creating the package.json file and setting up Webpack.
   - Remember, you only need to install and configure the things you need for your project. For example, if you do not plan to have local image files linked in your HTML template, you will not need to install and configure html-loader.
2. Create a .gitignore file in the root of your project. It should contain the text node_modules and dist on separate lines.

3.Set up an HTML skeleton inside of src/template.html. Inside the body, add a <header> element that contains a <nav> with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About” etc). Below the "<header>", add a single "<div id="content>".

4.Inside of src/index.js write a console.log or alert statement and then run npx webpack serve. Open <http://localhost:8080> in your browser and check your JavaScript is running.

## Deployment

Let’s deploy your project to GitHub pages! This is a little more work than it has been for previous projects, because GitHub Pages tries to look for an index.html in the root of your project, but yours is inside dist! We will need to do a few steps to push the contents of your dist directory to its own branch on GitHub, which will then have a root-level index.html for GitHub pages to serve.

You don’t need to know exactly what all the commands do - as long as you follow the instructions below carefully you should be fine. You can use these instructions to deploy your project initially, and also redeploy it again if you make more changes to your project later.

1. Make a new branch to deploy from by running git branch gh-pages. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.

2. Make sure you have all your work committed. You can use git status to see if there’s anything that needs committing.

3. Run git checkout gh-pages && git merge main --no-edit to change branch and sync your changes from main so that you’re ready to deploy.
4. Now let’s bundle our application into dist with your build command. For now, that’s npx webpack.
5. Now there are a few more commands. Run each of these in order:

   1 git add dist -f && git commit -m "Deployment commit"

   2 git subtree push --prefix dist origin gh-pages

   3 git checkout main

6. Recall that the source branch for GitHub Pages is set in your repository’s settings. Get this changed to the gh-pages branch. That should be everything!


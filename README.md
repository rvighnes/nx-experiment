# Playing with NX

* Creating a workspace
```shell script
npx create-nx-workspace workspace-name
```

* Open the workspace in the IDE. Install NX extensions/plugins 
for the IDE.

* Run `nx list` for listing all options.  


### React app
* Install plugins
```shell script
npm i -D @nrwl/react
```

* `nx list @nrwl/react` <br>
Schematics:
  * init : Initialize the @nrwl/react plugin
  * application : Create an application
  * library : Create a library
  * component : Create a component
  * redux : Create a redux slice for a project
  * storybook-configuration : Set up storybook for a react library
  * component-story : Generate storybook story for a react component
  * stories : Create stories/specs for all components declared in a library
  * component-cypress-spec : Create a cypress spec for a ui component that has a story

* `nx g @nrwl/react:application --help` <br>
Options:
  - --name                  The name of the application.
  - --directory             The directory of the new application.
  - --style                 The file extension to be used for style files. (default: css)
  - --linter                The tool to use for running lint checks. (default: eslint)
  - --routing               Generate application with routes.
  - --skipFormat            Skip formatting files.
  - --skipWorkspaceJson     Skip updating workspace.json with default schematic options based on values provided to this app (e.g. babel, style).
  - --unitTestRunner        Test runner to use for unit tests. (default: jest)
  - --e2eTestRunner         Test runner to use for end to end (e2e) tests. (default: cypress)
  - --tags                  Add tags to the application (used for linting).
  - --pascalCaseFiles       Use pascal case component file name (e.g. App.tsx).
  - --classComponent        Use class components instead of functional component.
  - --js                    Generate JavaScript files rather than TypeScript files.
  - --dryRun                Runs through and reports activity without writing to disk.
  - --help                  Show available options for project target.

* Creating an app 
```shell script
nx g @nrwl/react:application --name first-app`
```

* Serving an app 
```shell script
nx run first-app:serve --port=3001
```

* Test
```shell script
nx run first-app:test
```

* Building
```shell script
nx run first-app:build --configuration=production
nx build first-app --configuration=production     # alternative
```

* Linting
```shell script
nx run first-app:lint
```


### React library
* Creating a shared-ui-library
```shell script
nx g @nrwl/react:library first-library
``` 

* Creating a component in a shared-ui-library
```shell script
nx g @nrwl/react:component header --project=first-library
```

* Importing from shared-ui-library in app
```js
import { Header } from "@nx-experiment/first-library";
```


## Generic typescript library
* Creating a generic Typescript library
```shell script
nx g @nrwl/workspace:library utilities
```

* Importing from generic Typescript library
```js
import {utilities} from "@nx-experiment/utilities";
```


### Express
* Install plugins
```shell script
npm i -D @nrwl/express
```

* Generate new express App
```shell script
nx generate @nrwl/express:application first-api --frontendProject=first-app  
# This will add proxy in the frontend project for the API
```

* Run
```shell script
nx run first-api:serve
```


### Running multiple apps together
* Everything in CLI
```shell script
nx run-many --target=serve --projects=first-api,first-app --parallel=true
```
* Adding a target (in the `workspace.json`, in some project's architect property)
```json
{
  "projects": {
    "first-app": {
      "architect": {
        "serveApiAndLaunchApp": {
          "builder": "@nrwl/workspace:run-commands",
          "options": {
            "commands": [
              {
                "command": "nx run first-api:serve"
              },
              {
                "command": "nx run first-app:serve"
              }
            ]
          }
        }
      }
    }
  }
}
```
And in the CLI,
```shell script
nx run first-app:serveApiAndLaunchApp
```


### Story Books
* Install Plugin
```shell script
npm i -D @nrwl/storybook
```

* Create a storybook configuration
```shell script
nx g @nrwl/react:storybook-configuration first-library --configureCypress --generateStories
```

* Running storybook
```shell script
nx run first-library:storybook
```

* Running cypress
```shell script
nx run first-library-e2e:e2e             
nx run first-library-e2e:e2e --watch     # For interaction
nx run first-library-e2e:e2e --headless  # For CI
```


### CI
* Test all affected apps and libs
```shell script
nx affected:test --base=master    
# base -> branch to be compared to get affected/changed apps or libs
```

* Lint all affected apps and libs
```shell script
nx affected:lint --base=master
```

* Build all affected apps and libs
```shell script
nx affected:build --base=master
```

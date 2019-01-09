# React App that renders resources when directly accessed from the browser.

## Structure
The app is divided in 2 apps; an express server which is in charge of serving static content and of requesting the resources from an external API (swapi), and a React application which will be in charge of rendering our app and requesting the resources from our express server.

## Setup instructions
In the root folder run npm install.
In the client folder run npm install.
in the root folder run npm start.

## Client
The client API has 3 components: App, Characters, Character.
**App**: App will set its state with one property which is characters (array). When App gets mounted in the DOM it will request a list of characters from the express server.
**Characters**: Characters is a stateless component which App will render passing to it the App's characters state property.
**Character**: Character will set its state with one property which is character (object). When Character gets mounted in the DOM it will request the specific character from the express server.

### Router:
Our Router component specifies 2 routes. **/** and **/characters/:id**.
The **/characters/:id** route will render a **Character** component. This component will have access to the **Router** match prop which has a **params** property. **params** itself is an object which has an **id** property. This **id** is the one we use to access our specific character therefore rendering the character correctly since the **/character/:id** url will also instruct our express server to send back our static assets.

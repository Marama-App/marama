# Redux without React

This repo aims to help you experiment with Redux without distractions from the extra bits to wire up React. After cloning:

```shell
npm install
npm start
```

This will start a Webpack dev server. Open [http://localhost:8080](http://localhost:8080) in your browser.


## Use dev tools

Install the Redux DevTool Chrome extension from [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

Load up the Redux DevTool and dispatch a few `'ADD_WOMBAT'` and `'DEL_WOMBAT'` actions to see what's going on. This screenshot illustrates how to dispatch actions using the dev tools.

![Dispatching actions using Redux dev tools](./screenshot1.png)


## Next

 - Add a delete button next to each of the wombats so they can be deleted.
 - Add other actions (`'UPDATE_WOMBAT'`, for example). Add a case to the reducer to handle those actions.
 - Add a new reducer for another property on the Redux store. We already have `wombats`; how about `aardvarks`?
 - Add some actions to the new reducer.
 - Add another rendering function in `index.js` to handle the new property on the store, and subscribe it to the store using the same method as `wombats`.

Rinse and repeat as many times as it takes to start to get more familiar with this process.  Once you're comfortable with submitting actions from the dev tools and handling them in your code, research how you might `dispatch` the actions from inside your code instead of the dev tools. The [Redux docs](http://redux.js.org/docs/api/Store.html#dispatch) might be a good place to start.


## See also

When you're starting to get happier with this process, you could try reinforcing it with the [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) video tutorials from Redux creator Dan Abramov.


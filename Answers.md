In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 
- Actions send data from the app to the store.
- Reducers tell how the state of the app changes based on the actions sent the he store.
- Store brings Actions and Reducers together. It allows state to be accessed and updated. You get only one store.





 What is the difference between Application state and Component state? When would be a good time to use one over the other?

App is global while Comp is local.
App state allows any component to access the store and is best used when several components need to access state.
Comp state can only be updated within itself/its children and is best used when several other components do not need access.





 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux-thunk is a middleware which returns functions that stop actions from dispatching until certain conditions are met.
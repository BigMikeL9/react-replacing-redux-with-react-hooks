// --------------------------------------
// Building our own Global/App-wide state management store and solution using 'React Custom Hook'.

// --------------------------------------

import { useEffect, useState } from "react";

// ----- GLOBAL VARIABLES -----
// since 'globalState' is a global variable and NOT inside the 'useStore' custom hook, any component that uses the 'useStore' will have access to the data inside it and be able to make update that data to affect other components that also use the 'useStore' custom hook.
let globalState = {};

// 'listeners' array contains a list of FUNCTIONS that we can call to update ALL components that are using the 'useState' hook, whenever state changes.
let listeners = [];

// contains action functions with 'actionIdentifier' strings as KEYS, that can be called to dispatch actions to components that use the 'useStore' hook  -->  and thus update the state to re-render ALL components that use the 'useStore' hook.
let actions = {};

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
export const useStore = () => {
  // --------------------------
  // ---- re-renders subscribed components (components that use the 'useStore' custom hook) when state changes ----
  // we are ONLY interested in the 'setState' function because we want to re-render any component that uses the 'useStore' hook, whenever the state changes
  const [state, setState] = useState(globalState);

  // --------------------------
  // ---- Registering a listener function for each component that uses the 'useStore' hook, as it mounts. ----
  /* 
  - So each component that uses the 'useStore' custom hook, will get their own 'setState' function.

  - That 'setState' function is then pushed to the 'listeners' array, as the component MOUNTS.

  - And REMOVED from the 'listeners' array as the component UNMOUNTS.
  */

  useEffect(() => {
    // EVERY component that uses this custom hook will get their OWN 'setState' function, which is then pushed to the 'listeners' array which is SHARED between all components that use the 'useStore' custom hook.
    // so the 'listeners' array will grow overtime, the more components use the 'useStore' hook.
    listeners.push(setState);

    return () => {
      // get rid of a component's 'setState' listener function, from the listeners array,  as it UNMOUNTS.
      // NOTE: IMPORTANT We get rid of a component's listener function as it unmounts because otherwise these listener functions can pile up and cause memory leaks in our application.

      // 🌟 REMEMBER -->  Functions are objects in JS which are reference types stored in memory that has a value which contains the address of the allocated memory for that object in the Heap.
      // So the 'setState' function for each component that uses 'useStore' custom hook will have a unique address value that can be used with equality operator "===" to identify and remove that 'setState' function from the listeners array, since they both have the same address that points to the same object instance stored in the heap.

      listeners.filter((listener) => listener !== setState);
    };
  }, []);

  // --------------------------
  // ---- Changing ours 'globalState' by dispatching actions in components that use the 'useStore' custom hook ----

  const dispatch = (actionIdentifier_String) => {
    // same as 'setState(actionIdentifier_String)', since 'listeners' object .

    // CALLING an action function stored the 'actions' object.
    // We can identify which action function we want to dispatch by using 'actionIdentifier_String' KEY which is the key for that action funciton stored in the 'actions' object.
    // The 'action' function will take in the previous 'globalState' as an argument, and should return a NEW updated 'globalState'
    const newGlobalState = actions[actionIdentifier_String](globalState);

    // merge OLD 'globalState' with 'newGlobalState'
    globalState = { ...globalState, ...newGlobalState };

    // inform all listeners in the 'listeners' array (which contains all the different 'setState' functions that belong to each component), that the 'globalState' changed, inorder to re-render all the components that use the 'useStore' hook.
    // same as --> listeners.forEach((setState) => setState(globalState));
    listeners.forEach((listener) => listener(globalState));
  };

  return [globalState, dispatch];
};

// --------------------------------------------------------------------------------------------------------
// used to set or push different action functions to the 'actions' object, so that we can dispatch them
// 'initStore' will receive some 'actions' (OBJECT) defined by us, and an 'initialState' (OBJECT) so that we can set it as the 'globalState' when the store is initialized.
export const initStore = (userActions, initialsState) => {
  if (initialsState) globalState = { ...globalState, ...initialsState };

  actions = { ...actions, ...userActions };
};

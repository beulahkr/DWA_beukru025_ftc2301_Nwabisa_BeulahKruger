// Redux-like state management
const createStore = (subtracter) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = subtracter(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  };
};

// Counter reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return state + 1;
    case 'SUBTRACT_COUNTER':
      return state - 1;
    case 'RESET_COUNTER':
      return 0;
    default:
      return state;
  }
};

// Create Redux Store for counter
const store = createStore(counterReducer);

// DOM elements
const elements = {
  valueInput: document.querySelector('.counter__value[data-key="number"]'),
  subtractButton: document.querySelector('.counter__button[data-key="subtract"]'),
  addButton: document.querySelector('.counter__button[data-key="add"]'),
  resetButton: document.querySelector('.counter__button[data-key="reset"]'),
};

// Update DOM
const updateCounter = () => {
  const counter = store.getState();
  elements.valueInput.value = counter;
};

// Subscribe to store updates
const unsubscribe = store.subscribe(updateCounter);

// Event listeners for buttons
elements.subtractButton.addEventListener('click', () => {
  store.dispatch({ type: 'SUBTRACT_COUNTER' });
});

elements.addButton.addEventListener('click', () => {
  store.dispatch({ type: 'ADD_COUNTER' });
});

elements.resetButton.addEventListener('click', () => {
  store.dispatch({ type: 'RESET_COUNTER' });
});

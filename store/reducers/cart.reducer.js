const defaultState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      {
        const newState = { ...state };

        if (action.payload.checkboxValue) {
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
            restaurantName: action.payload.restaurantName,
          };

          return newState;
        } else {



          newState.selectedItems = {
            items: [
              ...newState.selectedItems.items.filter(
                (item) => item.title !== action.payload.title
              ),
            ],
            restaurantName: action.payload.restaurantName,
          };

          return newState
        }
      }
    }

    default:
      return state;
  }
};

export default cartReducer;

export const addItemToCart = ({dispatch, item,}) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: item
  })
}
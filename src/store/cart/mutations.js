export function addtoCart (state, item) {
  const idx = state.cart.findIndex((cart)=>{
    return cart.id === item.id
  });
  if (idx > -1){
    state.cart[idx].count++;
  }
  else {
    item.count = 1;
    state.cart = [...state.cart,item];
  }
  state.totalPrice = state.totalPrice + Number(item.price);
}
export function removeFromCart (state,item) {
  console.log(item)
  const idx = state.cart.findIndex((cart)=>{
    return cart.id === item.id
    });
  if (item.type === 'removeOne'){
    if (state.cart[idx].count === 1){
      state.cart = state.cart.filter((i) =>{
        return i.id !== item.id
      })
    }
    else {
      state.cart[idx].count--
    }
    state.totalPrice = state.totalPrice - Number(item.price)
  }
  else {
    state.cart = state.cart.filter((i) =>{
      return i.id !== item.id
    });
    state.totalPrice = state.totalPrice - Number(item.price * item.count)
  }
}

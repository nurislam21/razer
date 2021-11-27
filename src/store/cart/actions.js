export function addtoCart ({commit} , item) {
  commit('addtoCart',item)
}
export function removeFromCart({commit},item) {
  commit('removeFromCart',item)
}

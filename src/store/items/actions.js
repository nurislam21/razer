import axios from "axios";

export async function getItems ({commit}) {
  const items = await axios.get('https://back-4-back.herokuapp.com/gear',
    {
      headers:{
        "api-key": "70ad3de50a55e77d300b82cea7af0d27f45400465e128994b4a3bb16bbcda3b1",
        "route": "gear"
      }
    });
  console.log(items.data.result)
  commit('setItems', items.data.result)
}

/*
  Put all your fetch calls in one spot
  If the URL changes, swap it out
  Swap backends
*/
const URL = "https://cors-anywhere.herokuapp.com/http://shibe.online";

export default class Adapter {
  static getAnimal() {
    return fetch(`${URL}/api/shibes`).then(res => res.json())
  }
}



// Adapter.getAnimal().then(json => )

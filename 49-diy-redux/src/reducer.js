const defaultState = {
  banished: []
}


function reducer(state=defaultState, action){
  switch(action.type){
    case "REMOVE_HOG":
      return {...state, banished: [...state.banished, action.payload] }
    default:
      return state

  }
}

export default reducer

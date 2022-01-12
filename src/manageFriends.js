export function manageFriends(state, action) {
  switch(action.type){
    case("friends/add") :
      return {friends: [...state.friends, action.payload] }
    case("friends/remove") :
      return{ friends: [...state.friends].filter(friend =>{
        return friend.id !== action.payload
      })   
      }
      default:
        return state
  }
 
}

let state = {friends: []}

let action = {
  type: "friends/add",
  payload: {
    name: "Chrome Boi",
    hometown: "NYC",
    id: 1
  }

}

  action = {
  type: "friends/remove",
  payload: 1,
}
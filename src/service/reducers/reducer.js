import { INCREMENT } from '../constants'
const initialState = {
    cardData: []
}
export default function counter(state = 0 , action) {
  console.log("reducerrrrr", state)
  console.log("reducerrrrr", action.state)
    switch (action.type) {
        case INCREMENT:
            return { counter: action.state + 1 }
        default:
            return state
    }

}

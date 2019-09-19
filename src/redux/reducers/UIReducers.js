
import * as types from '../types/UITypes'

export const showSidebar = (state = false, action) => {
    switch (action.type) {
        case types.SHOW_SIDEBAR:
            return action.show           

        default:
           return state;
    }
}
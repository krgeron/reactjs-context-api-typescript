import { SET_ROOM } from './room.action'

export const RoomReducer = (state: any, action: any) => {
    switch (action.type) {
        case SET_ROOM:
            return {
                ...state,
                name: action.payload.id,
                floor: action.payload.title,
                hasExecuted: true
            };
        default:
            throw new Error();
    }
}
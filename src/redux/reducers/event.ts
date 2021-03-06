import {ActionType} from "../types"

const initialState : EventsState = {
    events: [],
    unlisted: [],
    past: []
};

export const eventReducer = (state = initialState, action: EventsAction) => {

    switch (action.type) {

        case ActionType.ADD:
            return {
                ...state,
                events: [{...action.payload}, ...state.events]
            }
        case ActionType.ADD_PAST:
            return {
                ...state,
                past: [{...action.payload}, ...state.past]
            }
        case ActionType.ADD_UNLISTED:
            return {
                ...state,
                unlisted: [{...action.payload}, ...state.unlisted]
            }
        case ActionType.DEL:
            return {
                ...state,
                events: state.events.filter(e => e.id !== action.payload.id),
                past: state.past.filter(e => e.id !== action.payload.id)
            }
        case ActionType.DEL_UNLISTED:
            return {
                ...state,
                unlisted: state.unlisted.filter(e => e.id !== action.payload.id)
            }
        case ActionType.VER:
            return {
                ...state,
                events: state.events.map(e => {
                    if(e.id == action.payload.id) {
                        //@ts-ignore
                        let ver = action.payload.verified.toString()
                        return {
                            ...e, verified: ver
                        }}
                    else return e
                }),
                past: state.past.map(e => {
                    if(e.id == action.payload.id) {
                        //@ts-ignore
                        let ver = action.payload.verified.toString()
                        return {
                            ...e, verified: ver
                        }}
                    else return e
                }),
                unlisted: state.unlisted.map(e => {
                    if(e.id == action.payload.id) {
                        //@ts-ignore
                        let ver = action.payload.verified.toString()
                        return {
                            ...e, verified: ver
                        }}
                    else return e
                }),
            }

        case ActionType.SET_IMG:
            return {
                ...state,
                events: state.events.map(e => {
                    if(e.id == action.payload.id) {
                        //@ts-ignore
                        let img = action.payload.image.toString()
                        return {
                            ...e, image: img
                        }}
                    else return e
                }),
                past: state.past.map(e => {
                    if(e.id == action.payload.id) {
                        //@ts-ignore
                        let img = action.payload.image.toString()
                        return {
                            ...e, image: img
                        }}
                    else return e
                }),
                unlisted: state.unlisted.map(e => {
                    if(e.id == action.payload.id) {
                        //@ts-ignore
                        let img = action.payload.image.toString()
                        return {
                            ...e, image: img
                        }}
                    else return e
                }),
            }


        default: return state;

    }

};

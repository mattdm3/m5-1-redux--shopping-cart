import React from "react"
import { createStore } from 'redux'

const initialState = {}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {

        case "ADD_ITEM": {
            console.log(action)
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity:
                        state[action.item.id] && state[action.item.id].quantity
                            ? state[action.item.id].quantity + 1
                            : 1,
                }
            }
        }
        case 'REMOVE_ITEM': {
            const newCart = { ...state };
            delete newCart[action.id];
            return newCart;
        }

        case 'UPDATE_QUANTITY': {
            console.log(action)
            const { id, newQuantity } = action;
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity: action.newQuantity
                }
            }
        }


        default:
            return state;
    }
}



export const getStoreItemArray = state => Object.values(state)

export const getSubtotal = state => {
    let total = 0;
    getStoreItemArray(state).forEach(function (item, id) {
        total = total + item.price * item.quantity
    })
    return total;

}

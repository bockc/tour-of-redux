/***************************************
 ** O-rizon development
 ** Created by Bastien Cecere
 ** 20/07/2017 - 18:27
 ** reducers.js
 ** 2017 - All rights reserved
 ***************************************/

import { combineReducers } from 'redux'
import { CHANGE_COLOR, CHANGE_COUNT } from './components/actions'
import getRandomColor from 'randomcolor'

const initialState = {
	carres: [
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		}
	]
}

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_COLOR:
			return Object.assign({}, ...state, { carres: state.carres.map((square, i) => {
					if (i === action.i) {
						square.color = action.color
					}
					return square
				})
			})
			return newState
		case CHANGE_COUNT:
			return Object.assign({}, [(state, action) => {
				for (var i = 0; i++; action.count) {
					[]
				}
			}])
		default:
			return state;
	}
}

const reducers = combineReducers({
	AppReducer
})

export default reducers
/***************************************
** O-rizon development
** Created by Godo
** 8/1/17 - 6:33 PM
** actions.js
** 2017 - All rights reserved
***************************************/
export const CHANGE_COLOR = 'CHANGE_COLOR'

export const CHANGE_COUNT = 'SQUARE_NUMBER'

export const boundChangeColor = (color, i) => {
	return {
		type: CHANGE_COLOR,
		color,
		i
	}
}

export const boundChangeCount = (count) => {
	return {
		type: CHANGE_COUNT,
		count
	}
}
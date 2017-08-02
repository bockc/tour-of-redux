import React from 'react'
import { connect } from 'react-redux'
import Carre from './Carre'
import { boundChangeColor } from './actions'
import getRandomColor from 'randomcolor'

const AppComponent = ({ carres, onSquareClick }) => {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		margin: '0 0'
	}
	const stylesTab = {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1',
		height: '50%'
	}

	const functionArray = [
		() => onSquareClick(getRandomColor(), 0),
		() => onSquareClick(getRandomColor(), 2),
		() => carres.map((_, i) => onSquareClick(carres[2].color, i))
	]

	return (
		<div style={styles}>
			{
				Array.from(Array(carres.length / 2).keys()).map((_, i) => {
					const tab = carres.map((e, i) => {
							return <Carre key={'carre' + i} color={e.color} onClick={functionArray[i]}>{e.color}</Carre>
						}
					);
					return (
						<div key={'subdivider' + i} style={stylesTab}>
							{
								tab.slice(i * 2, i * 2 + 2)
							}
						</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps = ({ AppReducer }) => ({
	carres: AppReducer.carres
})

const mapDispatchToProps = dispatch => {
	return {
		onSquareClick: (color, i) => dispatch(boundChangeColor(color, i))
	}
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default App

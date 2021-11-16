export const selectboxStyle = {
	option: (base, state) => ({
		...base,
		fontSize: '24px',
		lineHeight: '30px',
		paddingLeft: 'px',
		wordBreak: 'break-all',
		// background: state.isSelected ? `url(${sel_chk}) no-repeat left 0px center` : '',
		backgroundColor: 'none',
		borderBottom: 'solid 1px #f2f2f2',
		color: 'black',
		cursor: 'pointer',
		'&:hover': {
			opacity: '.7',
			backgroundColor: '#f1d63c'
		},
	}),
	control: (base, state) => ({
		...base,
		// borderColor: state.isFocused ? 'red' : 'yellow',
        width: 250,
		border: '1px solid #d8dada;',
		borderBottom: state.isFocused ? '' : '1px solid #000',
		boxShadow: 'none',
		'&:hover': {
			opacity: '.7',
			border: '1px solid #d8dada;'
		},
	}),
	menu: base => ({
		...base,
		zIndex: 20,
		margin: "0",
	}),
	indicatorSeparator: base => ({
		...base,
		display: 'none'
	}),
	dropdownIndicator: (base, state) => ({
		...base,
		fill: state.isFocused ? 'red' : '',
		transform: state.isFocused ? 'scaleY(-1)' : ''
	}),

	valueContainer: (base) => ({
		...base,
		height: '100%',
		cursor: 'pointer'
	}),
	indicatorsContainer: (base) => ({
		...base,
		cursor: 'pointer'
	})
}
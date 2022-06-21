export const selectboxStyle = {
	container: base => ({
		...base,
		width:"48%",
		cursor:"pointer",
		textAlign:"center"
	}),
	option: (base, state) => ({
		...base,
		color: 'black',
		cursor:"pointer",
		border: '1px solid #e7e7e7',

		'&:hover': {
			opacity: '.7',
			backgroundColor: '#f1d63c'
		},
	}),
	control: (base, state) => ({
		...base,
		'&:hover': {
			opacity: '.8',
			border: '1px solid #d8dada;'
		},
	}),
	menu: base => ({
		...base,
		margin: "0",
		border: '1px solid #d8dada;'
	}),


	valueContainer: (base) => ({ //主要調整這個，選項位置，不是打開的部份
		...base,
		cursor: 'pointer',
	}),
	indicatorsContainer: (base) => ({ //右側箭頭區塊
		...base,
		cursor: 'pointer',
	}),
	dropdownIndicator: (base, state) => ({//箭頭
		...base,
		color:"#FD975E",
		'&:hover': {
			opacity: '.8',
			color:"#FD975E",
		},
	}),
}
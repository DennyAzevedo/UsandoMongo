type MenuOptions = '' | 'home' | 'cad' | 'alte' | 'exclu'

export const createMenuObject = (activeMenu: MenuOptions) => {
	let returnObject = {
		home: false,
		cad: false,
		alte: false,
		exclu: false
	}

	if (activeMenu != '') {
		returnObject[activeMenu] = true
	}

	return returnObject
}
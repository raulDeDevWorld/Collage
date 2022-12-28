import React, { useState, useMemo, useContext } from 'react'

const UserContext = React.createContext()

export function UserProvider({ children }) {
	// Data de un usuario proveido por FIREBASE AUTHENTICATION
	const [user, setUser] = useState(undefined)
	// Data de un usuario proveido por FIREBASE DATABASE
	const [userDB, setUserDB] = useState('loading')
	const [success, setSuccess] = useState(null)
	const [image, setImage] = useState({})
	const [numeration, setNumeration] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,43, 44, 45, 46])
	const [pageOne, setPageOne] = useState(true);
	const [pageTwo, setPageTwo] = useState(true);
	const [pageThree, setPageThree] = useState(true);
	const [pageQR, setPageQR] = useState(true);
	const [qr, setQr] = useState('swoou.com');
	const [uuid, setUuid] = useState([])


	const [dataUrl, setDataUrl] = useState('');
	const [templates, setTemplates] = useState([
		[
		  'h', 'h', 'h',
		  'h', 'v', 'h',
		  'h', 'v', 'h'],
		[
		  'h', 'h', 'h',
		  'h', 'v', 'h',
		  'h', 'h', 'h'],
		[
		  'h', 'h', 'v',
		  'v', 'h', 'h',
		  'v', 'h', 'h'],
		[
		  'v', 'v', 'v',
		  'v', 'v', 'v',
		  'v',  ],
		[
			'v', 
			'h', 'v',
		],
		])

	function setUserProfile(userProfile) {
		setUser(userProfile)
	}
	function setUserData(userDatabase) {
		setUserDB(userDatabase)
	}
	function setAlbunImage(data) {
		setImage(data)
	}
	function setAlbunImage(data) {
		setImage(data)
	}
	function setAlbunNumeration(data) {
		setNumeration(data)
	}
	function setUserSuccess(mode) {
		setSuccess(mode)
		setTimeout(() => { setSuccess(null) }, 6000)
	}
	function handlerPageView(data, create) {
		switch (data) {
			case 'pageOne':
				create == true ? setPageOne(true) : setPageOne(false)
			  break;
			case 'pageTwo':
				create == true ? setPageOne(true) : setPageOne(false)
			  break;
			case 'pageThree':
				create == true ? setPageOne(true) : setPageOne(false)
			  break;
			  case 'pageQR':
				create == true ? setPageQR(true) : setPageQR(false)
			  break;
			default:
			  break;
		  }
	}


	const value = useMemo(() => {
		return ({
			user,
			userDB,
			success,
			image,
			numeration,
			pageOne,
			pageTwo,
			pageThree,
			templates,
			qr,
			dataUrl,
			uuid,
			setUserProfile,
			setUserData,
			setUserSuccess,
			setAlbunImage,
			handlerPageView,
			setAlbunNumeration,
			setQr,
			setDataUrl,
			setUuid,
		})
	}, [user, userDB, success, image, numeration, pageOne, pageTwo, pageThree, qr, dataUrl, uuid])

	return (
		<UserContext.Provider value={value} >
			{children}
		</UserContext.Provider>
	)
}

export function useUser() {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('error')
	}
	return context
}
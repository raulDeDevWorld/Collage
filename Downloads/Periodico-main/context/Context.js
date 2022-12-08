import React, { useState, useMemo, useContext} from 'react'

const UserContext = React.createContext()

export function UserProvider ({ children }) {

	const [user, setUser] = useState(undefined)
	const [userDB, setUserDB] = useState('')
	const [pdfData, setPdfData] = useState({})
	const [specificData, setSpecificData] = useState(null)
	const [specificDataEditable, setSpecificDataEditable] = useState(null)
	const [postsIMG, setPostsIMG] = useState({})
	const [date, setDate] = useState(null)
	const [monthAndYear, setMonthAndYear] = useState(null)
	const [dayMonthYear, setDayMonthYear] = useState(null)
	const [showImg, setShowImg] = useState(false)
	const [success, setSuccess] = useState(null)


	function setUserProfile (userProfile) {
		setUser(userProfile)
	}
	function setUserData (userDatabase) {
		setUserDB(userDatabase)
	}
	function setUserPdfData (data) {
		setPdfData(data)
	}
	function setUserSpecificData (userSpecificData) {
		setSpecificData(userSpecificData)
	}
	function setUserSpecificDataEditable (userSpecificDataEditable) {
		setSpecificDataEditable(userSpecificDataEditable)
	}
	function setUserPostsIMG (data) {
		setPostsIMG(data)
	}
	function setUserDate (data) {
		setDate(data)
	}
	function setUserMonthAndYear (data) {
		setMonthAndYear(data)
	}
	function setUserDayMonthYear (data) {
		setDayMonthYear(data)
	}
	function setUserSuccess (mode) {
		setSuccess(mode)
		setTimeout(()=>{ setSuccess(null)}, 4000)
	}
	function setUserShowImg (mode) {
		setShowImg(mode)
	}
	const value = useMemo(()=>{
		return ({
			user,
			userDB,
			pdfData,
			specificData,
			specificDataEditable,
			postsIMG,
			showImg,
			date,
			monthAndYear,
			dayMonthYear,
			success,
			setUserProfile,
			setUserData,
			setUserPdfData,
			setUserSpecificData,
			setUserSpecificDataEditable,
			setUserPostsIMG,
			setUserShowImg,
			setUserDate,
			setUserMonthAndYear,
			setUserDayMonthYear,
			setUserSuccess,
		})
	}, [ user, userDB, pdfData, success, specificData, specificDataEditable, postsIMG, showImg, date, monthAndYear, dayMonthYear])

	return (
		<UserContext.Provider value={value} >
			{ children }
		</UserContext.Provider>
	)
} 

export function useUser () {
	const context = useContext(UserContext)
	if(!context){
		throw new Error('error')
	}
	return context
}
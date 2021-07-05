import React from 'react'

interface Props {

}

const Header = (props: Props) => {
	return (
		<header>
			<h1 className=" p-8 font-bold text-4xl flex justify-center items-center" >
				To Do List
			</h1>
		</header>
	)
}

export default Header

import React from 'react'
import vipImage from '../vip.jpg'

const VIP = (props) => {
	return (
		<div className='VIP'>
			<h1>Welcome to the VIP!</h1>
			<img src={vipImage} alt="VIP" />
		</div>
	)
}

export default VIP
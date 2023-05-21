import React from 'react'

type Props = {
	children: React.ReactNode
}

export const PrimaryText: React.FC<Props> = ({ children }) => {
	if (!children) {
		return <></>
	}
  return (
	  <p>{ children }</p>
  )
}

import React from 'react'

type Props = {
  children: React.ReactNode
}

export const PrimaryText: React.FC<Props> = ({ children }) => {
  return <p>{          children}</p>
}

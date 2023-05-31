import React, { useState } from 'react'

import { PrimaryButton, SecondaryButton } from '@/components/share/atom/Button'

export const SaveButton = () => {
  const [isSaved, setIsSaved] = useState(false)
  const onClick = () => {
    console.log('click')
    setIsSaved(!isSaved)
  }
  return !isSaved ? (
    <PrimaryButton onClick={onClick}>保存</PrimaryButton>
  ) : (
    <SecondaryButton onClick={onClick}>保存済み</SecondaryButton>
  )
}

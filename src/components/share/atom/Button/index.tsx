import React from 'react'

type Props = {
  children: React.ReactNode
  onClick?: () => void
}

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  bg?: string
  textColor?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    bg = 'primary',
    textColor = 'text-primary',
  } = props
  return (
    <button
      onClick={onClick}
      className={`${bg} p-2 px-8 rounded-full hover:opacity-75 transition-opacity text-${textColor} font-bold`}
    >
      {children}
    </button>
  )
}

export const PrimaryButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button bg="bg-primary" onClick={onClick}>
      {children}
    </Button>
  )
}

export const PrimaryLightButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button bg="bg-primary-light" onClick={onClick} textColor="neutral-900">
      {children}
    </Button>
  )
}

export const PrimaryDarkButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button bg="bg-primary-dark" onClick={onClick} textColor="neutral-50">
      {children}
    </Button>
  )
}
export const SecondaryButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button bg="bg-secondary" onClick={onClick}>
      {children}
    </Button>
  )
}

export const SecondaryLightButton: React.FC<Props> = ({
  children,
  onClick,
}) => {
  return (
    <Button bg="bg-secondary-light" onClick={onClick} textColor="neutral-900">
      {children}
    </Button>
  )
}

export const SecondaryDarkButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button bg="bg-secondary-dark" onClick={onClick} textColor="neutral-50">
      {children}
    </Button>
  )
}

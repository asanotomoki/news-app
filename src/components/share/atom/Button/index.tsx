import React from 'react'

type Props = {
  children: React.ReactNode
  onClick?: () => void
}

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  colorClass?: string
  textColor?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    colorClass = 'primary',
    textColor = 'text-primary',
  } = props
  return (
    <button
      onClick={onClick}
      className={`bg-${colorClass} p-2 px-4 rounded-xl hover:opacity-80 transition-opacity text-${textColor} font-bold`}
    >
      {children}
    </button>
  )
}

export const PrimaryButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button colorClass="primary" onClick={onClick}>
      {children}
    </Button>
  )
}

export const PrimaryLightButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button
      colorClass="primary-light"
      onClick={onClick}
      textColor="neutral-900"
    >
      {children}
    </Button>
  )
}

export const PrimaryDarkButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button colorClass="primary-dark" onClick={onClick} textColor="neutral-50">
      {children}
    </Button>
  )
}
export const SecondaryButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button colorClass="secondary" onClick={onClick}>
      {children}
    </Button>
  )
}

export const SecondaryLightButton: React.FC<Props> = ({
  children,
  onClick,
}) => {
  return (
    <Button
      colorClass="secondary-light"
      onClick={onClick}
      textColor="neutral-900"
    >
      {children}
    </Button>
  )
}

export const SecondaryDarkButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button
      colorClass="secondary-dark"
      onClick={onClick}
      textColor="neutral-50"
    >
      {children}
    </Button>
  )
}

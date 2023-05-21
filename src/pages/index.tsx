import Link from 'next/link'

import { PrimaryText } from '@/components/PrimaryText'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <PrimaryText>Hello World</PrimaryText>
    </main>
  )
}

import Header from '@/components/Header'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  return (
    <div>
      <Header />
      {router.query.title}
      <p>Hello Next.js</p>
    </div>
  )
}

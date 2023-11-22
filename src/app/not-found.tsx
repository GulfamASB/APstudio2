import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/app/components/Error'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}
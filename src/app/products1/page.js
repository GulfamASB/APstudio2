import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/app/components/product'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}
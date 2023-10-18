import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/app/components/products'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}
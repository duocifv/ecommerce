import { Suspense } from 'react'
import { StaticComponent } from './StaticComponent'
import { Fallback } from './Fallback'
import { DynamicComponent } from './DynamicComponent'

export default function Test() {
  return (
    <>
      <StaticComponent />
      <Suspense fallback={<Fallback />}>
        <DynamicComponent />
      </Suspense>
    </>
  )
}

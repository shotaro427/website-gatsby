import * as React from 'react'
import { useEffect, VFC } from 'react'
import { useTestQueryQuery } from '../graphql/api'

const IndexPage: VFC = () => {
  const { data } = useTestQueryQuery()

  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div>
      <p>a</p>
    </div>
  )
}

export default IndexPage;

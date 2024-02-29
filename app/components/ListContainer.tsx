import React, { PropsWithChildren } from 'react'

const ListContainer = ({children}: PropsWithChildren) => {
  return (
    <div className='border flex flex-col gap-4 p-4 pl-6 relative rounded-b-lg'>{children}</div>
  )
}

export default ListContainer
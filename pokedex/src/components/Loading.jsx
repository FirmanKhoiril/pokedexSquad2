import React from 'react'
import {SyncLoader} from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full flex items-center justify-center max-h-[50%]'>
      <SyncLoader />
    </div>
  )
}

export default Loading
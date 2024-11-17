import React from 'react'
import {SyncLoader} from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full flex items-center justify-center min-h-[50dvh]'>
      <SyncLoader color='#3666d5' />
    </div>
  )
}

export default Loading
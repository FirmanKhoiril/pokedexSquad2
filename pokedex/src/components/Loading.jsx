import React from 'react'
import {SyncLoader} from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full flex items-center justify-center max-h-[50%] h-full'>
      <SyncLoader color='#3666d5' />
    </div>
  )
}

export default Loading
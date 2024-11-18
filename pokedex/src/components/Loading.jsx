import {SyncLoader} from 'react-spinners'

const Loading = ({height}) => {
  return (
    <div className={`w-full flex items-center justify-center ${height !== "" ? height : " min-h-[50dvh]"}`}>
      <SyncLoader color='#3666d5' />
    </div>
  )
}

export default Loading
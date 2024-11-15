import React from 'react'

const ApplyAndReset = () => {
  return (
    <div className="flex w-full items-center justify-between p2">
    <button
      type="button"
      className="bg-yellow text-sm rounded-md hover:bg-yellow/90 text-primary px-7 py-3"
    >
      Apply
    </button>
    <button type="button" className="text-primary text-sm px-7 py-3">
      Reset
    </button>
  </div>
  )
}

export default ApplyAndReset
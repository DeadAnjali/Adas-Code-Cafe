import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      The Id of room is:{params.id}
    </div>
  )
}

export default Meeting

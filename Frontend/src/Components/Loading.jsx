import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center md:min-h-screen ">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
          <span className="loading loading-spinner text-primary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
          <span className="loading loading-spinner text-neutral"></span>
          <span className="loading loading-spinner text-info"></span>
          <span className="loading loading-spinner text-success"></span>
          <span className="loading loading-spinner text-warning"></span>
          <span className="loading loading-spinner text-error"></span>
        </div>
      </div>
      
    )
}

export default Loading

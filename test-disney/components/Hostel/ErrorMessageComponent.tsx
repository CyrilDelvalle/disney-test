import React from 'react'

interface Props {
    message: string
}

function ErrorMessageComponent({message}: Props ) {
    return (
        <div className=" text-center py-4 lg:px-4 ">
        <div className="p-2 bg-red-500 items-center text-white leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span className="flex rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3">ERR</span>
          <span className="font-semibold mr-2 text-left flex-auto">{message}</span>
        </div>
      </div>
    )
}

export default ErrorMessageComponent

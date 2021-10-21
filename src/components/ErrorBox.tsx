import React from 'react';

type ErrorBoxProps = {
  error: string
}

const ErrorBox = ({ error }: ErrorBoxProps ) => {
  return (
    <div className="container mx-auto my-4 w-1/2 border rounded-lg">
      <h2 className="px-3 py-1 text-2xl text-red-700 text-center font-bold bg-red-200 border-t rounded-t-lg">Error</h2>
      <hr />
      <p className="px-3 py-5 text-md text-red-500 text-center">
        {error}
      </p>
    </div>
  )
}

export default ErrorBox;

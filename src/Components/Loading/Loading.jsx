import React from 'react'
import { FadeLoader } from 'react-spinners'

const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function Loading() {

    
  return (
    <>
    <div className="sweet-loading ">
      
      <FadeLoader
        color={'#0aad0a'}
        cssOverride={override}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </>
  )
}

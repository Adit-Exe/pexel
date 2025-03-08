import React from 'react'
function hero() {
  return (
    <>
      <div id='hro' className='min-h-[500px] flex md:gap-40 gap-1 justify-center items-center md:flex-row flex-col ' >
        <img src='/images/logo.png' className='h-36  md:scale-100 scale-50' />
        <pre className='text-black w-96 md:scale-100 scale-75 text-wrap font-sans text-center shadow-2xl shadow-slate-200  p-5 rounded-md backdrop-blur-md bg-[#ffffff]'>The Pexels API enables programmatic access to the full Pexels content library, including photos, videos. All content is available free of charge, and you are welcome to use Pexels content for anything you'd like, as long as it is within our Guidelines.

          The Pexels API is a RESTful JSON API, and you can interact with it from any language or framework with a HTTP library. Alternately, Pexels maintains some official Client Libraries you can use.</pre>
      </div>

    </>
  )
}

export default hero
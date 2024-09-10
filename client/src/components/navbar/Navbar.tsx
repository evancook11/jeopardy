import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
        <div className='navbar-nav me-auto'>
            <a className='nav-item nav-link active' href="#">HOME</a>
            <a className='nav-item nav-link active' href="#">QUIZES</a>
        </div>
        <div className='navbar-nav'>
            <a className='nav-item nav-link active me-2' href="#">Log In</a>
        </div>
    </nav>
  )
}

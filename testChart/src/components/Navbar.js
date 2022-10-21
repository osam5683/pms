// // import React from 'react'

// // export default function Navbar() {
// //   return (
// //     <div>Navbar</div>
// //   )
// // }

// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showNavText, setShowNavText] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='white'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Studify</MDBNavbarBrand>
//         <MDBNavbarToggler
//           type='button'
//           data-target='#navbarText'
//           aria-controls='navbarText'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavText(!showNavText)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>
//         <MDBCollapse navbar show={showNavText}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#aboutH'>About us</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#text-center p-3'> Contact us</MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//           <span className='navbar-text'> Signup</span>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }


import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <header className='navbar'>

        <Link to="/" id="logo" className='navbar_title '>my-tasky</Link>
        <div>
          <Link to="#"> LOGOUT </Link>
          <Link to="#"> ABOUT </Link>
          <Link to="/Login"> HOME </Link>
        </div>
      </header>
    </>

  )
}

export default Navbar
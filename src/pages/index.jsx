// import React from 'react'
// import Header from './components/header'
// import Services from './components/Services'
// import Abouts from './components/Abouts'

// export default function index() {
//   return (
//     <div>
//       <Header />
//       <Services />
//       <Abouts />
      
//     </div>
//   )
// }

function HomePage({ userCount, clients }) {
  return (
    <div>
      <p className="h1"> {userCount}</p>
      <ul>
        {clients.map((ip, index) => (
          <li key={index}>{ip}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
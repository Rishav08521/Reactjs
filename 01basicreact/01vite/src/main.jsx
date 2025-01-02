import  React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// function MyApp(){
//   return(
//     <div>
//       <h1>custom App</h1>
//     </div>
//   )
//}
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click the link and view the Google page',
// }
// const anotherElement=(
//   <a href="https://google.com" target="_blank">vist google</a>
// )
const anotherUser="arpana and simpy"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser 
)
ReactDOM.createRoot(document.getElementById('root')).render(
 reactElement
)

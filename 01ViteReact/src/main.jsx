import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | SAKIL AZIZ</h1>
        </div>
    )
}



//THIS WONT WORK AS THE RENDER FUNCTION OWN TAKE OBJECT Properties Names AS WE HAVE DEFINED

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }



//CREATING A REACT ELEMENT

const reactElement = React.createElement(
    'a',
    {href:'https://google.com' , target:'_blank'},
    'Click me to visit Google'
)

//note this wont work in JS file , the contents will get parsed by React
const anotherElement = (
    <a href='https://google.com' target='_blank'>visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <App />


    // <MyApp/>
    // MyApp()

    // anotherElement
    // reactElement

)

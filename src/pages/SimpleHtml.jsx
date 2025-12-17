import React from 'react';
//import { useState } from 'react'
import logo from '../assets/MillerIcon.ico'

const SimpleHtml = () => {
   return (
   <>
      <img src={logo} className="logo" alt="logo" />
      <ul>
      Unordered List of Buttons
      <li><button>Button</button></li>
      <li><button>Button</button></li>
      <li><button>Button</button></li>
      <li><button>Button</button></li>
      </ul>
      <h1>Hello, world!</h1>
      <br/> {/*<!-- Adding a line break for better readability -->*/}
      <ol>
         <li>Ordered List</li>
         <li><p>React: <br/>Each child in a list should have a <strong>unique “key” prop</strong>.<br/>
            Where to get your <strong>key</strong> <br/>
            Different sources of data provide different sources of keys:<br/>

            Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.<br/>
            Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.<br/>
            <strong>Rules of keys</strong> <br/>
            Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.<br/>
            Keys must not change or that defeats their purpose! Don’t generate them while rendering.<br/>
            
         </p>
         </li>
         <li><a href="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key">React List Documentation</a></li>
         <li><strong>Bold Text using strong tag.</strong></li>
         <li><em>Italic text</em></li>
         {/* In react style is a prop and requires react style object */}
         <li><span style={{textDecoration: "underline"}}>Underlined text</span></li>
         <li><br/><textarea>Text Area Tag</textarea></li>
         <li><article>Lets put an article inside a list inside an article tag!</article></li>
         <li></li>
         <li></li>
      </ol>


      {multiLineBreak(30)} <span>multiLineBreak(30) created a lot of line breaks!</span>
      <a href="#top">Anchor Tag Jump Back Up.</a>
   </>
);}

export default SimpleHtml;

function multiLineBreak(x){
   return <>{Array(x).fill(<br/>)}</>;
}
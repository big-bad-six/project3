import React from 'react'

/*Building navbar boiler plate links. Add page name on line 10 and 11 */
export default function Nav({changePage, curPage}) {
    return (
        <nav className="nav">
            <h1>Meme Generator</h1>
            <div className="links">
            <a
          href=""
          onClick={() => changePage("")}
          className={
            curPage === "" ? "nav-link active" : "nav-link"
          }>Log In/Sign Up</a>
            </div>
        </nav>
    )
}
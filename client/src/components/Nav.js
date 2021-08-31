import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*Building navbar boiler plate links. Add page name on line 10 and 11 */
export default function Nav({ changePage, curPage }) {
  return (
    <BrowserRouter>
      <Route>
        <nav className="nav">
          <h1>Meme Generator</h1>
          <div className="links">
            <Link to=""
              onClick={() => changePage("")}
              className={
                curPage === "" ? "nav-link active" : "nav-link"
              }>Log In/Sign Up</Link>
          </div>
        </nav>
      </Route>
    </BrowserRouter>
  )
}
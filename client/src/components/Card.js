import React, {  useState } from "react";
import Footer from './Footer';
import Nav from './Nav';
import Home from '../pages/Home';
import MemeGen from '../pages/MemeGen';
import SignIn from '../pages/SignIn';

export default function Card() {
    const [curPage, setPage] = useState("Home");

    const renderPage = () => {
        if (curPage === "Home") {
            return <Home />;
            }
        if (curPage === "MemeGen") {
            return <MemeGen />;
        }
        if (curPage === "SignIn") {
            return <SignIn />;
        }
    }


const changePage = (page) => setPage(page);

const renderFooter = () => {
    return <Footer />
};

return (
    <div>
        <Nav curPage={curPage} changePage={changePage} />
        {renderPage()}
        {renderFooter()}

    </div>
);
};


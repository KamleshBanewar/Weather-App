import React from "react";

function Footer() {

    let myYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-light text-center fs-6 mt-5">
                <p>© {myYear} My-Weather. All Rights Reserved | Terms And Conditions</p>
                <div> Developed By Kamlesh Banewar </div>
            </footer>
        </>
    );
}

export default Footer;

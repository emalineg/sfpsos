import './Footer.css';
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>This is an ACS 1320 Assignment </p>
            <p>The current year is {currentYear} </p>
            <ul className="no-bullets">
                <li><a href="https://www.dominican.edu/academics/undergraduate-programs/applied-computer-science-acs">ACS Program Link</a></li>
                <li><a href="https://github.com/Tech-at-DU">Program Github Organization</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
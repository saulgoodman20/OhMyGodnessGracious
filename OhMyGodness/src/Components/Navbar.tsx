import { Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    const currentYear: any = new Date().getFullYear();
    return (
        <>
            <Navbar
                fluid={true}
            >
                <Navbar.Brand href="https://www.ukw.edu.pl/" target='_blank' className='LogoBrand'>
                    <img
                        src="https://www.ukw.edu.pl/img/ukw.svg"
                        className="h-8 sm:h-9"
                        alt="LOGO"
                    />
                </Navbar.Brand>
                <span className="currentYear">{currentYear}</span>
                <Navbar.Toggle />
                <Navbar.Collapse className='fixMargin md:bg-white md:mr-5 bg-slate-500 '>
                    {/* <div className='darkMode' onClick={handleDarkmode}>
                        <FontAwesomeIcon icon={faMoon} />
                    </div> */}
                    <div>
                        <NavLink to="/" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                            Strona główna
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/pdf" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                            Pliki PDF
                        </NavLink>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
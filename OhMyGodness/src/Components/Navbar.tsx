import { Navbar } from 'flowbite-react'
import { Dropdown } from 'flowbite-react'
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
                    <div>
                    <NavLink to="/home" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                        Strona główna
                    </NavLink>
                    </div>                
                    <div>
                        <Dropdown inline={true} arrowIcon={true} label="PDF-y">
                            <NavLink to="/pdf/1" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
                                <Dropdown.Item>
                                    PDF 1
                                </Dropdown.Item>
                            </NavLink>
                            <Dropdown.Divider />

                            <NavLink to="/pdf/2" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>

                                <Dropdown.Item>
                                    PDF 2
                                </Dropdown.Item>
                            </NavLink>

                            <Dropdown.Divider />

                            <NavLink to="/pdf/3" className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>

                                <Dropdown.Item>
                                    PDF 3
                                </Dropdown.Item>
                            </NavLink>
                        </Dropdown>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
import { useState } from "react"

const Header = () => {
	const [click, setClick] = useState(false)

	const toggleNavClick = () => setClick(!click)

	return (
		<header className="header">
			<div className="container | content">
				<nav className="nav">
					<div className="nav__inner">
						<a href="#" className="logo">
							<img src="/sc-logo.svg" alt="ShortCraft Logo" />
						</a>

						<ul className="nav__links | hide">
							<li>
								<a href="#" className="nav__link">
									Features
								</a>
							</li>
							<li>
								<a href="#" className="nav__link">
									Pricing
								</a>
							</li>
							<li>
								<a href="#" className="nav__link">
									Resources
								</a>
							</li>
						</ul>
					</div>

					<div className="buttons | hide">
						<a href="#" className="nav__link">
							Login
						</a>
						<a href="#" className="nav__link">
							Sign up
						</a>
					</div>
				</nav>

				<nav className={`mobile-nav ${click ? "show" : ""}`}>
					<ul className="nav__links | primary">
						<li>
							<a href="#" className="nav__link">
								Features
							</a>
						</li>
						<li>
							<a href="#" className="nav__link">
								Pricing
							</a>
						</li>
						<li>
							<a href="#" className="nav__link">
								Resources
							</a>
						</li>
					</ul>

					<ul className="nav__links | secondary">
						<li>
							<a href="#" className="nav__link">
								Login
							</a>
						</li>
						<li>
							<a href="#" className="nav__link | btn" datatype="wide">
								Sign up
							</a>
						</li>
					</ul>
				</nav>

				<div className="menu-icons" onClick={toggleNavClick}>
					{click ? (
						<button>
							<i className="fa-solid fa-close"></i>
						</button>
					) : (
						<button>
							<i className="fa-solid fa-bars"></i>
						</button>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header

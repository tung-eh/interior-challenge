const Nav = ({ active, children }) => {
  return (
    <a href="/#" className={active ? 'font-bold' : ''}>
      {children}
    </a>
  )
}

const Navbar = () => {
  return (
    <div className="grid grid-cols-4 gap-12">
      <Nav active>Home</Nav>
      <Nav>Collection</Nav>
      <Nav>About</Nav>
      <Nav>Contact</Nav>
    </div>
  )
}

export default Navbar

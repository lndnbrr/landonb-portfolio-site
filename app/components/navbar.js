
export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-8 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="text-xl font-bold">SCROLL UP</div>
      <ul className="flex gap-15">
        <li>
          <a href="#why" className="hover:text-gray-500 transition-colors">Why Software Development</a>
        </li>

        <li>
          <a href="#techstack" className="hover:text-gray-500 transition-colors">Tech Skills</a>
        </li>

        <li>
          <a href="#projects" className="hover:text-gray-500 transition-colors">Projects</a>
        </li>

        <li>
          <a href="#currentemployment" className="hover:text-gray-500 transition-colors">Current Employment</a>
        </li>

        <li>
          <a href="#volunteerwork" className="hover:text-gray-500 transition-colors"> Volunteer Work</a>
        </li>

        <li>
          <a href="#misc" className="hover:text-gray-500 transition-colors">Miscellaneous</a>
        </li>

        <li>
          <a href="#contact" className="hover:text-gray-500 transition-colors">Contact Me</a>
        </li>

      </ul>
    </nav>
  )
}

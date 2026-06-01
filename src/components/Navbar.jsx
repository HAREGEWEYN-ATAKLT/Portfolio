function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Haregeweyn
         </h1>

         <ul className="flex gap-6">
          <li>
            <a href="#about" className="hover:text-blue-400">
               About
            </a>
          </li>

          <li>
<a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
<li> <a href="#contact" className="hover:text-blue-400">
          Contact
        </a></li> 
         </ul>
       </div>
     </nav>
   );
 }

export default Navbar;




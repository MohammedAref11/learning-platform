function Footer() {
  return (
    <footer className="bg-black border-t border-white border-opacity-10 py-3xl">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl mb-2xl">
          <div>
            <h4 className="text-primary font-bold mb-md">Learning Paths</h4>
            <ul className="space-y-sm text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Week 1-7: Foundations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Week 8-11: Advanced</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Week 12-14: Production</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-secondary font-bold mb-md">Resources</h4>
            <ul className="space-y-sm text-gray-400 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Code Examples</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-success font-bold mb-md">Support</h4>
            <ul className="space-y-sm text-gray-400 text-sm">
              <li><a href="#" className="hover:text-success transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-success transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-warning font-bold mb-md">Legal</h4>
            <ul className="space-y-sm text-gray-400 text-sm">
              <li><a href="#" className="hover:text-warning transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-warning transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-warning transition-colors">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 pt-2xl text-center text-gray-400">
          <p>&copy; 2024 Learning Platform. Built with React, GSAP, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

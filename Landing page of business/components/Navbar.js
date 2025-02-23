function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav data-name="navbar" className="bg-white fixed w-full z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span data-name="logo" className="text-2xl font-bold gradient-text">SaaSify</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a data-name="nav-features" href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                        <a data-name="nav-pricing" href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
                        <a data-name="nav-testimonials" href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
                        <button data-name="nav-cta" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                            Get Started
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button 
                            data-name="mobile-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700"
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div data-name="mobile-menu" className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
                        <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</a>
                        <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
                        <button className="w-full text-left px-3 py-2 text-blue-600">Get Started</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

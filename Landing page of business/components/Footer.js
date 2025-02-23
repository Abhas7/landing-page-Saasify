function Footer() {
    return (
        <footer data-name="footer" className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div data-name="footer-brand">
                        <h3 className="text-2xl font-bold mb-4">SaaSify</h3>
                        <p className="text-gray-400">Transform your business with our powerful SaaS platform.</p>
                    </div>
                    <div data-name="footer-product">
                        <h4 className="text-lg font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-company">
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-social">
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white text-xl">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-xl">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white text-xl">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 SaaSify. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

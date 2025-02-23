function Hero() {
    return (
        <div data-name="hero" className="hero-gradient pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6 fade-in">
                        Transform Your Business with 
                        <span className="gradient-text"> SaaSify</span>
                    </h1>
                    <p data-name="hero-subtitle" className="text-xl text-gray-600 mb-8 slide-up">
                        Streamline your operations, boost productivity, and scale your business
                        with our all-in-one platform.
                    </p>
                    <div data-name="hero-cta" className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                            Start Free Trial
                        </button>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition">
                            Watch Demo
                        </button>
                    </div>
                    <div data-name="hero-stats" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">10k+</div>
                            <div className="text-gray-600">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">98%</div>
                            <div className="text-gray-600">Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text">99.9%</div>
                            <div className="text-gray-600">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

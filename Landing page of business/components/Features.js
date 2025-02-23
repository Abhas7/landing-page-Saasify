function Features() {
    const features = [
        {
            icon: "fa-chart-line",
            title: "Analytics Dashboard",
            description: "Get real-time insights into your business performance"
        },
        {
            icon: "fa-robot",
            title: "AI-Powered Automation",
            description: "Automate repetitive tasks and focus on what matters"
        },
        {
            icon: "fa-cloud",
            title: "Cloud Integration",
            description: "Seamlessly connect with your favorite tools and services"
        },
        {
            icon: "fa-shield-alt",
            title: "Enterprise Security",
            description: "Bank-level security to protect your sensitive data"
        },
        {
            icon: "fa-users",
            title: "Team Collaboration",
            description: "Work together efficiently with built-in collaboration tools"
        },
        {
            icon: "fa-mobile-alt",
            title: "Mobile Access",
            description: "Access your dashboard anywhere, anytime"
        }
    ];

    return (
        <section data-name="features" id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 data-name="features-title" className="text-3xl font-bold mb-4">Powerful Features</h2>
                    <p data-name="features-subtitle" className="text-gray-600">Everything you need to succeed in one place</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            data-name={`feature-card-${index}`}
                            className="bg-white p-6 rounded-lg shadow-sm card-hover"
                        >
                            <div className="text-blue-600 text-3xl mb-4">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

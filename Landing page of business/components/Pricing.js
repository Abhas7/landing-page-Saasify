function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "29",
            features: [
                "Basic Analytics",
                "5 Team Members",
                "10GB Storage",
                "Email Support",
                "Basic Integrations"
            ],
            isPopular: false
        },
        {
            name: "Professional",
            price: "99",
            features: [
                "Advanced Analytics",
                "Unlimited Team Members",
                "100GB Storage",
                "24/7 Priority Support",
                "Advanced Integrations",
                "Custom Reports"
            ],
            isPopular: true
        },
        {
            name: "Enterprise",
            price: "299",
            features: [
                "Custom Analytics",
                "Unlimited Everything",
                "1TB Storage",
                "Dedicated Support",
                "Custom Development",
                "SLA Guarantee"
            ],
            isPopular: false
        }
    ];

    return (
        <section data-name="pricing" id="pricing" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 data-name="pricing-title" className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p data-name="pricing-subtitle" className="text-gray-600">No hidden fees. Choose the plan that's right for you.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            data-name={`pricing-card-${index}`}
                            className={`pricing-card bg-white rounded-lg p-8 ${plan.isPopular ? 'border-blue-500 border-2' : ''}`}
                        >
                            {plan.isPopular && (
                                <div className="text-blue-600 text-sm font-semibold mb-4">MOST POPULAR</div>
                            )}
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className={`w-full py-3 rounded-lg transition ${
                                    plan.isPopular 
                                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

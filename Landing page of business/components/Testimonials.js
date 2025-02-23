function Testimonials() {
    const testimonials = [
        {
            quote: "SaaSify has completely transformed how we manage our business. The analytics features are incredible!",
            author: "Sarah Johnson",
            role: "CEO, TechStart",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
            quote: "The automation capabilities have saved us countless hours. It's been a game-changer for our team.",
            author: "Michael Chen",
            role: "CTO, InnovateCorp",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
            quote: "Best customer support I've ever experienced. They're always there when you need them.",
            author: "Emily Rodriguez",
            role: "Operations Manager, GlobalTech",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
        }
    ];

    return (
        <section data-name="testimonials" id="testimonials" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 data-name="testimonials-title" className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                    <p data-name="testimonials-subtitle" className="text-gray-600">Don't just take our word for it</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            data-name={`testimonial-card-${index}`}
                            className="bg-white p-6 rounded-lg shadow-sm"
                        >
                            <div className="mb-4">
                                <i className="fas fa-quote-left text-blue-600 text-3xl"></i>
                            </div>
                            <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                            <div className="flex items-center">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.author}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <div className="font-semibold">{testimonial.author}</div>
                                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

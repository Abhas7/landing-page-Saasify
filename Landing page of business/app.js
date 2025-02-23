function App() {
    return (
        <div data-name="app">
            <Navbar />
            <Hero />
            <Features />
            <Testimonials />
            <Pricing />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

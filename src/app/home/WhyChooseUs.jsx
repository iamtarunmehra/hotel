export default function WhyChooseUs() {
    const features = [
        {
            icon: "🏠",
            title: "Premium Apartments",
            description: "Carefully designed spaces with modern interiors, premium furnishings, and exceptional comfort."
        },
        {
            icon: "📍",
            title: "Prime Locations",
            description: "Stay close to business hubs, tourist attractions, restaurants, and entertainment centers."
        },
        {
            icon: "🛎️",
            title: "24/7 Assistance",
            description: "Our support team is available around the clock to ensure a seamless experience."
        },
        {
            icon: "🔒",
            title: "Safe & Secure",
            description: "Enjoy peace of mind with secure access, CCTV monitoring, and verified properties."
        }
    ];

    return (
        <section className="bg-white lg:py-16 py-10">
            <div className="max-w-330 mx-auto lg:px-6 px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className="uppercase tracking-[4px] text-cyan-700 font-medium"
                    >
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-800">
                        Experience Comfort,
                        <span className="text-cyan-700"> Luxury & Trust</span>
                    </h2>

                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className="max-w-2xl mx-auto mt-6 text-gray-600 leading-8"
                    >
                        We provide premium rental apartments designed to deliver
                        a comfortable, secure, and memorable stay for every guest.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 p-8 hover:border-cyan-700 duration-300 group"
                        >
                            <div className="text-5xl mb-5">
                                {item.icon}
                            </div>

                            <h3
                                style={{ fontFamily: 'Poppins' }}
                                className="text-xl font-semibold mb-4"
                            >
                                {item.title}
                            </h3>

                            <p
                                style={{ fontFamily: 'Poppins' }}
                                className="text-gray-600 leading-7"
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
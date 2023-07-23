
import ConatctForm from "@/components/ContactForm";

export default () => {

    return (
        <main className="flex overflow-hidden">
            <div className="flex-1 hidden lg:block">
                <img src="https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg" className="w-full h-screen object-cover" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Get in touch
                        </h3>
                        <p className="mt-3">
                            We’d love to hear from you! Please fill out the form bellow.
                        </p>
                    </div>
                    <ConatctForm />
                </div>
            </div>
        </main>
    )
}
import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
    const allServices = [
        {
            title: "Classic Haircut",
            description: "Precision cut tailored to your style, finished with a hot towel.",
            price: "KSH 350",
            duration: "45 min",
        },
        {
            title: "Skin Fade",
            description: "Seamless fade with razor finish.",
            price: "KSH 400",
            duration: "50 min",
        },
        {
            title: "Beard Trim & Shape",
            description: "Sculpting and conditioning for a perfect beard.",
            price: "KSH 250",
            duration: "30 min",
        },
        {
            title: "The Royal Shave",
            description: "Traditional straight razor shave with hot lather and oils.",
            price: "KSH 450",
            duration: "45 min",
        },
        {
            title: "Haircut & Beard Combo",
            description: "The full package. Haircut and beard trim.",
            price: "KSH 5500",
            duration: "1 hr 15 min",
        },
        {
            title: "Kids Cut",
            description: "For the young gentlemen (under 12).",
            price: "KSH 250",
            duration: "30 min",
        },
    ];

    return (
        <div className="container py-16 px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
                    Service <span className="text-primary">Menu</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Choose from our range of premium grooming services.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {allServices.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
}

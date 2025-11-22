import { BookingForm } from "@/components/BookingForm";

export default function BookPage() {
    return (
        <div className="container py-16 px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
                    Book <span className="text-primary">Appointment</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Secure your spot with our master barbers.
                </p>
            </div>

            <BookingForm />
        </div>
    );
}

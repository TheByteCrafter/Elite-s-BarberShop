import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-background text-center">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
                <div className="h-full w-full bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative z-10 flex flex-col items-center gap-6 px-4">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                    <span>Now Open in Ndagani, Chuka</span>
                </div>

                <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                    ELEVATE YOUR <br />
                    <span className="text-primary">STYLE</span>
                </h1>

                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Experience the art of grooming with our master barbers.
                    Classic cuts, modern styles, and premium service in a relaxing atmosphere.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg" className="bg-primary text-lg font-semibold text-white hover:bg-primary/90">
                        <Link href="/book">Book Appointment</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-primary/20 bg-transparent text-lg font-semibold text-white hover:bg-primary/10 hover:text-primary">
                        <Link href="/services">View Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

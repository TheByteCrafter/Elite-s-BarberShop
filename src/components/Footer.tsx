import Link from "next/link";
import { Scissors } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-6 md:py-12">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                <div className="flex items-center gap-2">
                    <Scissors className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold text-foreground">ELITE'S BARBERSHOP</span>
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Elite's BarberShop. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Instagram
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Twitter
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Facebook
                    </Link>
                </div>
            </div>
        </footer>
    );
}

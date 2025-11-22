import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, CurrencyIcon, DollarSign } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    duration: string;
}

export function ServiceCard({ title, description, price, duration }: ServiceCardProps) {
    return (
        <Card className="flex h-full flex-col border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
                <CardDescription className="text-muted-foreground">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CurrencyIcon className="h-4 w-4 text-primary" />
                        <span className="text-lg font-semibold text-white">{price}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full bg-secondary text-white hover:bg-primary hover:text-white">
                    <Link href="/book">Book Now</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

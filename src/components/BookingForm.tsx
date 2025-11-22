"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Check, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    { id: "classic", name: "Classic Haircut", price: 100 },
    { id: "beard", name: "Beard Trim", price: 250 },
    { id: "shave", name: "Royal Shave", price: 450 },
    { id: "combo", name: "Haircut & Beard", price: 550 },
];

const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"
];

export function BookingForm() {
    const [date, setDate] = useState<Date>();
    const [service, setService] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleBook = async () => {
        setIsProcessing(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsProcessing(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <Card className="w-full max-w-md mx-auto border-primary/50 bg-card">
                <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Booking Confirmed!</h2>
                    <p className="text-muted-foreground">
                        See you on {date ? format(date, "PPP") : ""} at {time}.
                    </p>
                    <Button onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                        setDate(undefined);
                        setService("");
                        setTime("");
                    }} className="mt-4">
                        Book Another
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-2xl mx-auto border-border bg-card">
            <CardHeader>
                <CardTitle className="text-2xl text-white">Book Your Appointment</CardTitle>
                <CardDescription>Select a service, date, and time.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Service</Label>
                    <Select onValueChange={setService} value={service}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map((s) => (
                                <SelectItem key={s.id} value={s.id}>
                                    {s.name} - KSH {s.price}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <Label>Time</Label>
                        <Select onValueChange={setTime} value={time} disabled={!date}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                                {timeSlots.map((t) => (
                                    <SelectItem key={t} value={t}>
                                        {t}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                    <Label>Your Details</Label>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input placeholder="Name" />
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Phone" type="tel" />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    size="lg"
                    disabled={!service || !date || !time || isProcessing}
                    onClick={handleBook}
                >
                    {isProcessing ? "Processing..." : (
                        <span className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Pay & Book
                        </span>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}

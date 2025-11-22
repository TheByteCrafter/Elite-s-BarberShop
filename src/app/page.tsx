import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  const featuredServices = [
    {
      image: "https://storage.googleapis.com/msgsndr/nBxcqw0KYdRWRYv4QFkz/media/6772ae4aa28a50a7c9e52141.jpeg",
      title: "Classic Haircut",
      description: "Precision cut tailored to your style, finished with a hot towel.",
      price: "KSH 100",
      duration: "45 min",
    },
    {
      image: "https://d2zdpiztbgorvt.cloudfront.net/us/images/205583/cover_156098708860.jpeg?size=640x427",
      title: "Beard Trim & Shape",
      description: "Sculpting and conditioning for a perfect beard.",
      price: "KSH 250",
      duration: "30 min",
    },
    {
      image: "https://www.fifthavebarbershop.com/wp-content/uploads/2022/09/royal-hot-towel-shave-with-razor-1.webp",
      title: "The Royal Shave",
      description: "Traditional straight razor shave with hot lather and oils.",
      price: "KSH 450",
      duration: "45 min",
    },

  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Premium grooming services designed for the modern gentleman.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                More Than Just a <span className="text-primary">Haircut</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We believe that a haircut is not just a service, but an experience.
                Our shop is designed to be a sanctuary where you can relax, unwind,
                and leave looking and feeling your best.
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Expert Barbers with 1+ years experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Complimentary beverages
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Premium grooming products
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted/50">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <Image src={"/barberShop.jpg"} alt="Shop Interior Image" width={500} height={500} className="object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

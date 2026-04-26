
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Trees, BookOpen, Users, Droplets } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-nature");
  const highlights = [
    {
      title: "Outdoor Training",
      desc: "Leadership and team-building programs set in the wild.",
      icon: Trees,
      image: "outdoor-training"
    },
    {
      title: "Nature School",
      desc: "Educational programs for students to reconnect with the environment.",
      icon: BookOpen,
      image: "nature-school"
    },
    {
      title: "Environmental Impact",
      desc: "Direct actions through mangrove planting and reforestation.",
      icon: Droplets,
      image: "mangrove-planting"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-4xl px-4 text-center text-white">
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
              Transforming Lives Through <span className="text-accent">Nature</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto text-white/90">
              Join Tunong Baroh for experiential learning, environmental action, and leadership development in the heart of Aceh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/50 hover:bg-white/20 text-lg px-8">
                Book a Session
              </Button>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold text-primary mb-4">Why Tunong Baroh?</h2>
              <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe that the best way to learn is through experience. Our programs are designed to challenge and inspire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Facilitators</h3>
                <p className="text-muted-foreground">Our team consists of certified outdoor management professionals and environmentalists.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Trees className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pristine Locations</h3>
                <p className="text-muted-foreground">We operate in some of the most beautiful and diverse natural environments in Indonesia.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real Impact</h3>
                <p className="text-muted-foreground">Every session contributes directly to our mangrove planting and reforestation initiatives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl font-bold text-primary mb-4">Featured Programs</h2>
                <p className="text-muted-foreground">Tailored experiences for schools, corporate teams, and communities.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold group">
                <Link href="/programs" className="flex items-center gap-2">
                  View All Programs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, idx) => {
                const imgData = PlaceHolderImages.find(p => p.id === item.image);
                return (
                  <Card key={idx} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
                    <div className="relative h-64">
                      <Image
                        src={imgData?.imageUrl || ""}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={imgData?.imageHint}
                      />
                    </div>
                    <CardContent className="p-8">
                      <item.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold mb-3 font-headline">{item.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{item.desc}</p>
                      <Button asChild variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary hover:text-white">
                        <Link href={`/programs/${idx}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Trees Planted</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Programs Conducted</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">12,000+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Lives Impacted</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">45+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Partner Schools</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">Ready to start your adventure?</h2>
              <p className="text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto">
                Join our next outdoor session and experience the healing power of nature first-hand.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground rounded-full px-10 h-14 text-lg">
                  Booking Catalog
                </Button>
                <Button size="lg" variant="outline" className="border-accent-foreground/20 bg-white/10 text-accent-foreground rounded-full px-10 h-14 text-lg hover:bg-white/20">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

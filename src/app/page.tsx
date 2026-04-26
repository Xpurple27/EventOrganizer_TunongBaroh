
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Trees, BookOpen, Users, Droplets, ClipboardCheck } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-nature");
  const highlights = [
    {
      title: "Manajemen & Kepemimpinan",
      desc: "Pelatihan intensif untuk membangun kapasitas organisasi dan kepemimpinan yang berintegritas.",
      icon: Users,
      image: "indoor-leadership",
      id: "1"
    },
    {
      title: "Konservasi & Rehabilitasi",
      desc: "Aksi nyata rehabilitasi pesisir dan penanaman mangrove untuk menjaga garis pantai Aceh.",
      icon: Droplets,
      image: "mangrove-planting",
      id: "4"
    },
    {
      title: "Pengelolaan Lingkungan",
      desc: "Pelatihan praktik pengelolaan limbah dan monitoring lingkungan yang berkelanjutan.",
      icon: ClipboardCheck,
      image: "gallery-1",
      id: "3"
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
              Mengubah Hidup Melalui <span className="text-accent">Alam</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto text-white/90">
              Bergabunglah dengan Tunong Baroh untuk pembelajaran eksperiensial, aksi lingkungan, dan pengembangan kepemimpinan di jantung Aceh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                <Link href="/programs">Jelajahi Program</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/50 hover:bg-white/20 text-lg px-8">
                <Link href="/booking">Pesan Sesi</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold text-primary mb-4">Mengapa Tunong Baroh?</h2>
              <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kami percaya bahwa cara terbaik untuk belajar adalah melalui pengalaman langsung. Program kami dirancang untuk menantang, mengedukasi, dan menginspirasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fasilitator Ahli</h3>
                <p className="text-muted-foreground">Tim profesional bersertifikat dalam manajemen outdoor dan pelestarian lingkungan.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Trees className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lokasi Strategis</h3>
                <p className="text-muted-foreground">Beroperasi di situs alam terbaik Aceh, mulai dari pesisir hingga hutan pegunungan.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Kolaborasi DLHK</h3>
                <p className="text-muted-foreground">Bekerja sama dengan instansi terkait untuk menjamin kualitas materi dan dampak lingkungan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl font-bold text-primary mb-4">Program Unggulan</h2>
                <p className="text-muted-foreground">Pengalaman yang disesuaikan untuk sekolah, instansi pemerintah, dan tim korporat.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold group">
                <Link href="/programs" className="flex items-center gap-2">
                  Lihat Semua Program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                      <h3 className="text-2xl font-bold mb-3 font-headline h-16">{item.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{item.desc}</p>
                      <Button asChild variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary hover:text-white">
                        <Link href={`/programs?cat=all`}>Pelajari Lebih Lanjut</Link>
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
                <div className="text-4xl md:text-5xl font-bold mb-2">5.000+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Pohon Ditanam</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Program Terlaksana</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">12.000+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Jiwa Terdampak</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">45+</div>
                <div className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Mitra Instansi</div>
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
              
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">Siap memulai petualangan Anda?</h2>
              <p className="text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto">
                Bergabunglah dalam sesi pelatihan kami berikutnya dan rasakan transformasi melalui kekuatan alam Aceh.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-full px-10 h-14 text-lg">
                  <Link href="/programs">Katalog Program</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent-foreground/20 bg-white/10 text-accent-foreground rounded-full px-10 h-14 text-lg hover:bg-white/20">
                  <Link href="/contact">Hubungi Kami</Link>
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

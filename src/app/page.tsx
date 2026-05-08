
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Trees, Users, Droplets, ClipboardCheck, Award, CheckCircle, Briefcase } from "lucide-react";
import { BrandName } from "@/components/ui/brand-name";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-nature");
  const highlights = [
    {
      title: "Kepemimpinan & Kerja Tim",
      desc: "Program Outdoor Leadership yang mengasah jiwa kepemimpinan dan kolaborasi melalui tantangan di alam terbuka.",
      icon: Users,
      image: "gallery-2"
    },
    {
      title: "Penanaman 1000 Pohon",
      desc: "Inisiatif restorasi skala besar melalui kolaborasi strategis dengan berbagai organisasi dan instansi pemerintah.",
      icon: Trees,
      image: "hero-nature"
    },
    {
      title: "Pengelolaan Lingkungan",
      desc: "Pelatihan praktik langsung untuk pengelolaan limbah dan standar lingkungan yang berkelanjutan.",
      icon: ClipboardCheck,
      image: "gallery-1"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="Hero Background"
            fill
            className="object-cover animate-in fade-in zoom-in duration-1000"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="relative z-10 max-w-4xl px-4 text-center text-white animate-in slide-in-from-bottom-10 duration-700 delay-200 fill-mode-both">
            <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
              Mengubah Hidup Melalui <span className="text-accent">Alam</span>
            </h1>
            <div className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto text-white/90 flex flex-wrap justify-center items-center gap-2">
              <span>Bergabunglah dengan</span>
              <BrandName size="md" className="inline-flex" />
              <span>untuk pembelajaran eksperiensial, aksi lingkungan, dan pengembangan kepemimpinan di jantung Aceh.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all rounded-full px-10 h-14 text-lg">
                <Link href="/programs">Jelajahi Program</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/50 hover:bg-white/20 hover:scale-105 transition-all rounded-full px-10 h-14 text-lg">
                <Link href="/booking">Pesan Sesi</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience / Track Record Summary */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Briefcase className="h-4 w-4" />
              Berpengalaman Sejak 2006
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-8">Dipercaya Oleh Berbagai Instansi</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              <div className="font-bold text-xl text-muted-foreground italic">LEMHANAS RI</div>
              <div className="font-bold text-xl text-muted-foreground italic">BRR NAD-Nias</div>
              <div className="font-bold text-xl text-muted-foreground italic">Rumah Zakat</div>
              <div className="font-bold text-xl text-muted-foreground italic">LPP-RRI</div>
              <div className="font-bold text-xl text-muted-foreground italic">IBU Foundation</div>
            </div>
            <div className="mt-12">
              <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/profile#track-record">Lihat Rekam Jejak Lengkap</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-in fade-in duration-700">
              <div className="flex flex-col items-center justify-center gap-4 mb-6">
                <span className="text-muted-foreground text-xl">Mengapa</span>
                <BrandName size="lg" withSubtext />
                <span className="text-muted-foreground text-xl">?</span>
              </div>
              <div className="h-1.5 w-24 bg-accent mx-auto mb-8 rounded-full" />
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Kami percaya bahwa cara terbaik untuk belajar adalah melalui pengalaman langsung. Program kami dirancang untuk menantang, mengedukasi, dan menginspirasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { icon: Award, title: "Sertifikasi & Kualitas", desc: "Materi pelatihan yang disusun secara profesional sesuai standar pengelolaan lingkungan terkini." },
                { icon: Trees, title: "Ekosistem Beragam", desc: "Beroperasi di situs alam terbaik Aceh, mulai dari pesisir hingga pegunungan." },
                { icon: Droplets, title: "Dampak Nyata", desc: "Bekerja sama dengan DLHK untuk menjamin keberlanjutan dampak lingkungan dari setiap program." }
              ].map((item, i) => (
                <div key={i} className="text-center group p-6 rounded-3xl hover:bg-secondary/20 transition-all duration-300">
                  <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-headline">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-32 bg-secondary/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Program Unggulan</h2>
                <p className="text-xl text-muted-foreground">Pengalaman yang disesuaikan untuk sekolah, instansi pemerintah, dan tim korporat.</p>
              </div>
              <Button asChild variant="link" className="text-primary font-bold group text-lg">
                <Link href="/programs" className="flex items-center gap-2">
                  Lihat Semua Program <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {highlights.map((item, idx) => {
                const imgData = PlaceHolderImages.find(p => p.id === item.image);
                return (
                  <Card key={idx} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] group bg-white">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={imgData?.imageUrl || ""}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        data-ai-hint={imgData?.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <CardContent className="p-10 relative">
                      <div className="absolute -top-12 left-10 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 font-headline mt-4">{item.title}</h3>
                      <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed text-lg">{item.desc}</p>
                      <Button asChild variant="outline" className="w-full rounded-2xl border-primary text-primary hover:bg-primary hover:text-white h-12 text-lg font-bold">
                        <Link href={`/programs`}>Pelajari Lebih Lanjut</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Pohon Ditanam", value: "5.000+" },
                { label: "Program Terlaksana", value: "150+" },
                { label: "Jiwa Terdampak", value: "12.000+" },
                { label: "Mitra Instansi", value: "45+" }
              ].map((stat, i) => (
                <div key={i} className="hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold mb-3 font-headline">{stat.value}</div>
                  <div className="text-primary-foreground/70 uppercase tracking-widest text-sm font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-accent rounded-[4rem] p-16 md:p-24 text-center shadow-3xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
              
              <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 text-accent-foreground leading-tight">Siap memulai petualangan Anda?</h2>
              <p className="text-xl text-accent-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Bergabunglah dalam sesi pelatihan kami berikutnya dan rasakan transformasi melalui kekuatan alam Aceh.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-full px-12 h-16 text-xl shadow-xl hover:scale-105 active:scale-95 transition-all font-bold">
                  <Link href="/programs">Katalog Program</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent-foreground/20 bg-white/10 text-accent-foreground rounded-full px-12 h-16 text-xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all font-bold">
                  <Link href="/impact">Dampak Lingkungan</Link>
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


"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, History, Users, Award, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    slug: "awaludin-azril",
    name: "Awaludin Azril",
    role: "Penasehat",
    initial: "A",
  },
  {
    slug: "dedek-kombi",
    name: "Dedek Kombi",
    role: "Direktur Utama",
    initial: "D",
  },
  {
    slug: "muhammad-wafiq-afansa",
    name: "Muhammad Wafiq Afansa",
    role: "Manajer Administrasi",
    initial: "M",
  },
  {
    slug: "azkan-hazim-qaula",
    name: "Azkan Hazim Qaula",
    role: "Manajer Tempat dan Peralatan",
    initial: "A",
  },
  {
    slug: "himi-abdullah",
    name: "Himi Abdullah",
    role: "Manajer Diklat",
    initial: "H",
  },
];

export default function ProfilePage() {
  const aboutImg = PlaceHolderImages.find(i => i.id === "hero-nature");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Profile Hero */}
        <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-accent text-accent-foreground border-none px-4 py-1 text-sm font-bold">
                Mengenal Kami
              </Badge>
              <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Tunong Baroh Outdoor Management
              </h1>
              <p className="text-xl md:text-2xl font-light text-primary-foreground/90 leading-relaxed">
                Dedikasi untuk pengembangan karakter melalui alam dan aksi nyata pelestarian lingkungan di Bumi Serambi Mekkah.
              </p>
            </div>
          </div>
        </section>

        {/* Cerita Kami */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-left duration-700">
              <Image
                src={aboutImg?.imageUrl || ""}
                alt="Tentang Tunong Baroh"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8 animate-in slide-in-from-right duration-700">
              <div className="flex items-center gap-3 text-primary">
                <History className="h-6 w-6" />
                <h2 className="text-3xl font-headline font-bold">Cerita Kami</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tunong Baroh Outdoor Management Training lahir dari kecintaan mendalam terhadap alam Aceh dan kebutuhan akan kepemimpinan yang berwawasan lingkungan. Kami percaya bahwa ruang kelas terbaik tidak memiliki dinding, dan guru terbaik adalah pengalaman langsung di alam terbuka.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Berbasis di Banda Aceh, kami telah mendedikasikan diri untuk menjembatani antara pendidikan eksperiensial, pengembangan tim korporat, dan program konservasi strategis yang memberikan dampak berkelanjutan bagi ekosistem lokal.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Terpercaya</h4>
                    <p className="text-sm text-muted-foreground">Bekerja sama dengan instansi DLHK.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Profesional</h4>
                    <p className="text-sm text-muted-foreground">Instruktur berpengalaman di bidangnya.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Target className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-headline text-4xl font-bold text-primary mb-4">Visi & Misi</h2>
              <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="border-none shadow-xl rounded-[2.5rem] bg-white p-10 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                    <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">1</span>
                    Visi Utama
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Menjadi katalisator utama dalam pembentukan karakter pemimpin masa depan yang kompeten, berdaya saing, dan memiliki kepedulian tinggi terhadap pelestarian ekosistem alam, khususnya di wilayah Aceh.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl rounded-[2.5rem] bg-white p-10 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                    <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">2</span>
                    Misi Kami
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Menyelenggarakan pelatihan luar ruang berkualitas berbasis standar internasional.",
                      "Menginisiasi aksi konservasi nyata seperti penanaman mangrove dan penghijauan.",
                      "Edukasi lingkungan bagi generasi muda melalui program sekolah alam.",
                      "Membangun kolaborasi strategis antara pemerintah, swasta, dan masyarakat dalam menjaga alam."
                    ].map((misi, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <div className="h-2 w-2 bg-accent rounded-full mt-2.5 shrink-0" />
                        <span className="text-lg">{misi}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tim Kami */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="font-headline text-4xl font-bold text-primary mb-4">Tim Penggerak</h2>
            <p className="text-muted-foreground text-lg">Para profesional di balik program-program Tunong Baroh. Klik profil untuk detail.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Link href={`/profile/team/${member.slug}`} key={index}>
                <Card className="border-none bg-white shadow-lg rounded-3xl overflow-hidden group hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-5 h-full" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8 text-center flex flex-col items-center h-full justify-center">
                    <Avatar className="w-24 h-24 mb-6 border-4 border-secondary group-hover:border-primary transition-colors">
                      <AvatarFallback className="bg-primary text-white text-2xl font-bold">{member.initial}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
                    <div className="flex items-center gap-1 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Lihat Profil <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Lokasi */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 font-headline">Markas Operasional</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kami berbasis di Banda Aceh, mengelola berbagai situs kegiatan mulai dari pesisir pantai untuk mangrove hingga kawasan hutan lindung di seluruh Aceh.
            </p>
            <div className="bg-white p-4 rounded-3xl shadow-sm inline-block">
              <div className="px-6 py-3 border-2 border-dashed border-secondary rounded-2xl font-bold text-primary">
                Banda Aceh, Indonesia
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

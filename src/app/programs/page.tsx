
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Trees, School, Building2, Droplet, Search, ClipboardCheck, Trash2, Users, Waves, Bug } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "Semua Program", icon: null },
  { id: "env-mgmt", name: "Pengelolaan Lingkungan", icon: ClipboardCheck },
  { id: "conservation", name: "Konservasi & Kehutanan", icon: Trees },
  { id: "education", name: "Pendidikan & Keterampilan", icon: School },
];

const programs = [
  {
    id: "3",
    title: "Pelatihan Pengelolaan Lingkungan Berbasis Praktik",
    category: "env-mgmt",
    price: 1200000,
    duration: "2 Hari",
    desc: "Implementasi langsung standar pengelolaan lingkungan untuk sektor industri dan komunitas.",
    image: "gallery-1"
  },
  {
    id: "4",
    title: "Pelatihan Penanaman Mangrove & Rehabilitasi Pesisir",
    category: "conservation",
    price: 850000,
    duration: "1 Hari",
    desc: "Teknik pembibitan, penanaman, dan perawatan ekosistem mangrove untuk perlindungan pantai.",
    image: "mangrove-planting"
  },
  {
    id: "5",
    title: "Pelatihan Penghijauan & Urban Forestry",
    category: "conservation",
    price: 900000,
    duration: "2 Hari",
    desc: "Strategi pengembangan hutan kota dan ruang terbuka hijau di lingkungan padat penduduk.",
    image: "hero-nature"
  },
  {
    id: "6",
    title: "Outdoor Leadership & Team Building (Lingkungan)",
    category: "education",
    price: 1800000,
    duration: "3 Hari, 2 Malam",
    desc: "Kolaborasi tim melalui tantangan fisik di alam yang mengasah kepedulian lingkungan.",
    image: "gallery-2"
  },
  {
    id: "7",
    title: "Pelatihan Pengelolaan Sampah & Daur Ulang",
    category: "env-mgmt",
    price: 750000,
    duration: "1 Hari",
    desc: "Sistem manajemen limbah dari hulu ke hilir dengan pendekatan ekonomi sirkular.",
    image: "nature-school"
  },
  {
    id: "8",
    title: "Pelatihan Monitoring & Evaluasi Lingkungan",
    category: "env-mgmt",
    price: 1350000,
    duration: "2 Hari",
    desc: "Pengukuran dampak lingkungan menggunakan instrumen ilmiah dan pelaporan berkala.",
    image: "gallery-1"
  },
  {
    id: "9",
    title: "Program Sekolah Alam (Kolaborasi DLHK)",
    category: "education",
    price: 500000,
    duration: "1 Hari",
    desc: "Edukasi dini bagi generasi muda tentang pentingnya menjaga kelestarian alam Aceh.",
    image: "nature-school"
  },
  {
    id: "10",
    title: "Pelatihan Budidaya Lebah",
    category: "env-mgmt",
    price: 1100000,
    duration: "2 Hari",
    desc: "Belajar teknik budidaya lebah madu yang berkelanjutan untuk mendukung ekosistem dan ekonomi.",
    image: "gallery-school-1"
  },
  {
    id: "11",
    title: "Konservasi Alam: Penanaman Terumbu Karang",
    category: "conservation",
    price: 1500000,
    duration: "2 Hari",
    desc: "Aksi nyata restorasi ekosistem bawah laut melalui teknik transplantasi terumbu karang.",
    image: "gallery-rehab-1"
  },
  {
    id: "12",
    title: "Konservasi Alam: Penghijauan",
    category: "conservation",
    price: 800000,
    duration: "1 Hari",
    desc: "Program restorasi lahan kritis melalui penanaman vegetasi lokal untuk mengembalikan fungsi hutan.",
    image: "gallery-1"
  },
  {
    id: "13",
    title: "Konservasi Alam: Penanaman Pohon",
    category: "conservation",
    price: 750000,
    duration: "1 Hari",
    desc: "Inisiatif penanaman pohon produktif dan pelindung untuk memperkuat daya dukung lingkungan.",
    image: "hero-nature"
  },
  {
    id: "14",
    title: "Pelatihan Selam (Diving)",
    category: "education",
    price: 3500000,
    duration: "4 Hari",
    desc: "Kursus menyelam dasar hingga sertifikasi dengan fokus pada etika pengamatan bawah laut.",
    image: "gallery-2"
  }
];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programs.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <h1 className="font-headline text-5xl font-bold text-primary mb-4">Katalog Program</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Pilih dari berbagai pelatihan lingkungan, konservasi, dan pendidikan alam kami. Setiap program dirancang untuk memberikan dampak nyata bagi peserta dan bumi.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Cari pelatihan..."
                className="pl-10 h-12 bg-white rounded-xl border-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-6 h-12 ${activeCategory === cat.id ? 'bg-primary text-white' : 'border-secondary hover:bg-secondary/50'}`}
                >
                  {cat.icon && <cat.icon className="mr-2 h-4 w-4" />}
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => {
                const img = PlaceHolderImages.find(i => i.id === program.image);
                return (
                  <Card key={program.id} className="flex flex-col border-none shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative h-48">
                      <Image
                        src={img?.imageUrl || ""}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground capitalize border-none shadow-md">
                        {categories.find(c => c.id === program.category)?.name}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-headline text-xl h-14 line-clamp-2">{program.title}</CardTitle>
                      </div>
                      <p className="text-sm font-bold text-primary">{program.duration}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {program.desc}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-secondary/30 flex justify-between items-center bg-secondary/10">
                      <div className="text-lg font-bold text-primary">
                        Rp {program.price.toLocaleString()}
                        <span className="text-xs font-normal text-muted-foreground ml-1">/ orang</span>
                      </div>
                      <Button asChild size="sm" className="rounded-xl">
                        <Link href={`/booking?program=${program.id}`}>Pesan</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-secondary/10 rounded-3xl border-2 border-dashed border-secondary">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Program tidak ditemukan</h3>
              <p className="text-muted-foreground">Coba sesuaikan kategori atau kata kunci pencarian Anda.</p>
              <Button onClick={() => {setActiveCategory("all"); setSearchQuery("");}} variant="link" className="mt-4 text-primary">
                Hapus semua filter
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

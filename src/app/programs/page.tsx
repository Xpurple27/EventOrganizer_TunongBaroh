
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
import { Trees, School, Building2, Droplet, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "Semua Program", icon: null },
  { id: "outdoor", name: "Pelatihan Outdoor", icon: Trees },
  { id: "indoor", name: "Pelatihan Indoor", icon: Building2 },
  { id: "school", name: "Sekolah Alam", icon: School },
  { id: "impact", name: "Mangrove & Reboisasi", icon: Droplet },
];

const programs = [
  {
    id: "1",
    title: "Leadership Wilderness",
    category: "outdoor",
    price: 1500000,
    duration: "3 Hari, 2 Malam",
    desc: "Pelatihan kepemimpinan intensif di lingkungan hutan dalam yang fokus pada dinamika kelompok dan keterampilan bertahan hidup.",
    image: "outdoor-training"
  },
  {
    id: "2",
    title: "Junior Eco-Guardians",
    category: "school",
    price: 350000,
    duration: "1 Hari (Kunjungan Lapangan)",
    desc: "Kunjungan lapangan edukatif untuk siswa sekolah dasar untuk mempelajari ekosistem lokal dan keanekaragaman hayati.",
    image: "nature-school"
  },
  {
    id: "3",
    title: "Eco-Corporate Retreat",
    category: "indoor",
    price: 2500000,
    duration: "2 Hari, 1 Malam",
    desc: "Retret mewah namun sadar lingkungan yang menggabungkan lokakarya strategis indoor dengan jalan santai di alam.",
    image: "indoor-leadership"
  },
  {
    id: "4",
    title: "Konservasi Mangrove",
    category: "impact",
    price: 500000,
    duration: "Setengah Hari",
    desc: "Program aksi komunitas di mana peserta menanam bibit mangrove dan belajar tentang perlindungan pesisir.",
    image: "mangrove-planting"
  },
  {
    id: "5",
    title: "Dasar Survival Pegunungan",
    category: "outdoor",
    price: 850000,
    duration: "2 Hari",
    desc: "Keterampilan penting untuk penggemar outdoor: navigasi, menyalakan api, dan membangun tempat berteduh.",
    image: "hero-nature"
  },
  {
    id: "6",
    title: "Forest Academy Level 1",
    category: "school",
    price: 1200000,
    duration: "Seri Akhir Pekan",
    desc: "Pendidikan alam berbasis kurikulum untuk siswa SMA yang tertarik pada kehutanan dan konservasi.",
    image: "gallery-1"
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
              Pilih dari berbagai pelatihan berbasis alam dan aktivitas pendidikan kami. Setiap pemesanan mendukung inisiatif lingkungan lokal kami.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Cari program..."
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
                        <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
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
                        <Link href={`/programs/${program.id}`}>Detail</Link>
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

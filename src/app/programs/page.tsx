
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
import { Trees, School, Building2, Droplet, Search, ClipboardCheck, Users, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const categories = [
  { id: "all", name: "Semua", icon: null },
  { id: "env-mgmt", name: "Lingkungan", icon: ClipboardCheck },
  { id: "conservation", name: "Konservasi", icon: Trees },
  { id: "education", name: "Pendidikan", icon: School },
];

const programs = [
  { id: "3", title: "Pengelolaan Lingkungan Praktik", category: "env-mgmt", priceRange: "Rp 35rb - 200rb", minPeople: 30, duration: "2 Hari", desc: "Implementasi langsung standar pengelolaan lingkungan sesuai kelompok usia.", image: "gallery-1", isTiered: true },
  { id: "4", title: "Penanaman Mangrove & Pesisir", category: "conservation", priceRange: "Kemitraan", minPeople: null, duration: "1 Hari", desc: "Program kerja sama khusus dengan organisasi, pemerintah, maupun swasta.", image: "mangrove-planting", isPartnership: true },
  { id: "5", title: "Penanaman 1000 Pohon", category: "conservation", priceRange: "Kemitraan", minPeople: null, duration: "Fleksibel", desc: "Inisiatif restorasi skala besar melalui kerja sama strategis.", image: "hero-nature", isPartnership: true },
  { id: "6", title: "Outdoor Leadership", category: "education", priceRange: "Rp 35rb - 200rb", minPeople: 30, duration: "3 Hari", desc: "Kolaborasi tim melalui tantangan fisik dan mental di alam terbuka.", image: "gallery-2", isTiered: true },
  { id: "7", title: "Pengelolaan Sampah & Daur Ulang", category: "env-mgmt", priceRange: "Rp 35rb - 200rb", minPeople: 30, duration: "1 Hari", desc: "Sistem manajemen limbah hulu ke hilir berbasis praktik.", image: "nature-school", isTiered: true },
  { id: "9", title: "Program Sekolah Alam (DLHK)", category: "education", priceRange: "Rp 500.000", minPeople: null, duration: "1 Hari", desc: "Edukasi dini bagi generasi muda tentang kelestarian alam Aceh.", image: "gallery-school-1" },
  { id: "10", title: "Pelatihan Budidaya Lebah", category: "env-mgmt", priceRange: "Rp 3.000.000", minPeople: null, duration: "2 Hari", desc: "Teknik budidaya lebah madu berkelanjutan untuk ekonomi warga.", image: "gallery-school-1" },
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
      
      <main className="flex-grow py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-center md:text-left">
            <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4">Katalog Program</h1>
            <p className="text-muted-foreground text-sm md:text-lg max-w-2xl">
              Pilih dari berbagai pelatihan lingkungan dan pendidikan alam kami yang dirancang untuk dampak nyata.
            </p>
          </header>

          <div className="flex flex-col gap-4 mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Cari program..."
                className="pl-10 h-12 bg-white rounded-2xl border-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Scrollable categories for mobile */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 h-10 shrink-0 text-xs font-bold ${activeCategory === cat.id ? 'bg-primary text-white' : 'border-secondary bg-white'}`}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPrograms.map((program) => {
                const img = PlaceHolderImages.find(i => i.id === program.image);
                return (
                  <Card key={program.id} className="flex flex-col border-none shadow-lg rounded-[2rem] overflow-hidden bg-white hover:shadow-xl transition-shadow">
                    <div className="relative h-48 md:h-56">
                      <Image
                        src={img?.imageUrl || ""}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-[10px] font-bold border-none shadow-md px-3">
                        {categories.find(c => c.id === program.category)?.name}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2 px-6">
                      <CardTitle className="font-headline text-lg md:text-xl line-clamp-2 h-14 md:h-16">{program.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-tight">{program.duration}</span>
                        {program.minPeople && (
                          <Badge variant="outline" className="text-[9px] border-secondary bg-secondary/10">Min {program.minPeople}</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow px-6 pb-4">
                      <p className="text-muted-foreground text-xs md:text-sm line-clamp-3 leading-relaxed">
                        {program.desc}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-secondary/20 flex flex-wrap justify-between items-center bg-secondary/5 px-6 pb-6">
                      <div className="flex flex-col">
                        <div className="text-base md:text-lg font-bold text-primary">{program.priceRange}</div>
                        {!program.isPartnership && <span className="text-[9px] text-muted-foreground">per orang</span>}
                      </div>
                      <div className="flex gap-2">
                        {program.isTiered && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary rounded-full hover:bg-primary/10">
                                  <Info className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white p-4 rounded-xl shadow-xl border-secondary">
                                <p className="font-bold text-xs mb-2">Biaya Berjenjang:</p>
                                <ul className="text-[10px] space-y-1">
                                  <li>SD: Rp 35rb | SMP: Rp 50rb</li>
                                  <li>SMA: Rp 70rb | Mhs: Rp 150rb</li>
                                  <li>Dewasa: Rp 200rb</li>
                                </ul>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                        <Button asChild size="sm" className="rounded-xl px-5 h-10 font-bold shadow-md">
                          <Link href={`/booking?program=${program.id}`}>Pesan</Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-secondary/10 rounded-3xl border-2 border-dashed border-secondary">
              <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-lg">Tidak ditemukan</h3>
              <p className="text-muted-foreground text-sm">Coba kata kunci lain.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Camera, Layers, Filter } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "Semua Foto" },
  { id: "action", name: "Aksi Lingkungan" },
  { id: "training", name: "Pelatihan & Leadership" },
  { id: "school", name: "Sekolah Alam" },
];

const galleryItems = [
  { id: 1, imageId: "mangrove-planting", category: "action", title: "Penanaman Mangrove Pesisir" },
  { id: 2, imageId: "outdoor-training", category: "training", title: "Team Building Outdoor" },
  { id: 3, imageId: "nature-school", category: "school", title: "Siswa Belajar di Alam" },
  { id: 4, imageId: "indoor-leadership", category: "training", title: "Workshop Kepemimpinan" },
  { id: 5, imageId: "outbound-01", category: "training", title: "Keseruan Outbound 01" },
  { id: 6, imageId: "outbound-02", category: "training", title: "Keseruan Outbound 02" },
  { id: 7, imageId: "outbound-03", category: "training", title: "Keseruan Outbound 03" },
  { id: 8, imageId: "gallery-1", category: "action", title: "Kegiatan Penghijauan" },
  { id: 9, imageId: "gallery-2", category: "training", title: "Tantangan Fisik & Mental" },
  { id: 10, imageId: "gallery-mangrove-1", category: "action", title: "Konservasi Mangrove" },
  { id: 11, imageId: "gallery-team-1", category: "training", title: "Diskusi Kelompok" },
  { id: 12, imageId: "gallery-school-1", category: "school", title: "Observasi Flora" },
  { id: 13, imageId: "gallery-rehab-1", category: "action", title: "Rehabilitasi Pantai" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Gallery Hero */}
        <section className="bg-primary/5 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Camera className="h-4 w-4" />
              Galeri Kegiatan
            </div>
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-6">Momen Berharga Kami</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kumpulan dokumentasi aksi nyata kami di lapangan, mulai dari pelestarian ekosistem hingga pengembangan kapasitas sumber daya manusia.
            </p>
          </div>
        </section>

        {/* Filter & Gallery Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {galleryCategories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-6 ${
                    activeCategory === cat.id 
                      ? "bg-primary text-white" 
                      : "border-secondary hover:bg-secondary/50"
                  }`}
                >
                  {cat.name}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Filter className="h-4 w-4" />
              Menampilkan {filteredItems.length} foto
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const imgData = PlaceHolderImages.find((p) => p.id === item.imageId);
              return (
                <div 
                  key={item.id} 
                  className="group relative aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
                >
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                      {galleryCategories.find(c => c.id === item.category)?.name}
                    </span>
                    <h3 className="text-white text-xl font-headline font-bold">{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-secondary rounded-3xl">
              <Layers className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold">Tidak ada foto</h3>
              <p className="text-muted-foreground">Belum ada foto dalam kategori ini.</p>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-[3rem] shadow-sm">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Ingin Menjadi Bagian dari Cerita Ini?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Bergabunglah dengan program kami berikutnya dan ciptakan momen perubahan bersama Tunong Baroh.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14">
              <a href="/booking">Rencanakan Sekarang</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Droplets, Sprout, ShieldCheck, MapPin, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ImpactPage() {
  const [seedlingCount, setSeedlingCount] = useState(1);
  const pricePerSeedling = 25000;
  
  const mangroveImg = PlaceHolderImages.find(i => i.id === "mangrove-planting");
  const reforestationImg = PlaceHolderImages.find(i => i.id === "gallery-1");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Impact */}
        <div className="relative h-[50vh] flex items-center justify-center">
          <Image
            src={mangroveImg?.imageUrl || ""}
            alt="Hero Dampak"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">Dampak Kami</h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-sm font-light">
              Menyembuhkan Bumi melalui aksi langsung. Bergabunglah dengan misi kami untuk memulihkan warisan alam Aceh.
            </p>
          </div>
        </div>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-bold border border-accent/30">
                <Droplets className="h-4 w-4" />
                Program Unggulan
              </div>
              <h2 className="font-headline text-4xl font-bold text-primary">Inisiatif Penanaman Mangrove</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Abrasi pantai adalah ancaman nyata bagi pulau-pulau kita. Program mangrove kami fokus pada penanaman spesies Rhizophora dan Avicennia di zona pesisir kritis. "Hutan laut" ini menyediakan tempat pembibitan vital bagi kehidupan laut dan bertindak sebagai penyerap karbon.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Perlindungan Erosi</h4>
                    <p className="text-sm text-muted-foreground">Sistem akar yang kuat melindungi garis pantai.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Lokasi Lokal</h4>
                    <p className="text-sm text-muted-foreground">Kami beroperasi di wilayah pesisir Aceh.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src={mangroveImg?.imageUrl || ""}
                alt="Penanaman Mangrove"
                width={800}
                height={600}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                <p className="text-sm font-medium italic">"Waktu terbaik untuk menanam pohon adalah 20 tahun yang lalu. Waktu terbaik kedua adalah sekarang."</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none bg-secondary/30 p-8 rounded-3xl">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Sprout className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Beli Bibit</h3>
                <p className="text-muted-foreground mb-8">Danai langsung pertumbuhan pohon baru. Kami menangani penanaman dan pemeliharaan selama 3 tahun pertama.</p>
                
                <div className="space-y-4 text-left bg-white p-6 rounded-2xl shadow-sm mb-6">
                  <div>
                    <Label htmlFor="count" className="mb-2 block">Jumlah Bibit</Label>
                    <Input 
                      id="count"
                      type="number" 
                      min="1" 
                      value={seedlingCount} 
                      onChange={(e) => setSeedlingCount(parseInt(e.target.value) || 0)}
                      className="rounded-xl border-secondary"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2 border-t mt-4">
                    <span className="font-medium">Total Biaya:</span>
                    <span className="text-xl font-bold text-primary">Rp {(seedlingCount * pricePerSeedling).toLocaleString()}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary h-12 rounded-xl font-bold">Donasi Sekarang</Button>
              </CardContent>
            </Card>

            <Card className="border-none bg-accent/10 p-8 rounded-3xl md:col-span-2">
              <CardContent className="p-0 flex flex-col md:flex-row gap-12 h-full">
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6 font-headline text-primary">Bergabung dalam Kampanye</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Apakah perusahaan Anda sedang mencari mitra CSR? Kami menawarkan pelaporan komprehensif dan pelacakan GPS untuk semua proyek penanaman korporat.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Acara penanaman khusus untuk karyawan",
                      "Laporan dampak dengan data sekuestrasi karbon",
                      "Pengakuan merek di dinding dampak kami",
                      "Tur pembibitan berkelanjutan untuk pemangku kepentingan"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-10 border-primary text-primary hover:bg-primary hover:text-white rounded-xl h-12">
                    Tanya Kemitraan Korporat
                  </Button>
                </div>
                <div className="md:w-1/2 relative rounded-2xl overflow-hidden min-h-[300px]">
                  <Image
                    src={reforestationImg?.imageUrl || ""}
                    alt="Dampak CSR"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm p-2 rounded-lg text-xs">
                    <Info className="h-4 w-4" />
                    Markas: Banda Aceh
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, History, Users, Award, ShieldCheck, MapPin, ArrowRight, Calendar, CheckCircle, Briefcase, GraduationCap, Package2 } from "lucide-react";

const teamMembers = [
  { slug: "awaludin-azril", name: "Awaludin Azril", role: "Penasehat", initial: "A" },
  { slug: "dedek-kombi", name: "Dedek Kombi", role: "Direktur Utama", initial: "D" },
  { slug: "muhammad-wafiq-afansa", name: "Muhammad Wafiq Afansa", role: "Manajer Administrasi", initial: "M" },
  { slug: "azkan-hazim-qaula", name: "Azkan Hazim Qaula", role: "Manajer Tempat dan Peralatan", initial: "A" },
  { slug: "himi-abdullah", name: "Himi Abdullah", role: "Manajer Diklat", initial: "H" },
];

const pastEvents = [
  { year: "2015", title: "Outbound Pemantapan Nilai-Nilai Kebangsaan", location: "RINDAM IM, Mata Ie - Aceh Besar", client: "LEMHANAS RI" },
  { year: "2014", title: "Kids Programme", location: "Ds. Lhang, Aceh Besar", client: "SMPIT Nurul Fikri Aceh" },
  { year: "2014", title: "Capacity Building LPP - RRI Banda Aceh", location: "Beurayeun - Aceh Besar", client: "LPP - RRI Banda Aceh" },
  { year: "2013", title: "Up Grading Mentor", location: "Beurayeun - Aceh Besar", client: "Rumah Zakat" },
  { year: "2013", title: "Student Capacity Neuhen", location: "Neuhen - Aceh Besar", client: "Akper Tjoet Nyak Dhien" },
  { year: "2011", title: "Student Capacity Darussalam", location: "Darussalam - Banda Aceh", client: "Akper Tjoet Nyak Dhien" },
  { year: "2011", title: "Pembuatan Jalur Panjat Tebing Alam", location: "Lampuuk & Sabang", client: "Proyek Konservasi Alam" },
  { year: "2011", title: "Pelatihan Selam Dasar One Star", location: "Banda Aceh & Krueng Raya", client: "Pegiat Alam Terbuka" },
  { year: "2010", title: "Capacity Building Suak Seumaseh", location: "Aceh Barat", client: "IBU Foundation" },
  { year: "2009", title: "Games for Orphan", location: "Taman Putroe Phang", client: "Rumah Zakat" },
  { year: "2008", title: "Capacity Building Multi Lokasi", location: "Seulawah, Labuy, Singkil, Takengon", client: "BRR NAD - Nias" },
  { year: "2007", title: "Capacity Building Jantho", location: "Aceh Besar", client: "BEM Dakwah Ar-Raniry" },
  { year: "2006", title: "Outbound Economic Faculty", location: "Mata Ie - Aceh Besar", client: "LDK Al-Mizan, Unsyiah" },
];

const trainingEvents = [
  { year: "2011", title: "Basic High Rope Skill Jambore Aceh", location: "Nagan Raya", client: "Gerakan Pramuka Kwarda Aceh", role: "Pemateri" },
  { year: "2010", title: "Workshop Daur Ulang Sampah", location: "Lhokseumawe", client: "LSM Sepakat", role: "Pemateri" },
  { year: "2010", title: "Pelatihan Daur Ulang Kertas Siswa", location: "Lhokseumawe", client: "LSM Sepakat", role: "Pemateri" },
  { year: "2007", title: "Pelatihan Daur Ulang Kertas Pramuka", location: "Banda Aceh", client: "Gudep Unsyiah", role: "Pemateri" },
  { year: "2007", title: "Pelatihan Daur Ulang Kertas Masyarakat", location: "Darussalam", client: "Gudep Unsyiah", role: "Pemateri" },
];

const distributionEvents = [
  { year: "Sejak 2006", title: "Atribut & Perlengkapan Pramuka", client: "Gerakan Pramuka & Yayasan", desc: "Produksi khusus sejak 2013." },
  { year: "2014", title: "Produksi Jaket Sekolah Demokrasi", client: "LSM Sepakat" },
  { year: "2012-14", title: "Produksi Seragam Olahraga", client: "SMU Lab School Unsyiah" },
  { year: "2012", title: "Produksi Pakaian Lapangan & Velbed", client: "PMI Pidie Jaya" },
  { year: "2010-11", title: "Produksi Tas Daypack", client: "LSM Sepakat" },
  { year: "2010", title: "Produksi Seragam Instansi UPTD P2KK", client: "Dinas Kesehatan Aceh" },
  { year: "2009", title: "Produksi Atribut Perikanan", client: "DKP Pidie Jaya" },
];

export default function ProfilePage() {
  const aboutImg = PlaceHolderImages.find(i => i.id === "hero-nature");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Profile Hero */}
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl text-center md:text-left">
              <Badge className="mb-4 bg-accent text-accent-foreground border-none px-4 py-1 text-xs font-bold shadow-sm">
                Mengenal Kami
              </Badge>
              <h1 className="font-headline text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Tunong Baroh Outdoor Management
              </h1>
              <p className="text-lg md:text-2xl font-light text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Dedikasi untuk pengembangan karakter melalui alam dan aksi nyata pelestarian lingkungan di Aceh sejak 2006.
              </p>
            </div>
          </div>
        </section>

        {/* Cerita Kami */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl">
              <Image
                src={aboutImg?.imageUrl || ""}
                alt="Tentang Tunong Baroh"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 text-primary justify-center md:justify-start">
                <History className="h-6 w-6" />
                <h2 className="text-2xl md:text-3xl font-headline font-bold">Cerita Kami</h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                Tunong Baroh Outdoor Management Training lahir dari kecintaan mendalam terhadap alam Aceh dan kebutuhan akan kepemimpinan yang berwawasan lingkungan. Kami percaya bahwa ruang kelas terbaik tidak memiliki dinding, dan guru terbaik adalah pengalaman langsung di alam terbuka.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-secondary/50">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Terpercaya</h4>
                    <p className="text-xs text-muted-foreground">Mitra strategis DLHK Aceh.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-secondary/50">
                  <Award className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Profesional</h4>
                    <p className="text-xs text-muted-foreground">Instruktur bersertifikasi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rekam Jejak Section */}
        <section id="track-record" className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
                <Briefcase className="h-4 w-4" />
                Track Record
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Pengalaman Kami</h2>
              <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto italic">"Pengalaman adalah guru yang tidak pernah salah."</p>
            </div>

            <Tabs defaultValue="organizer" className="w-full">
              {/* Responsive Tabs List with Horizontal Scroll */}
              <div className="flex justify-center mb-8">
                <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2">
                  <TabsList className="bg-white p-1 rounded-2xl shadow-sm border border-secondary h-auto inline-flex min-w-full md:min-w-0">
                    <TabsTrigger value="organizer" className="rounded-xl px-4 md:px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold whitespace-nowrap text-xs md:text-sm flex-1">
                      Event Organizer
                    </TabsTrigger>
                    <TabsTrigger value="trainer" className="rounded-xl px-4 md:px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold whitespace-nowrap text-xs md:text-sm flex-1">
                      Trainer
                    </TabsTrigger>
                    <TabsTrigger value="distribution" className="rounded-xl px-4 md:px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold whitespace-nowrap text-xs md:text-sm flex-1">
                      Produksi
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <TabsContent value="organizer" className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="border-none bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all border-l-4 border-l-primary">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        <div className="flex-shrink-0">
                          <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-xl flex items-center justify-center min-w-[70px] sm:flex-col">
                            <span className="text-sm md:text-lg">{event.year}</span>
                          </div>
                        </div>
                        <div className="flex-grow space-y-1">
                          <h3 className="text-base md:text-xl font-bold text-primary leading-tight font-headline">{event.title}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] md:text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-3 w-3 text-accent" /> {event.location}
                            </div>
                            <div className="flex items-center gap-1.5 font-medium text-foreground">
                              <CheckCircle className="h-3 w-3 text-primary" /> {event.client}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="trainer" className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                {trainingEvents.map((event, index) => (
                  <Card key={index} className="border-none bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all border-l-4 border-l-accent">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        <div className="bg-accent/10 text-accent-foreground font-bold px-4 py-2 rounded-xl flex items-center justify-center min-w-[70px] sm:flex-col">
                          <span className="text-sm md:text-lg">{event.year}</span>
                        </div>
                        <div className="flex-grow space-y-1">
                          <h3 className="text-base md:text-xl font-bold text-primary leading-tight font-headline">{event.title}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] md:text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-3 w-3 text-accent" /> {event.location}
                            </div>
                            <div className="flex items-center gap-1.5 font-medium text-foreground">
                              <Users className="h-3 w-3 text-primary" /> {event.client}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="distribution" className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                {distributionEvents.map((event, index) => (
                  <Card key={index} className="border-none bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all border-l-4 border-l-blue-500">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        <div className="bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-xl flex items-center justify-center min-w-[80px] sm:flex-col">
                          <span className="text-xs md:text-base">{event.year}</span>
                        </div>
                        <div className="flex-grow space-y-1">
                          <h3 className="text-base md:text-xl font-bold text-primary leading-tight font-headline">{event.title}</h3>
                          <div className="flex items-center gap-1.5 text-[10px] md:text-sm font-medium text-foreground">
                            <ShieldCheck className="h-3 w-3 text-primary" /> {event.client}
                          </div>
                          {event.desc && <p className="text-[10px] md:text-xs italic text-muted-foreground mt-1">{event.desc}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Target className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-4" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Visi & Misi</h2>
              <div className="h-1 w-16 md:w-20 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <Card className="border-none shadow-lg rounded-[2rem] bg-white p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-base md:text-xl">1</span>
                  Visi Utama
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Terciptanya lingkungan hidup alami yang harmoni dengan terbentuknya karakter pribadi yang memiliki integritas tinggi, berakhlak mulia serta menjaga kelestarian alam.
                </p>
              </Card>

              <Card className="border-none shadow-lg rounded-[2rem] bg-white p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-base md:text-xl">2</span>
                  Misi Kami
                </h3>
                <ul className="space-y-3">
                  {[
                    "Melatih karakter masyarakat di alam terbuka yang aman.",
                    "Edukasi pelestarian lingkungan hidup berkelanjutan.",
                    "Aksi nyata penyelamatan lingkungan dan kampanye hijau.",
                    "Standardisasi peralatan berkegiatan alam terbuka."
                  ].map((misi, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground text-sm md:text-base">
                      <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      {misi}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Tim Penggerak */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-4" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Tim Penggerak</h2>
              <p className="text-muted-foreground text-sm md:text-lg">Para profesional di balik program-program kami.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <Link href={`/profile/team/${member.slug}`} key={index}>
                  <Card className="border-none bg-white shadow-md rounded-3xl overflow-hidden group hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer h-full">
                    <CardContent className="p-6 text-center flex flex-col items-center">
                      <Avatar className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 border-4 border-secondary group-hover:border-primary transition-colors">
                        <AvatarFallback className="bg-primary text-white text-xl md:text-2xl font-bold">{member.initial}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-1 font-headline">{member.name}</h3>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-widest mb-4">{member.role}</p>
                      <div className="flex items-center gap-1 text-primary text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Profil Lengkap <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

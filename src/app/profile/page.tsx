
"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Target, 
  History, 
  Users, 
  Award, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Briefcase,
  Quote,
  Sparkles
} from "lucide-react";
import { BrandName } from "@/components/ui/brand-name";

const teamMembers = [
  { 
    slug: "awaludin-azril", 
    name: "Awaludin Azril", 
    role: "Penasehat", 
    imageId: "team-awaludin",
    bio: "Memberikan arahan strategis dan visi jangka panjang bagi Tunong Baroh dengan pengalaman luas dalam kebijakan lingkungan.",
    motto: "Alam adalah guru terbaik bagi mereka yang mau mendengarkan.",
    specialties: ["Strategi Lingkungan", "Kebijakan Publik"]
  },
  { 
    slug: "dedek-kombi", 
    name: "Dedek Kombi", 
    role: "Direktur Utama", 
    imageId: "team-dedek",
    bio: "Memimpin operasional harian dengan fokus pada keunggulan layanan dan menjalin kemitraan strategis berbagai instansi.",
    motto: "Kolaborasi adalah kunci untuk melestarikan warisan alam kita.",
    specialties: ["Manajemen Operasional", "Kemitraan"]
  },
  { 
    slug: "muhammad-wafiq-afansa", 
    name: "Muhammad Wafiq Afansa", 
    role: "Manajer Administrasi", 
    imageId: "team-wafiq",
    bio: "Memastikan kelancaran administrasi dan koordinasi internal untuk tata kelola organisasi yang profesional.",
    motto: "Sistem yang baik menghasilkan dampak yang berkelanjutan.",
    specialties: ["Tata Kelola", "Efisiensi Proses"]
  },
  { 
    slug: "azkan-hazim-qaula", 
    name: "Azkan Hazim Qaula", 
    role: "Manajer Tempat dan Peralatan", 
    imageId: "team-azkan",
    bio: "Bertanggung jawab atas keamanan lokasi dan kualitas peralatan untuk pengalaman outdoor yang aman dan nyaman.",
    motto: "Keamanan adalah prioritas, pengalaman adalah tujuan.",
    specialties: ["Logistik Outdoor", "Manajemen Risiko"]
  },
  { 
    slug: "himi-abdullah", 
    name: "Himi Abdullah", 
    role: "Manajer Diklat", 
    imageId: "team-himi",
    bio: "Merancang kurikulum pelatihan inovatif dengan metode pembelajaran eksperiensial yang transformatif.",
    motto: "Belajar dari alam, tumbuh bersama pengalaman.",
    specialties: ["Desain Kurikulum", "Fasilitasi Kelompok"]
  },
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
            <div className="max-w-4xl text-center md:text-left">
              <Badge className="mb-4 bg-accent text-accent-foreground border-none px-4 py-1 text-xs font-bold shadow-sm">
                Mengenal Kami
              </Badge>
              <div className="mb-4 md:mb-6">
                <BrandName size="xl" />
              </div>
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
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div className="flex items-center gap-3 text-primary justify-center md:justify-start">
                <History className="h-6 w-6" />
                <h2 className="text-2xl md:text-3xl font-headline font-bold">Cerita Kami</h2>
              </div>
              <div className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <BrandName size="sm" className="inline-flex" />
                <span className="ml-1">
                  Outdoor Management Training lahir dari kecintaan mendalam terhadap alam Aceh dan kebutuhan akan kepemimpinan yang berwawasan lingkungan. Kami percaya bahwa ruang kelas terbaik tidak memiliki dinding, dan guru terbaik adalah pengalaman langsung di alam terbuka.
                </span>
              </div>
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

        {/* Tim Penggerak - Detailed Carousel */}
        <section className="py-16 md:py-24 bg-secondary/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-4" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Tim Penggerak</h2>
              <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">Para profesional berdedikasi tinggi yang menggerakkan perubahan melalui Tunong Baroh.</p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member, index) => {
                  const imgData = PlaceHolderImages.find(img => img.id === member.imageId);
                  return (
                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                      <Card className="border-none bg-white shadow-xl rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all h-full border border-transparent hover:border-primary/10">
                        <CardContent className="p-0">
                          <div className="flex flex-col h-full">
                            {/* Card Top: Photo & Basic Info */}
                            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start border-b border-secondary/30">
                              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                                <Avatar className="w-full h-full border-4 border-secondary shadow-lg">
                                  <AvatarImage 
                                    src={imgData?.imageUrl} 
                                    alt={member.name} 
                                    className="object-cover"
                                  />
                                  <AvatarFallback className="bg-primary text-white text-3xl font-bold">
                                    {member.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-2 -right-2 bg-accent p-2 rounded-xl shadow-md">
                                  <Sparkles className="h-4 w-4 text-accent-foreground" />
                                </div>
                              </div>
                              <div className="text-center md:text-left space-y-3">
                                <Badge className="bg-secondary text-primary border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                  {member.role}
                                </Badge>
                                <h3 className="text-2xl md:text-3xl font-bold text-primary font-headline leading-tight">{member.name}</h3>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground italic text-sm">
                                  <Quote className="h-4 w-4 text-accent rotate-180" />
                                  <p>{member.motto}</p>
                                </div>
                              </div>
                            </div>

                            {/* Card Bottom: Bio & Specialties */}
                            <div className="p-8 md:p-10 flex-grow bg-primary/5">
                              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Biografi Singkat</h4>
                              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                                {member.bio}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-auto">
                                {member.specialties.map((spec, i) => (
                                  <span key={i} className="text-[10px] md:text-xs font-bold bg-white text-primary px-3 py-1.5 rounded-full border border-primary/20 shadow-sm">
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-center gap-6 mt-12">
                <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-white border-primary/20 text-primary hover:bg-primary hover:text-white shadow-md" />
                <CarouselNext className="static translate-y-0 h-14 w-14 bg-white border-primary/20 text-primary hover:bg-primary hover:text-white shadow-md" />
              </div>
            </Carousel>
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
      </main>

      <Footer />
    </div>
  );
}

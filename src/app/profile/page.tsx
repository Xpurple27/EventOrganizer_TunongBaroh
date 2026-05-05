
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

const pastEvents = [
  {
    year: "2015",
    title: "Outbound Pemantapan Nilai-Nilai Kebangsaan",
    location: "Resimen Induk Kodam (RINDAM) Iskandar Muda, Mata Ie - Aceh Besar",
    client: "Lembaga Pertahanan Nasional (LEMHANAS) Republik Indonesia",
  },
  {
    year: "2014",
    title: "Kids Programme",
    location: "Ds. Lhang, Aceh Besar",
    client: "SMPIT Nurul Fikri Aceh",
  },
  {
    year: "2014",
    title: "Outbound for Capacity Building Keluarga Besar LPP - RRI Banda Aceh",
    location: "Beurayeun - Aceh Besar",
    client: "LPP - RRI Banda Aceh",
  },
  {
    year: "2013",
    title: "Up Grading Mentor",
    location: "Beurayeun - Aceh Besar",
    client: "Rumah Zakat",
  },
  {
    year: "2013",
    title: "Outbound for Student Capacity",
    location: "Neuhen - Aceh Besar",
    client: "Akademi Keperawatan Tjoet Nyak Dhien",
  },
  {
    year: "2011",
    title: "Outbound for Student Capacity",
    location: "Darussalam - Banda Aceh",
    client: "Akademi Keperawatan Tjoet Nyak Dhien",
  },
  {
    year: "2011",
    title: "Pembuatan Jalur Panjat Tebing Alam",
    location: "Tebing Lampuuk - Aceh Besar & Tebing Km. 0 - Sabang",
    client: "Proyek Konservasi Alam",
  },
  {
    year: "2011",
    title: "Pelatihan Selam Dasar One Star - CMAS",
    location: "Ulee Lheue - Banda Aceh & Krueng Raya - Aceh Besar",
    client: "Pegiat Alam Terbuka",
  },
  {
    year: "2010",
    title: "Outbound for Capacity Building",
    location: "Pantai Suak Seumaseh - Aceh Barat",
    client: "IBU Foundation",
  },
  {
    year: "2009",
    title: "Games for Orphan",
    location: "Taman Putroe Phang - Banda Aceh",
    client: "Rumah Zakat",
  },
  {
    year: "2008",
    title: "Outbound for Capacity Building",
    location: "SPN Seulawah, Labuy, Singkil, PIM (Aceh Utara), Takengon",
    client: "BRR NAD - Nias",
  },
  {
    year: "2007",
    title: "Outbound for Capacity Building",
    location: "Jantho - Aceh Besar",
    client: "BEM Fakultas Dakwah IAIN Ar-Raniry",
  },
  {
    year: "2006",
    title: "Outbound for Economic Faculty Student",
    location: "Mata Ie - Aceh Besar",
    client: "LDK Al-Mizan, FE Universitas Syiah Kuala",
  },
];

const trainingEvents = [
  {
    year: "2011",
    title: "Basic High Rope Skill bagi Peserta Jambore Daerah Aceh",
    location: "Buper Beutong Bawah - Nagan Raya",
    client: "Gerakan Pramuka Kwartir Daerah Aceh",
    role: "Pemateri"
  },
  {
    year: "2010",
    title: "Workshop Daur Ulang Sampah bagi Siswa Sekolah Dasar dan Wali Murid",
    location: "Lhokseumawe",
    client: "LSM Sepakat",
    role: "Pemateri"
  },
  {
    year: "2010",
    title: "Pelatihan Daur Ulang Kertas bagi Siswa Sekolah Dasar",
    location: "Lhokseumawe",
    client: "LSM Sepakat",
    role: "Pemateri"
  },
  {
    year: "2007",
    title: "Pelatihan Daur Ulang Kertas bagi Pramuka Penegak dan Pandega se - Banda Aceh",
    location: "Darussalam - Banda Aceh",
    client: "Gerakan Pramuka Gugus Depan A.77 - A.78 Universitas Syiah Kuala",
    role: "Pemateri"
  },
  {
    year: "2007",
    title: "Pelatihan Daur Ulang Kertas bagi Masyarakat Rukoh - Darussalam",
    location: "Darussalam - Banda Aceh",
    client: "Gerakan Pramuka Gugus Depan A.77 - A.78 Universitas Syiah Kuala",
    role: "Pemateri"
  },
];

const distributionEvents = [
  {
    year: "Sejak 2006",
    title: "Penjualan Atribut, Seragam dan Perlengkapan Perkemahan Pramuka",
    client: "Gerakan Pramuka (Kwarda Aceh, Kwarcab, Sekolah/Yayasan)",
    desc: "Melakukan penjualan secara personal maupun institusional. Sejak 2013 telah berdiri perusahaan produksi khusus."
  },
  {
    year: "2014",
    title: "Memproduksi Jaket untuk Sekolah Demokrasi",
    location: "Lhokseumawe",
    client: "LSM Sepakat"
  },
  {
    year: "2012 - 2014",
    title: "Memproduksi Seragam Olahraga",
    location: "Banda Aceh",
    client: "SMU Lab School Universitas Syiah Kuala"
  },
  {
    year: "2012",
    title: "Memproduksi Pakaian Lapangan, Rompi serta Velbed",
    location: "Pidie Jaya",
    client: "PMI Pidie Jaya"
  },
  {
    year: "2010 - 2011",
    title: "Memproduksi Tas Daypack untuk Sekolah Demokrasi",
    location: "Lhokseumawe",
    client: "LSM Sepakat"
  },
  {
    year: "2010",
    title: "Memproduksi Seragam Instansi UPTD P2KK",
    location: "Banda Aceh",
    client: "Dinas Kesehatan Provinsi Aceh"
  },
  {
    year: "2009",
    title: "Memproduksi Atribut Dinas Perikanan dan Kelautan",
    location: "Pidie Jaya",
    client: "Dinas Perikanan dan Kelautan Pidie Jaya"
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
              <Badge className="mb-4 bg-accent text-accent-foreground border-none px-4 py-1 text-sm font-bold shadow-sm">
                Mengenal Kami
              </Badge>
              <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Tunong Baroh Outdoor Management
              </h1>
              <p className="text-xl md:text-2xl font-light text-primary-foreground/90 leading-relaxed">
                Dedikasi untuk pengembangan karakter melalui alam dan aksi nyata pelestarian lingkungan di Bumi Serambi Mekkah sejak 2006.
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

        {/* Rekam Jejak Section with Tabs */}
        <section id="track-record" className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                <Briefcase className="h-4 w-4" />
                Track Record
              </div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-4">Rekam Jejak Kami</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Pengalaman panjang kami dalam mengelola berbagai kegiatan, pelatihan, dan produksi di Aceh.</p>
            </div>

            <Tabs defaultValue="organizer" className="w-full">
              <div className="flex justify-center mb-10 overflow-x-auto pb-2">
                <TabsList className="bg-white p-1 rounded-2xl shadow-sm border border-secondary h-auto flex-nowrap">
                  <TabsTrigger value="organizer" className="rounded-xl px-4 md:px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold whitespace-nowrap">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Event Organizer
                  </TabsTrigger>
                  <TabsTrigger value="trainer" className="rounded-xl px-4 md:px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold whitespace-nowrap">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Trainer & Pemateri
                  </TabsTrigger>
                  <TabsTrigger value="distribution" className="rounded-xl px-4 md:px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold whitespace-nowrap">
                    <Package2 className="h-4 w-4 mr-2" />
                    Produksi & Distribusi
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="organizer" className="space-y-6 animate-in fade-in duration-500">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="border-none bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="flex-shrink-0">
                          <div className="bg-primary/10 text-primary font-bold px-6 py-3 rounded-xl flex flex-col items-center justify-center min-w-[100px] group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Calendar className="h-4 w-4 mb-1" />
                            <span className="text-xl">{event.year}</span>
                          </div>
                        </div>
                        <div className="flex-grow space-y-2">
                          <h3 className="text-xl font-bold text-primary leading-tight font-headline">"{event.title}"</h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4 text-accent" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-1.5 font-medium text-foreground">
                              <ShieldCheck className="h-4 w-4 text-primary" />
                              {event.client}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="trainer" className="space-y-6 animate-in fade-in duration-500">
                {trainingEvents.map((event, index) => (
                  <Card key={index} className="border-none bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="flex-shrink-0">
                          <div className="bg-accent/10 text-accent-foreground font-bold px-6 py-3 rounded-xl flex flex-col items-center justify-center min-w-[100px] group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                            <GraduationCap className="h-4 w-4 mb-1" />
                            <span className="text-xl">{event.year}</span>
                          </div>
                        </div>
                        <div className="flex-grow space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-[10px] uppercase font-bold border-accent text-accent-foreground">
                              {event.role}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-primary leading-tight font-headline">"{event.title}"</h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4 text-accent" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-1.5 font-medium text-foreground">
                              <Users className="h-4 w-4 text-primary" />
                              {event.client}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="distribution" className="space-y-6 animate-in fade-in duration-500">
                {distributionEvents.map((event, index) => (
                  <Card key={index} className="border-none bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-50 text-blue-600 font-bold px-6 py-3 rounded-xl flex flex-col items-center justify-center min-w-[120px] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Package2 className="h-4 w-4 mb-1" />
                            <span className="text-lg">{event.year}</span>
                          </div>
                        </div>
                        <div className="flex-grow space-y-2">
                          <h3 className="text-xl font-bold text-primary leading-tight font-headline">{event.title}</h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            {event.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-accent" />
                                {event.location}
                              </div>
                            )}
                            <div className="flex items-center gap-1.5 font-medium text-foreground">
                              <ShieldCheck className="h-4 w-4 text-primary" />
                              {event.client}
                            </div>
                          </div>
                          {event.desc && <p className="text-sm italic text-muted-foreground mt-2">{event.desc}</p>}
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
                    Terciptanya lingkungan hidup alami dan nyaman yang mendukung kehidupan berkualitas dan harmoni dengan terbentuknya karakter pribadi yang memiliki integritas tinggi, berakhlak mulia serta menjaga kelestarian lingkungan hidup.
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
                      "Melatih dan membentuk karakter masyarakat dalam berkegiatan di alam terbuka yang aman, nyaman dan menjaga lingkungan.",
                      "Melakukan pendidikan dan pelatihan kepada masyarakat tentang tindakan penghematan sumber daya alam, pemanfaatan sumber daya alam yang dibenarkan, serta pelestarian lingkungan hidup.",
                      "Melakukan penyelamatan lingkungan hidup melalui kampanye, penyuluhan dan terlibat langsung dalam program-program Green and Clean.",
                      "Menjadi lembaga yang melakukan penilaian dan distributor standarisasi penggunaan alat atau perlengkapan atau peralatan berkegiatan di alam terbuka."
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
        <section className="py-24 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <h3 className="text-xl font-bold text-primary mb-1 font-headline">{member.name}</h3>
                      <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px] mb-4">{member.role}</p>
                      <div className="flex items-center gap-1 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Lihat Profil <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lokasi */}
        <section className="py-20">
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

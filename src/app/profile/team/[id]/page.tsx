
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Mail, Phone, MapPin, Quote, ShieldCheck, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const teamData: Record<string, any> = {
  "awaludin-azril": {
    name: "Awaludin Azril",
    role: "Penasehat",
    initial: "A",
    bio: "Sebagai Penasehat, Awaludin Azril memberikan arahan strategis dan visi jangka panjang bagi Tunong Baroh. Beliau memiliki pengalaman luas dalam kebijakan lingkungan dan pengembangan komunitas di Aceh.",
    motto: "Alam adalah guru terbaik bagi mereka yang mau mendengarkan.",
    specialties: ["Strategi Lingkungan", "Kebijakan Publik", "Kepemimpinan Strategis"],
    email: "awaludin@tunongbaroh.id",
  },
  "dedek-kombi": {
    name: "Dedek Kombi",
    role: "Direktur Utama",
    initial: "D",
    bio: "Dedek Kombi memimpin operasional harian Tunong Baroh dengan fokus pada keunggulan layanan dan dampak sosial. Beliau adalah penggerak utama dalam menjalin kemitraan strategis dengan berbagai instansi.",
    motto: "Kolaborasi adalah kunci untuk melestarikan warisan alam kita.",
    specialties: ["Manajemen Operasional", "Kemitraan Strategis", "Pengembangan Bisnis"],
    email: "dedek@tunongbaroh.id",
  },
  "muhammad-wafiq-afansa": {
    name: "Muhammad Wafiq Afansa",
    role: "Manajer Administrasi",
    initial: "M",
    bio: "Muhammad Wafiq Afansa memastikan kelancaran administrasi dan koordinasi internal. Ketelitian dan efisiensi beliau menjadi tulang punggung bagi tata kelola organisasi yang profesional.",
    motto: "Sistem yang baik menghasilkan dampak yang berkelanjutan.",
    specialties: ["Tata Kelola Administrasi", "Koordinasi Tim", "Efisiensi Proses"],
    email: "wafiq@tunongbaroh.id",
  },
  "azkan-hazim-qaula": {
    name: "Azkan Hazim Qaula",
    role: "Manajer Tempat dan Peralatan",
    initial: "A",
    bio: "Azkan Hazim Qaula bertanggung jawab atas keamanan lokasi dan kualitas peralatan pelatihan. Beliau memastikan setiap peserta mendapatkan pengalaman outdoor yang aman dan nyaman.",
    motto: "Keamanan adalah prioritas, pengalaman adalah tujuan.",
    specialties: ["Logistik Outdoor", "Manajemen Risiko", "Pemeliharaan Aset"],
    email: "azkan@tunongbaroh.id",
  },
  "himi-abdullah": {
    name: "Himi Abdullah",
    role: "Manajer Diklat",
    initial: "H",
    bio: "Himi Abdullah merancang kurikulum pelatihan dan pengembangan kapasitas yang inovatif. Beliau fokus pada metode pembelajaran eksperiensial yang transformatif bagi setiap peserta.",
    motto: "Belajar dari alam, tumbuh bersama pengalaman.",
    specialties: ["Desain Kurikulum", "Metode Eksperiensial", "Fasilitasi Kelompok"],
    email: "himi@tunongbaroh.id",
  },
};

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamData[params.id];

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 hover:bg-secondary/50 rounded-full group">
            <Link href="/profile">
              <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Profil
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Sidebar Profil */}
            <div className="space-y-6">
              <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white p-8 text-center">
                <Avatar className="w-40 h-40 mx-auto mb-6 border-8 border-secondary">
                  <AvatarFallback className="bg-primary text-white text-4xl font-bold">
                    {member.initial}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-headline font-bold text-primary mb-1">{member.name}</h1>
                <Badge variant="secondary" className="mb-6 bg-secondary text-primary border-none px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  {member.role}
                </Badge>
                
                <div className="space-y-4 text-left border-t pt-6">
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span>Banda Aceh, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span>+62 813-6091-1234</span>
                  </div>
                </div>
              </Card>

              <Card className="border-none shadow-lg rounded-3xl bg-primary text-primary-foreground p-8">
                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />
                <p className="italic font-headline text-lg leading-relaxed">
                  "{member.motto}"
                </p>
              </Card>
            </div>

            {/* Konten Utama */}
            <div className="md:col-span-2 space-y-12">
              <section className="animate-in fade-in slide-in-from-right duration-500">
                <div className="flex items-center gap-3 mb-6 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                  <h2 className="text-3xl font-headline font-bold">Tentang {member.name.split(' ')[0]}</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed bg-white p-8 rounded-[2rem] shadow-sm border border-secondary/20">
                  {member.bio}
                </p>
              </section>

              <section className="animate-in fade-in slide-in-from-right duration-500 delay-100">
                <div className="flex items-center gap-3 mb-6 text-primary">
                  <Sparkles className="h-6 w-6" />
                  <h2 className="text-2xl font-headline font-bold">Keahlian Strategis</h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  {member.specialties.map((specialty: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 bg-secondary/30 px-6 py-3 rounded-full border border-secondary text-primary font-bold text-sm">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </section>

              <section className="animate-in fade-in slide-in-from-right duration-500 delay-200">
                <Card className="border-none bg-accent/10 rounded-[2.5rem] p-10 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 text-accent/20">
                    <Heart className="h-24 w-24 fill-current" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-headline font-bold text-primary mb-4">Dedikasi Untuk Aceh</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Membantu membangun ekosistem pendidikan alam yang lebih baik di Aceh melalui integritas, profesionalisme, dan kecintaan pada lingkungan.
                    </p>
                    <Button asChild className="rounded-full px-8 h-12">
                      <Link href="/booking">Bekerja Sama Dengan Kami</Link>
                    </Button>
                  </div>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

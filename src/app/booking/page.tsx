
"use client";

import { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { CalendarIcon, CheckCircle2, Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const bookingSchema = z.object({
  institutionName: z.string().min(2, "Nama institusi wajib diisi"),
  contactPerson: z.string().min(2, "Nama kontak wajib diisi"),
  email: z.string().email("Alamat email tidak valid"),
  phone: z.string().min(10, "Nomor telepon yang valid wajib diisi"),
  participants: z.coerce.number(),
  programId: z.string().min(1, "Silakan pilih program"),
  ageGroup: z.string().optional(),
  date: z.date({
    required_error: "Tanggal wajib dipilih.",
  }),
  notes: z.string().optional(),
}).refine((data) => {
  const tieredPrograms = ["3", "6", "7"];
  if (tieredPrograms.includes(data.programId) && data.participants < 30) {
    return false;
  }
  return true;
}, {
  message: "Minimal 30 peserta untuk program ini",
  path: ["participants"],
});

const programsList = [
  { id: "3", name: "Pelatihan Pengelolaan Lingkungan Berbasis Praktik", min: 30, tiered: true },
  { id: "4", name: "Penanaman Mangrove & Rehabilitasi Pesisir", min: 1, partnership: true },
  { id: "5", name: "Penanaman 1000 Pohon", min: 1, partnership: true },
  { id: "6", name: "Outdoor Leadership & Team Building", min: 30, tiered: true },
  { id: "7", name: "Pelatihan Pengelolaan Sampah & Daur Ulang", min: 30, tiered: true },
  { id: "9", name: "Program Sekolah Alam (Kolaborasi DLHK)", min: 1 },
  { id: "10", name: "Pelatihan Budidaya Lebah", min: 1 },
  { id: "11", name: "Konservasi Alam: Penanaman Terumbu Karang", min: 1 },
  { id: "13", name: "Konservasi Alam: Penanaman Pohon", min: 1 },
  { id: "14", name: "Pelatihan Selam (Diving)", min: 1 },
];

function BookingFormContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const initialProgramId = searchParams.get("program") || "";

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      institutionName: "",
      contactPerson: "",
      email: "",
      phone: "",
      participants: 30,
      programId: initialProgramId,
      ageGroup: "SD",
      notes: "",
    },
  });

  const selectedProgramId = form.watch("programId");
  const selectedProgram = programsList.find(p => p.id === selectedProgramId);

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md w-full text-center p-8 rounded-3xl shadow-2xl border-none mx-auto">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-bold mb-4">Permintaan Terkirim!</h2>
        <p className="text-muted-foreground mb-8">
          Terima kasih. Kami telah menerima permintaan untuk <strong>{form.getValues("institutionName")}</strong>. Tim kami akan segera menghubungi Anda.
        </p>
        <Button asChild className="w-full h-12 rounded-xl">
          <a href="/">Kembali ke Beranda</a>
        </Button>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto">
      <CardHeader className="bg-primary text-primary-foreground p-10">
        <CardTitle className="text-3xl font-headline">Formulir Pemesanan</CardTitle>
        <CardDescription className="text-primary-foreground/80 text-lg">
          Silakan lengkapi detail rencana kegiatan Anda.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-10 bg-white">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="institutionName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Institusi / Sekolah / Organisasi *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama instansi Anda" {...field} className="rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Kontak Person *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama lengkap" {...field} className="rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="email@instansi.id" {...field} className="rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor WhatsApp/Telepon *</FormLabel>
                    <FormControl>
                      <Input placeholder="08..." {...field} className="rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="programId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pilih Program *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Pilih program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {programsList.map((p) => (
                          <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {selectedProgram?.tiered && (
                <FormField
                  control={form.control}
                  name="ageGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kelompok Usia *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Pilih kelompok usia" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="SD">SD (6-12th) - Rp 35rb/orang</SelectItem>
                          <SelectItem value="SMP">SMP (12-15th) - Rp 50rb/orang</SelectItem>
                          <SelectItem value="SMA">SMA (15-18th) - Rp 70rb/orang</SelectItem>
                          <SelectItem value="Mahasiswa">Mahasiswa (18-25th) - Rp 150rb/orang</SelectItem>
                          <SelectItem value="Dewasa">Dewasa - Rp 200rb/orang</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="participants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jumlah Peserta *</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="rounded-xl" />
                    </FormControl>
                    {selectedProgram?.min && (
                      <FormDescription>Minimal {selectedProgram.min} orang</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Rencana Tanggal *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal rounded-xl h-10 border-input",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: localeId })
                            ) : (
                              <span>Pilih tanggal</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date()
                          }
                          initialFocus
                          locale={localeId}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {selectedProgram?.partnership && (
              <Alert className="bg-accent/10 border-accent/20">
                <Info className="h-4 w-4 text-primary" />
                <AlertTitle className="text-primary font-bold">Informasi Kemitraan</AlertTitle>
                <AlertDescription className="text-sm">
                  Program ini merupakan bentuk kerja sama khusus. Kami akan menghubungi Anda untuk mendiskusikan detail proposal dan bentuk kolaborasi dengan organisasi/pemerintahan Anda.
                </AlertDescription>
              </Alert>
            )}

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catatan Tambahan</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Kebutuhan khusus atau fokus materi tertentu." 
                      className="min-h-[120px] rounded-xl"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground h-14 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition-all">
              Kirim Permintaan Pemesanan
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary/20">
      <Navbar />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="font-headline text-5xl font-bold text-primary mb-4">Rencanakan Aktivitas Anda</h1>
          <p className="text-muted-foreground text-lg">
            Isi formulir untuk pemesanan sekolah, instansi, atau organisasi Anda.
          </p>
        </div>

        <Suspense fallback={
          <div className="max-w-4xl mx-auto text-center py-20 bg-white rounded-3xl shadow-xl">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-48 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-64 bg-gray-100 rounded"></div>
            </div>
          </div>
        }>
          <BookingFormContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

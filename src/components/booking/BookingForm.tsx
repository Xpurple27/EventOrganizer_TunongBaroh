
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  phone: z.string().min(10, "Nomor telepon wajib diisi"),
  participants: z.coerce.number().min(1),
  programId: z.string().min(1, "Pilih program"),
  ageGroup: z.string().optional(),
  date: z.date({ required_error: "Tanggal wajib dipilih." }),
  notes: z.string().optional(),
});

const programsList = [
  { id: "3", name: "Pengelolaan Lingkungan Praktik", min: 30, tiered: true },
  { id: "4", name: "Mangrove & Rehabilitasi Pesisir", partnership: true },
  { id: "5", name: "Penanaman 1000 Pohon", partnership: true },
  { id: "6", name: "Outdoor Leadership", min: 30, tiered: true },
  { id: "7", name: "Pengelolaan Sampah & Daur Ulang", min: 30, tiered: true },
  { id: "9", name: "Program Sekolah Alam (DLHK)" },
  { id: "10", name: "Pelatihan Budidaya Lebah" },
];

export function BookingForm() {
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

  useEffect(() => {
    if (initialProgramId) form.setValue("programId", initialProgramId);
  }, [initialProgramId, form]);

  const selectedProgramId = form.watch("programId");
  const selectedProgram = programsList.find(p => p.id === selectedProgramId);

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md w-full text-center p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-none mx-auto animate-in fade-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4 text-primary">Permintaan Terkirim!</h2>
        <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
          Terima kasih. Kami telah menerima permintaan untuk <strong>{form.getValues("institutionName")}</strong>. Tim kami akan segera menghubungi Anda melalui nomor WhatsApp yang terdaftar.
        </p>
        <Button asChild className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg">
          <a href="/">Selesai</a>
        </Button>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden max-w-4xl mx-auto">
      <CardHeader className="bg-primary text-primary-foreground p-8 md:p-12 text-center md:text-left">
        <CardTitle className="text-2xl md:text-4xl font-headline mb-2">Formulir Pemesanan</CardTitle>
        <CardDescription className="text-primary-foreground/80 text-sm md:text-lg">
          Lengkapi detail rencana kegiatan outdoor Anda bersama Tunong Baroh.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-12 bg-white">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FormField
                control={form.control}
                name="institutionName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Nama Institusi / Sekolah *</FormLabel>
                    <FormControl>
                      <Input placeholder="Instansi Anda" {...field} className="rounded-xl h-12 bg-secondary/5 border-secondary/30 focus:bg-white" />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Nama Kontak Person *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama lengkap" {...field} className="rounded-xl h-12 bg-secondary/5 border-secondary/30 focus:bg-white" />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@instansi.id" {...field} className="rounded-xl h-12 bg-secondary/5 border-secondary/30 focus:bg-white" />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Nomor WhatsApp *</FormLabel>
                    <FormControl>
                      <Input placeholder="08..." {...field} className="rounded-xl h-12 bg-secondary/5 border-secondary/30 focus:bg-white" />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="programId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Pilih Program *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl h-12 bg-secondary/5 border-secondary/30">
                          <SelectValue placeholder="Pilih program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {programsList.map((p) => (
                          <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="participants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Jumlah Peserta *</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="rounded-xl h-12 bg-secondary/5 border-secondary/30 focus:bg-white" />
                    </FormControl>
                    {selectedProgram?.min && (
                      <FormDescription className="text-[10px] italic">Saran minimal {selectedProgram.min} orang</FormDescription>
                    )}
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Rencana Tanggal *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal rounded-xl h-12 border-secondary/30 bg-secondary/5",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: localeId })
                            ) : (
                              <span>Pilih tanggal</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-primary" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          locale={localeId}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />

              {selectedProgram?.tiered && (
                <FormField
                  control={form.control}
                  name="ageGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Kelompok Usia *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl h-12 bg-secondary/5 border-secondary/30">
                            <SelectValue placeholder="Pilih usia" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="SD">SD (6-12th)</SelectItem>
                          <SelectItem value="SMP">SMP (12-15th)</SelectItem>
                          <SelectItem value="SMA">SMA (15-18th)</SelectItem>
                          <SelectItem value="Mahasiswa">Mahasiswa (18-25th)</SelectItem>
                          <SelectItem value="Dewasa">Dewasa</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              )}
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-sm font-bold uppercase tracking-wider">Kebutuhan Khusus</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Fokus materi, lokasi khusus, atau kebutuhan peralatan." 
                      className="min-h-[120px] rounded-2xl bg-secondary/5 border-secondary/30 focus:bg-white" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground h-16 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all">
              Kirim Permintaan Sekarang
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

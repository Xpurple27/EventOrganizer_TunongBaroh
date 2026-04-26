
"use client";

import { useState } from "react";
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
import { CalendarIcon, CheckCircle2 } from "lucide-react";

const bookingSchema = z.object({
  institutionName: z.string().min(2, "Nama institusi wajib diisi"),
  contactPerson: z.string().min(2, "Nama kontak wajib diisi"),
  email: z.string().email("Alamat email tidak valid"),
  phone: z.string().min(10, "Nomor telepon yang valid wajib diisi"),
  participants: z.coerce.number().min(5, "Minimal 5 peserta"),
  programId: z.string().min(1, "Silakan pilih program"),
  date: z.date({
    required_error: "Tanggal wajib dipilih.",
  }),
  notes: z.string().optional(),
});

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      institutionName: "",
      contactPerson: "",
      email: "",
      phone: "",
      participants: 10,
      programId: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <Card className="max-w-md w-full text-center p-8 rounded-3xl shadow-2xl border-none">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-headline font-bold mb-4">Pemesanan Diminta!</h2>
            <p className="text-muted-foreground mb-8">
              Terima kasih atas minat Anda. Kami telah menerima permintaan pemesanan untuk <strong>{form.getValues("institutionName")}</strong>. Tim kami akan menghubungi Anda dalam 24 jam untuk mengonfirmasi detailnya.
            </p>
            <Button asChild className="w-full h-12 rounded-xl">
              <a href="/">Kembali ke Beranda</a>
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-secondary/20">
      <Navbar />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold text-primary mb-4">Rencanakan Aktivitas Anda</h1>
            <p className="text-muted-foreground text-lg">
              Isi formulir di bawah ini untuk meminta pemesanan bagi sekolah atau organisasi Anda.
            </p>
          </div>

          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-10">
              <CardTitle className="text-3xl font-headline">Formulir Pemesanan</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">
                Bidang yang wajib diisi ditandai dengan tanda bintang.
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
                          <FormLabel>Nama Institusi / Sekolah *</FormLabel>
                          <FormControl>
                            <Input placeholder="SMA Negeri 1 Aceh" {...field} className="rounded-xl" />
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
                          <FormLabel>Nama Kontak *</FormLabel>
                          <FormControl>
                            <Input placeholder="Budi Santoso" {...field} className="rounded-xl" />
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
                            <Input placeholder="budi@school.id" {...field} className="rounded-xl" />
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
                          <FormLabel>Nomor Telepon *</FormLabel>
                          <FormControl>
                            <Input placeholder="+62 812..." {...field} className="rounded-xl" />
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
                              <SelectItem value="leadership">Leadership Wilderness</SelectItem>
                              <SelectItem value="junior">Junior Eco-Guardians</SelectItem>
                              <SelectItem value="retreat">Eco-Corporate Retreat</SelectItem>
                              <SelectItem value="mangrove">Konservasi Mangrove</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="participants"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimasi Peserta *</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} className="rounded-xl" />
                          </FormControl>
                          <FormDescription>Min. 5 peserta</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Tanggal Pilihan *</FormLabel>
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
                                  date < new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Permintaan Tambahan / Catatan</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beri tahu kami tentang persyaratan khusus, alergi makanan, atau tujuan spesifik untuk sesi ini." 
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
        </div>
      </main>

      <Footer />
    </div>
  );
}

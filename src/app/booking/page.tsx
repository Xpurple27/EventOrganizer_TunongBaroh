
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/booking/BookingForm";

export const dynamic = 'force-dynamic';

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
          <BookingForm />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

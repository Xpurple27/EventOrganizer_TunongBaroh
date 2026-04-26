
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">Tunong Baroh</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pembelajaran eksperiensial dan pelatihan berbasis alam. Membangun pemimpin, melindungi masa depan kita.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/awaluddin.azril" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Semua Program</Link></li>
              <li><Link href="/impact" className="text-muted-foreground hover:text-primary">Dampak Lingkungan</Link></li>
              <li><Link href="/profile" className="text-muted-foreground hover:text-primary">Profil Lembaga</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary">Galeri Kegiatan</Link></li>
              <li><Link href="/booking" className="text-muted-foreground hover:text-primary">Pesan Sesi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Pelatihan Outdoor</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Konservasi Alam</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Sekolah Alam</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Penanaman Mangrove</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1 shrink-0" />
                <span>Aceh Utara, Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="https://wa.me/6281360911234" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    +62 813-6091-1234 (Awaludin)
                  </a>
                  <a href="https://wa.me/6282361003219" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    +62 823-6100-3219 (Dedek)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>halo@tunongbaroh.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Tunong Baroh Outdoor Management. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}

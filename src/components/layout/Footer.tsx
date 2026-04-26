
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
              Experiential learning and nature-based training. Building leaders, protecting our future.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">All Programs</Link></li>
              <li><Link href="/impact" className="text-muted-foreground hover:text-primary">Environmental Impact</Link></li>
              <li><Link href="/booking" className="text-muted-foreground hover:text-primary">Book a Session</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs?cat=outdoor" className="text-muted-foreground hover:text-primary">Outdoor Training</Link></li>
              <li><Link href="/programs?cat=indoor" className="text-muted-foreground hover:text-primary">Indoor Training</Link></li>
              <li><Link href="/programs?cat=nature" className="text-muted-foreground hover:text-primary">Nature School</Link></li>
              <li><Link href="/programs?cat=mangrove" className="text-muted-foreground hover:text-primary">Mangrove Planting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Aceh, Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@tunongbaroh.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Tunong Baroh Outdoor Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

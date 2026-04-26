
"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Droplets, Sprout, ShieldCheck, MapPin, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ImpactPage() {
  const [seedlingCount, setSeedlingCount] = useState(1);
  const pricePerSeedling = 25000;
  
  const mangroveImg = PlaceHolderImages.find(i => i.id === "mangrove-planting");
  const reforestationImg = PlaceHolderImages.find(i => i.id === "gallery-1");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Impact */}
        <div className="relative h-[50vh] flex items-center justify-center">
          <Image
            src={mangroveImg?.imageUrl || ""}
            alt="Impact Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">Our Impact</h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-sm font-light">
              Healing the Earth through direct action. Join us in our mission to restore Aceh's natural heritage.
            </p>
          </div>
        </div>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-bold border border-accent/30">
                <Droplets className="h-4 w-4" />
                Featured Program
              </div>
              <h2 className="font-headline text-4xl font-bold text-primary">Mangrove Planting Initiative</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Coastal erosion is a real threat to our islands. Our mangrove program focuses on planting Rhizophora and Avicennia species in critical coastal zones. These "forests of the sea" provide vital nursery grounds for marine life and act as carbon sinks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Erosion Protection</h4>
                    <p className="text-sm text-muted-foreground">Strong root systems protect the shoreline.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Local Locations</h4>
                    <p className="text-sm text-muted-foreground">We focus on Northern Aceh coasts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src={mangroveImg?.imageUrl || ""}
                alt="Mangrove Planting"
                width={800}
                height={600}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                <p className="text-sm font-medium italic">"The best time to plant a tree was 20 years ago. The second best time is now."</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none bg-secondary/30 p-8 rounded-3xl">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Sprout className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Buy Seedlings</h3>
                <p className="text-muted-foreground mb-8">Directly fund the growth of a new tree. We handle the planting and maintenance for the first 3 years.</p>
                
                <div className="space-y-4 text-left bg-white p-6 rounded-2xl shadow-sm mb-6">
                  <div>
                    <Label htmlFor="count" className="mb-2 block">Number of Seedlings</Label>
                    <Input 
                      id="count"
                      type="number" 
                      min="1" 
                      value={seedlingCount} 
                      onChange={(e) => setSeedlingCount(parseInt(e.target.value) || 0)}
                      className="rounded-xl border-secondary"
                    />
                  </div>
                  <div className="flex justify-between items-center py-2 border-t mt-4">
                    <span className="font-medium">Total Cost:</span>
                    <span className="text-xl font-bold text-primary">Rp {(seedlingCount * pricePerSeedling).toLocaleString()}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary h-12 rounded-xl font-bold">Donate Now</Button>
              </CardContent>
            </Card>

            <Card className="border-none bg-accent/10 p-8 rounded-3xl md:col-span-2">
              <CardContent className="p-0 flex flex-col md:flex-row gap-12 h-full">
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6 font-headline text-primary">Join the Campaign</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Is your company looking for a CSR partner? We offer comprehensive reporting and GPS-tracking for all corporate planting projects.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Custom planting events for employees",
                      "Impact report with carbon sequestration data",
                      "Brand recognition on our impact wall",
                      "Ongoing nursery tours for stakeholders"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-10 border-primary text-primary hover:bg-primary hover:text-white rounded-xl h-12">
                    Inquire Corporate Partnership
                  </Button>
                </div>
                <div className="md:w-1/2 relative rounded-2xl overflow-hidden min-h-[300px]">
                  <Image
                    src={reforestationImg?.imageUrl || ""}
                    alt="CSR Impact"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm p-2 rounded-lg text-xs">
                    <Info className="h-4 w-4" />
                    Project Site: Gampong Tunong
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

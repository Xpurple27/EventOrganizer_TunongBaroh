
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Trees, School, Building2, Droplet, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "All Programs", icon: null },
  { id: "outdoor", name: "Outdoor Training", icon: Trees },
  { id: "indoor", name: "Indoor Training", icon: Building2 },
  { id: "school", name: "Nature School", icon: School },
  { id: "impact", name: "Mangrove & Reforest", icon: Droplet },
];

const programs = [
  {
    id: "1",
    title: "Leadership Wilderness",
    category: "outdoor",
    price: 1500000,
    duration: "3 Days, 2 Nights",
    desc: "Intensive leadership training in the deep forest environment focusing on group dynamics and survival skills.",
    image: "outdoor-training"
  },
  {
    id: "2",
    title: "Junior Eco-Guardians",
    category: "school",
    price: 350000,
    duration: "1 Day (Field Trip)",
    desc: "Educational field trip for elementary students to learn about local ecosystem and biodiversity.",
    image: "nature-school"
  },
  {
    id: "3",
    title: "Eco-Corporate Retreat",
    category: "indoor",
    price: 2500000,
    duration: "2 Days, 1 Night",
    desc: "A luxury but eco-conscious retreat combining indoor strategic workshops with light nature walks.",
    image: "indoor-leadership"
  },
  {
    id: "4",
    title: "Mangrove Conservation",
    category: "impact",
    price: 500000,
    duration: "Half Day",
    desc: "Community action program where participants plant mangrove seedlings and learn about coastal protection.",
    image: "mangrove-planting"
  },
  {
    id: "5",
    title: "Mountain Survival Basics",
    category: "outdoor",
    price: 850000,
    duration: "2 Days",
    desc: "Essential skills for outdoor enthusiasts: navigation, fire starting, and shelter building.",
    image: "hero-nature"
  },
  {
    id: "6",
    title: "Forest Academy Level 1",
    category: "school",
    price: 1200000,
    duration: "Weekend Series",
    desc: "Curriculum-based nature education for high school students interested in forestry and conservation.",
    image: "gallery-1"
  }
];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programs.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12">
            <h1 className="font-headline text-5xl font-bold text-primary mb-4">Program Catalog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Choose from our wide range of nature-based training and educational activities. Every booking supports our local environmental initiatives.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search programs..."
                className="pl-10 h-12 bg-white rounded-xl border-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-6 h-12 ${activeCategory === cat.id ? 'bg-primary text-white' : 'border-secondary hover:bg-secondary/50'}`}
                >
                  {cat.icon && <cat.icon className="mr-2 h-4 w-4" />}
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => {
                const img = PlaceHolderImages.find(i => i.id === program.image);
                return (
                  <Card key={program.id} className="flex flex-col border-none shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative h-48">
                      <Image
                        src={img?.imageUrl || ""}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground capitalize border-none shadow-md">
                        {program.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
                      </div>
                      <p className="text-sm font-bold text-primary">{program.duration}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {program.desc}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-secondary/30 flex justify-between items-center bg-secondary/10">
                      <div className="text-lg font-bold text-primary">
                        Rp {program.price.toLocaleString()}
                        <span className="text-xs font-normal text-muted-foreground ml-1">/ person</span>
                      </div>
                      <Button asChild size="sm" className="rounded-xl">
                        <Link href={`/programs/${program.id}`}>Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-secondary/10 rounded-3xl border-2 border-dashed border-secondary">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No programs found</h3>
              <p className="text-muted-foreground">Try adjusting your category or search query.</p>
              <Button onClick={() => {setActiveCategory("all"); setSearchQuery("");}} variant="link" className="mt-4 text-primary">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Phone, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function FeaturedBusiness() {

    const featuredBusinesses = [
    {
      name: "Spice Garden Restaurant",
      category: "Restaurant",
      rating: 4.8,
      image: "/indian-restaurant-interior.png",
      description: "Authentic local cuisine with traditional flavors",
    },
    {
      name: "Tech Solutions Hub",
      category: "Electronics",
      rating: 4.6,
      image: "/electronics-store-interior.png",
      description: "Latest gadgets and tech repair services",
    },
    {
      name: "Dr. Sharma Clinic",
      category: "Healthcare",
      rating: 4.9,
      image: "/modern-medical-clinic.jpg",
      description: "General medicine and family healthcare",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/20 to-accent/5">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Featured Businesses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredBusinesses.map((business, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold">{business.name}</CardTitle>
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-white text-white" />
                      <span className="text-sm font-bold text-white">{business.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-primary font-medium">{business.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{business.description}</p>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    variant="default"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
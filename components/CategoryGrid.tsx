import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export default function CategoryGrid() {

  const categories = [
    { name: "Restaurants", icon: "🍽️", count: "120+", color: "from-orange-500 to-red-500" },
    { name: "Local Shops", icon: "🛍️", count: "85+", color: "from-blue-500 to-purple-500" },
    { name: "Health Care", icon: "👨‍⚕️", count: "45+", color: "from-green-500 to-teal-500" },
    { name: "Coaching Centers", icon: "📚", count: "30+", color: "from-yellow-500 to-orange-500" },
    { name: "Event Services", icon: "🎉", count: "25+", color: "from-pink-500 to-rose-500" },
    { name: "Beauty Care", icon: "💄", count: "40+", color: "from-purple-500 to-indigo-500" },
  ]

  return (
    <section className="py-20 px-2">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Explore Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {categories.map((category, index) => {
              const categoryLinks = {
                Restaurants: "/category/restaurants",
                "Local Shops": "/category/shops",
                "Health Care": "/category/doctors",
                "Coaching Centers": "/category/coaching",
                "Event Services": "/category/events",
                "Beauty Care": "/category/beauty",
              }

              return (
                <a
                  key={index}
                  href={categoryLinks[category.name as keyof typeof categoryLinks] || "#"}
                  className="block group"
                >
                  <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur">
                    <CardContent className="p-8 text-center relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      ></div>
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h4 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-lg">
                        {category.name}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="text-sm px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10"
                      >
                        {category.count}
                      </Badge>
                    </CardContent>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
      </section>
  )
}
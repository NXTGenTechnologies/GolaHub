"use client"

import { MapPin, Upload, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AddBusinessPage() {
  const categories = [
    "Restaurant",
    "Cafe",
    "Electronics Store",
    "Clothing Store",
    "Book Store",
    "General Physician",
    "Dentist",
    "Engineering Coaching",
    "Beauty Salon",
    "Event Services",
    "Other",
  ]

  const freeFeatures = [
    "Basic business listing",
    "Contact information display",
    "Business hours",
    "Basic description",
    "Customer reviews",
  ]

  const premiumFeatures = [
    "All free features included",
    "Featured listing placement",
    "Photo gallery (up to 10 images)",
    "Priority in search results",
    "Social media links",
    "Detailed business analytics",
    "Customer inquiry management",
    "24/7 customer support",
  ]

  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      {/* Page Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Add Your Business to GolaHub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join hundreds of local businesses and reach more customers in Gola. Get started with a free listing or
            upgrade to premium for enhanced visibility.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Business Information</CardTitle>
                <CardDescription>Fill out the details below to create your business listing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  {/* Business Name */}
                  <div className="space-y-2">
                    <Label htmlFor="business-name" className="text-sm font-medium">
                      Business Name *
                    </Label>
                    <Input id="business-name" placeholder="Enter your business name" className="bg-background" />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">
                      Category *
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select business category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">
                      Business Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your business, services, and what makes you special..."
                      className="bg-background min-h-24"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                      Complete Address *
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete business address including landmarks"
                      className="bg-background"
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </Label>
                      <Input id="phone" placeholder="+91 98765 43210" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-sm font-medium">
                        WhatsApp Number
                      </Label>
                      <Input id="whatsapp" placeholder="+91 98765 43210" className="bg-background" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input id="email" type="email" placeholder="business@example.com" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-sm font-medium">
                        Website (Optional)
                      </Label>
                      <Input id="website" placeholder="www.yourbusiness.com" className="bg-background" />
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium">Business Hours</Label>
                    <div className="grid gap-3">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <div key={day} className="flex items-center gap-4">
                          <div className="w-20 text-sm font-medium">{day}</div>
                          <div className="flex items-center gap-2 flex-1">
                            <Input placeholder="9:00 AM" className="bg-background" />
                            <span className="text-muted-foreground">to</span>
                            <Input placeholder="6:00 PM" className="bg-background" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Logo/Image Upload */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Business Logo/Images</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Drag and drop your images here, or click to browse</p>
                      <p className="text-sm text-muted-foreground">Supported formats: JPG, PNG, GIF (Max 5MB each)</p>
                      <Button variant="outline" className="mt-4 bg-transparent">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Listing Type */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium">Choose Your Listing Type</Label>
                    <RadioGroup defaultValue="free" className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="free" id="free" />
                        <Label htmlFor="free" className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Free Listing</div>
                              <div className="text-sm text-muted-foreground">
                                Basic business information and contact details
                              </div>
                            </div>
                            <Badge variant="secondary">₹0/month</Badge>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="premium" id="premium" />
                        <Label htmlFor="premium" className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                Premium Listing
                                <Badge className="bg-primary/10 text-primary">Recommended</Badge>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Enhanced visibility with photos and priority placement
                              </div>
                            </div>
                            <Badge>₹99/month</Badge>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button size="lg" className="w-full">
                    Submit Business Listing
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Free vs Premium Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Free vs Premium</CardTitle>
                <CardDescription>Compare listing features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Badge variant="outline" className="mr-2">
                      Free
                    </Badge>
                    Basic Listing
                  </h4>
                  <ul className="space-y-2">
                    {freeFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Badge className="mr-2">Premium</Badge>
                    Enhanced Listing
                  </h4>
                  <ul className="space-y-2">
                    {premiumFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is here to help you get your business listed successfully.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📞 +91 98765 43210</div>
                  <div>📧 support@golahub.com</div>
                  <div>🕒 Mon-Sat: 9 AM - 6 PM</div>
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle>Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      "GolaHub helped us reach 50% more customers in just 3 months!"
                    </p>
                    <p className="text-sm font-medium">- Raj Patel, Spice Garden Restaurant</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      "The premium listing was worth every penny. Great ROI!"
                    </p>
                    <p className="text-sm font-medium">- Dr. Sharma, Medical Clinic</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

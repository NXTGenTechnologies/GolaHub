import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
     <footer className="bg-card py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">GolaHub</h4>
              </div>
              <p className="text-muted-foreground">Your trusted local business directory for Gola city.</p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Categories</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/category/restaurants" className="hover:text-primary transition-colors">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link href="/category/shops" className="hover:text-primary transition-colors">
                    Shops
                  </Link>
                </li>
                <li>
                  <Link href="/category/doctors" className="hover:text-primary transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/category/coaching" className="hover:text-primary transition-colors">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">For Business</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/add-business" className="hover:text-primary transition-colors">
                    Add Your Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Premium Listing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Business Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Contact</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: info@golahub.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Gola, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 GolaHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )}
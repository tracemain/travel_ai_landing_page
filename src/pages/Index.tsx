import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Plane, Luggage } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: MapPin,
      title: "Interactive Travel Maps",
      description: "Discover Europe's hidden gems with our interactive map featuring curated travel nodes and popular destinations.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Plane,
      title: "Smart Itinerary Builder",
      description: "Create perfect trip plans in minutes with AI-powered suggestions tailored to your interests and travel style.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Luggage,
      title: "Local Hidden Gems",
      description: "Access exclusive local insights and discover authentic experiences recommended by fellow travelers.",
      image: "https://images.unsplash.com/photo-1493707553966-283afb57c298?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah",
      location: "Berlin",
      text: "WanderLustify saved me hours of planning! Found the most amazing local spots in Prague.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marco",
      location: "Barcelona",
      text: "The hidden gems feature is incredible. Discovered places I never would have found otherwise!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma",
      location: "Amsterdam",
      text: "Perfect for spontaneous trips. The app knows exactly what I'm looking for.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Plan Your Perfect 
                  <span className="text-green-500 block">European Adventure</span>
                  <span className="text-3xl lg:text-4xl font-medium text-gray-600">—Effortlessly.</span>
                </h1>
                
                <p className="text-xl text-gray-600 max-w-lg">
                  Smart itineraries, local insights, and seamless travel planning in one app. 
                  Your next European journey starts here.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Download Now – Free Forever
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-green-500 text-green-500 hover:bg-green-50 px-8 py-6 text-lg rounded-full transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <Badge variant="secondary" className="bg-green-100 text-green-700">4.8★ Rating</Badge>
                <span>50,000+ Happy Travelers</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Young travelers exploring European city"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-green-500 rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 animate-bounce">
          <div className="bg-white rounded-full p-4 shadow-lg">
            <MapPin className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-full p-4 shadow-lg">
            <Plane className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need for the Perfect Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to exploring, WanderLustify makes European travel effortless and exciting
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <div className="p-8">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <feature.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Step-by-Step Navigation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Never get lost again with our intuitive walking directions and real-time navigation 
                designed specifically for European cities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <span className="text-gray-700">Choose your destination</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <span className="text-gray-700">Get personalized route suggestions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <span className="text-gray-700">Discover hidden gems along the way</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
                <div className="bg-white rounded-2xl p-6 text-gray-900">
                  <h3 className="font-semibold mb-4">Sample Itinerary: Amsterdam</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Anne Frank House - 9:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Jordaan District Walk - 11:00 AM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Local Café Lunch - 1:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Vondelpark - 3:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Loved by Travelers Across Europe
            </h2>
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">4.8★</div>
                <div className="text-gray-600">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">50k+</div>
                <div className="text-gray-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">25+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="text-yellow-400 mt-3">★★★★★</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on App Store"
                className="h-12"
              />
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated on Your Next Adventure
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive travel tips, early access to new features, and inspiring destination guides 
            delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-0"
              />
              <Button className="bg-green-500 hover:bg-green-600 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              No spam. Unsubscribe anytime. Privacy policy applies.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-500 mb-4">WanderLustify</h3>
              <p className="text-gray-400">
                Your perfect European adventure starts here. Smart planning, local insights, 
                endless possibilities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Download</div>
                <div>Support</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2 text-gray-400">
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Facebook</div>
                <div>TikTok</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WanderLustify. All rights reserved. Made with ❤️ for European adventurers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

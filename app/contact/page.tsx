import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { COMPANY_INFO } from "@/lib/constants";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY_INFO.name}`,
  description: "Get in touch with us to learn more about our coaching programs or schedule a visit to our center.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions or ready to enroll? Get in touch with our team for personalized assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground mt-1">
                      {COMPANY_INFO.location.address}
                      <br />
                      {COMPANY_INFO.location.city}, {COMPANY_INFO.location.state} {COMPANY_INFO.location.zipCode}
                      <br />
                      {COMPANY_INFO.location.country}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground mt-1">
                      {COMPANY_INFO.contact.phone}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground mt-1">
                      {COMPANY_INFO.contact.email}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Working Hours</div>
                    <div className="text-muted-foreground mt-1">
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <MapEmbed />
          </div>
          
          <div className="bg-card rounded-lg border p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
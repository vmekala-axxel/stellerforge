import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Page Header */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our aerospace experts
          </p>
        </div>

        {/* Section 1: Contact Us */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <ol className="list-decimal list-inside space-y-4 text-foreground">
              <li className="font-medium">
                Houston Headquarters
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Address: 2501 Space Center Blvd, Houston, TX 77058</li>
                  <li>Phone: +1 (555) 123-SPACE</li>
                  <li>Email: houston@stellarforge.com</li>
                </ul>
              </li>
              <li className="font-medium">
                European Operations Center
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Address: Route de l'Espace, 31400 Toulouse, France</li>
                  <li>Phone: +33 5 61 27 31 31</li>
                  <li>Email: europe@stellarforge.com</li>
                </ul>
              </li>
              <li className="font-medium">
                Asia-Pacific Hub
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Address: 2-1-1 Sengen, Tsukuba, Ibaraki 305-8505, Japan</li>
                  <li>Phone: +81 29-868-5000</li>
                  <li>Email: apac@stellarforge.com</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Section 2: Empty Placeholder */}
        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Section 2 Placeholder
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <ol className="list-decimal list-inside space-y-4 text-foreground">
              <li className="font-medium">
                Business Development
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Partnership opportunities and joint ventures</li>
                  <li>Custom mission planning and consultation</li>
                  <li>Commercial space service inquiries</li>
                </ul>
              </li>
              <li className="font-medium">
                Customer Support
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Technical support for existing clients</li>
                  <li>Mission status updates and reports</li>
                  <li>Emergency assistance and rapid response</li>
                </ul>
              </li>
              <li className="font-medium">
                Media and Press
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Press releases and media kits</li>
                  <li>Interview requests and media appearances</li>
                  <li>Company announcements and updates</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Section 3: Empty Placeholder */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Section 3 Placeholder
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <ol className="list-decimal list-inside space-y-4 text-foreground">
              <li className="font-medium">
                Career Opportunities
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Aerospace engineering positions</li>
                  <li>Research scientist and technician roles</li>
                  <li>Mission control and operations specialists</li>
                </ul>
              </li>
              <li className="font-medium">
                Educational Partnerships
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>University collaboration programs</li>
                  <li>Student internship opportunities</li>
                  <li>STEM education initiatives</li>
                </ul>
              </li>
              <li className="font-medium">
                Investment Relations
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Investor information and reports</li>
                  <li>Funding opportunities and proposals</li>
                  <li>Financial performance updates</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
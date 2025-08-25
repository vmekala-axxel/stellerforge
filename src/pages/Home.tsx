import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUserTie } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
const Home = () => {
  const fleetPackages = [
    {
      title: "Strategic Location & Connectivity",
      icon: FaConnectdevelop,
      items: [
        "Proximity to Ports: Immediate access to Sharjah Port Khalid, Khorfakkan Port on the Indian Ocean, and close connectivity to Dubai’s Jebel Ali Port.",
        "Air Transport: Situated near Sharjah International Airport and within minutes of Dubai International Airport, ensuring global reach.",
        "Road & GCC Connectivity: Direct access to UAE’s highway network, linking businesses to all GCC markets.",
        "Global Gateway: A strategic position that bridges Asia, Europe, and Africa, making GM an ideal hub for international trade and manufacturing"
      ],
    },
    {
      title: "World-Class Infrastructure",
      icon: GiWorld,
      items: [
        "Industrial Land & Plots: For medium and large-scale manufacturing.",
        "Warehouses & Factory Units: Ready-to-use spaces for storage, logistics, and production.",
        "Modern Offices: Fully furnished offices, co-working spaces, and customizable units.",
        "Integrated Services: Banking, insurance, and customs offices located within the zone.",
        "Digital Infrastructure: Smart utilities, high-speed connectivity, and technology-enabled solutions for business continuity."
      ],
    },
    {
      title: "Business Setup Advantages",
      icon: LiaBusinessTimeSolid,
      items: [
        "100% Foreign Ownership: Full control and independence for investors.",
        "Zero Taxes: No corporate, personal income, or export/import taxes within the freezone.",
        "Capital Repatriation: 100% repatriation of capital and profits.",
        "Customs Benefits: No customs duty on imports, exports, or re-exports within the zone.",
        "Ease of Setup: Streamlined company registration and licensing procedures.",
        "Visa Benefits: Multiple visa quotas linked to the chosen facility."
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent py-4">
            Welcome to GM Freezone
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering the future of aerospace technology and space exploration
          </p>
        </div>

        {/* Section 1: About Us */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Introduction & Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground text-center py-16">
              {/* Placeholder content area - ready for your content */}
              GM Freezone, located in the Emirate of Sharjah, is a premier strategic economic hub designed to empower global businesses with world-class infrastructure, investor-friendly policies, and seamless connectivity. Positioned at the heart of the UAE, GM serves as a gateway between East and West, offering entrepreneurs, SMEs, and multinational corporations a competitive platform for expansion into the Middle East, Africa, and South Asia.
              As part of Sharjah’s dynamic economic vision, GM combines cost efficiency, accessibility, and a supportive ecosystem to ensure businesses thrive in a secure and growth-oriented environment.


            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <FleetGrid fleetPackages={fleetPackages} />
          </CardContent>
        </Card>




        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground  py-16">
              {/* Placeholder content area - ready for your content */}
              Contact Us
              For more information on setting up your business at GM Freezone – Sharjah, UAE, our dedicated Business Advisory Team is ready to assist you with personalized guidance.
              📍 Office Address:

              GM Freezone Authority,

              Sharjah, United Arab Emirates
              📞 Phone: +971 (0)6 123 4567

              📧 Email: info@gmfreezone.ae

              🌐 Website: www.gmfreezone.ae
              Our consultants are available to support you at every stage of your business journey — from selecting the right license and facilities, to completing registration and operational setup.
              Start your expansion today with GM Freezone – your gateway to growth in the UAE and beyond.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


function FleetGrid({ fleetPackages }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {fleetPackages.map((pkg, idx) => {
        const Icon = pkg.icon;

        return (

          <div key={idx} className="group border rounded-lg p-4 bg-muted/10 hover:bg-muted/20 transition">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Icon className="text-muted-foreground" />
              {pkg.title}
            </h3>

            <ul className="list-disc ml-6 mt-2 mb-2 space-y-1 text-muted-foreground">
              {pkg.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Home;
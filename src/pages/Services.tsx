import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FleetPackageCard from "./FleetPackageCard";
import { FaUserTie } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa6";
import { GiWorld, GiPlanetConquest } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiFrameCornersBold } from "react-icons/pi";
const Services = () => {
  const fleetPackages = [
    {
      title: "Commercial License",
      icon: FaConnectdevelop,
      items: [
        "Scope: Trading, import/export, distribution of specified products.",
        "Facilities: Warehouses, showrooms, office spaces.",
        "Benefits: Access to international trading networks, simplified customs processes, competitive leasing options.",
      ],
    },
    {
      title: "General Trading License",
      icon: GiWorld,
      items: [
        "Scope: Broad trading rights across multiple product categories.",
        "Facilities: Large warehouses, logistics hubs, display areas.",
        "Benefits: Unlimited product flexibility, enhanced logistics support, priority customs clearance.",
      ],
    },
    {
      title: "Industrial License",
      icon: LiaBusinessTimeSolid,
      items: [
        "Scope: Manufacturing, assembly, and industrial activities.",
        "Facilities: Industrial land plots, factory units, heavy-duty utilities.",
        "Benefits: Competitive energy rates, access to ports for raw material imports, workforce housing support.",
      ],
    },
    {
      title: "Service License",
      icon: FaConnectdevelop,
      items: [
        "Scope: Professional, IT, consultancy, education, and service-based industries.",
        "Facilities: Office units, business centers, shared workspaces.",
        "Benefits: Flexible visa quotas, simplified labor approvals, access to innovation and knowledge clusters.",
      ],
    },
    {
      title: "E-Commerce License",
      icon: GiWorld,
      items: [
        "Scope: Online trading platforms and digital businesses.",
        "Facilities: Digital-ready offices, shared services, logistics tie-ups.",
        "Benefits: Technology infrastructure, partnerships with payment gateways, last-mile delivery support.",
      ],
    },
    {
      title: "Branch License",
      icon: LiaBusinessTimeSolid,
      items: [
        "Scope: Expansion of existing regional or international companies.",
        "Facilities: Office and operational support units.",
        "Benefits: Retention of parent company identity, minimal incorporation procedures, regulatory ease.",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Page Header */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Licensing & Facilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            GM Freezone provides flexible licensing options to suit businesses across industries
          </p>
        </div>

        {/* Section 1: Core Services */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Licensing & Facilities
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <FleetGrid fleetPackages={fleetPackages} />
          </CardContent>
        </Card>

        {/* Section 2: Fleet Packages */}
        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Sectoral Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <FleetPackageCard
              title="Sectoral Opportunities"
              icon={<FaUserTie />}
              color="accent"
              items={[
                "Logistics & Supply Chain: Leveraging Sharjah’s ports and airports for regional distribution.",
                "E-Commerce & Digital Trade: Strong ICT infrastructure to support online ventures.",
                "Manufacturing: Ideal for light-to-medium industries such as packaging, food processing, and equipment assembly.",
                "Professional Services: Growing demand for IT, consulting, and knowledge-based industries.",
                "Renewables & Sustainability: Alignment with UAE’s national sustainability goals."
              ]}
            />
          </CardContent>
        </Card>

        {/* Section 3: Support & Maintenance Services */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Regulatory & Legal Framework
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <FleetPackageCard
              title="Regulatory & Legal Framework"
              icon={<PiFrameCornersBold />}
              color="primary"
              items={[
                "Governed by UAE’s investor-friendly freezone regulations.",
                "Transparent processes for incorporation, licensing, and dispute resolution.",
                "Strong legal protection for intellectual property and assets.",
                "Compliance with international business standards and treaties.",
              ]}
            />
          </CardContent>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Talent & Workforce Availability
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <FleetPackageCard
              title="Talent & Workforce Availability"
              icon={<FaUserTie />}
              color="accent"
              items={[
                "Access to a multilingual, skilled workforce from UAE and global markets.",
                "Cost-effective labor pool compared to neighboring emirates.",
                "Simplified visa and employment processing tailored to business needs.",
                "Workforce training and partnerships with Sharjah’s universities and vocational centers.",
              ]}
            />
          </CardContent>
        </Card>


        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Lifestyle & Support Ecosystem
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <FleetPackageCard
              title="Lifestyle & Support Ecosystem"
              icon={<GiPlanetConquest />}
              color="primary"
              items={[
                "Sharjah’s Advantage: A vibrant cultural capital with UNESCO recognition for heritage preservation.",
                "Affordable Living: Lower cost of living compared to Dubai and Abu Dhabi, while maintaining high quality of life.",
                "Education & Healthcare: Access to top universities, schools, and advanced healthcare facilities.",
                "Support Services: Banking, insurance, logistics, and consulting firms located within the freezone ecosystem.",
              ]}
            />
          </CardContent>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Competitive Advantages vs Other Freezones
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <FleetPackageCard
              title="Competitive Advantages vs Other Freezones"
              icon={<FaUserTie />}
              color="accent"
              items={[
                "Cost Efficiency: Competitive setup and operational costs.",
                "Location Strength: Sharjah’s central position ensures multi-modal access (sea, air, road).",
                "Industrial Focus: Strong orientation towards manufacturing and logistics.",
                "Cultural Differentiation: Sharjah’s reputation as a sustainable, knowledge-driven emirate enhances investor confidence.",
              ]}
            />
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

export default Services;
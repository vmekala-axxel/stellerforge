import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Page Header */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive aerospace solutions for the modern space age
          </p>
        </div>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Client Onboarding & Delivery Protocol
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground text-center py-16">
              {/* Placeholder content area - ready for your content */}
              Welcome to Stellar Forge Corporation—where vision meets vacuum.<br/>
              This document outlines the full lifecycle of your engagement with us, from initial contact through to final vessel deployment and post-delivery service. Our onboarding process is as refined as our starships—precise, secure, and galaxy-class.
            </p>
          </CardContent>
        </Card>

        {/* Section 1: Core Services */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Phase 1: Initial Contact & Discovery
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <ol className=" list-inside space-y-4 text-foreground">
              <li className="font-medium">
                1.1 Holonet Initiation
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Client initiates contact via encrypted Holonet relay, specifying:</li>
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                        <li>Intent (personal luxury, fleet procurement, tactical operations, etc.)</li>
                        <li>Sector of operation</li>
                        <li>Clearance code (if representing government or syndicate interests)</li>
                      </ul>
                  <li>Optional: Referral code from Republic Defense Corps or verified Outer Rim agents</li>
                </ul>
              </li>
              <li className="font-medium">
                1.2 Appointment Scheduling
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>A Protocol Droid schedules your initial consult with a Senior Shipwright</li>
                  <li>Available formats:</li>
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                        <li>Live Holoconference</li>
                        <li>In-person briefing at our Corellia, Kuat, or Mon Cala shipyards</li>
                        <li>Remote presence via droid proxy</li>
                      </ul>
                </ul>
              </li>
              <li className="font-medium">
                1.3 Pre-Design Questionnaire (PDQ)
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Comprehensive document covering:</li>
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                        <li>Intended mission profile</li>
                        <li>Environmental expectations (atmosphere, vacuum, radiation levels)</li>
                        <li>Pilot species and ergonomic needs</li>
                        <li>Armament tolerances (legal and otherwise)</li>
                        <li>Design inspirations (e.g., Naboo N-1, TIE Phantom, Ghost-class freighter)</li>

                      </ul>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Section 2: Fleet Packages */}
        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Fleet Packages
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <ol className="list-decimal list-inside space-y-4 text-foreground">
              <li className="font-medium">
                Government Agencies
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>NASA - International Space Station supply missions</li>
                  <li>European Space Agency - Satellite deployment services</li>
                  <li>JAXA - Lunar exploration payload transport</li>
                </ul>
              </li>
              <li className="font-medium">
                Commercial Partners
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>SpaceX - Collaborative deep space missions</li>
                  <li>Blue Origin - Joint orbital manufacturing projects</li>
                  <li>Virgin Galactic - Space tourism technology integration</li>
                </ul>
              </li>
              <li className="font-medium">
                Research Institutions
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>MIT - Advanced propulsion system development</li>
                  <li>Stanford University - AI-driven space navigation</li>
                  <li>CERN - Particle physics experiments in space</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Section 3: Support & Maintenance Services */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Support & Maintenance Services
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <ol className="list-decimal list-inside space-y-4 text-foreground">
              <li className="font-medium">
                What services does Stellar Forge Corporation offer?
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Spacecraft design and manufacturing</li>
                  <li>Satellite deployment and maintenance</li>
                  <li>Space tourism and commercial flights</li>
                </ul>
              </li>
              <li className="font-medium">
                How do you ensure safety in space operations?
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Rigorous testing protocols for all spacecraft</li>
                  <li>Advanced AI-powered navigation systems</li>
                  <li>Continuous monitoring and emergency response teams</li>
                </ul>
              </li>
              <li className="font-medium">
                What makes Stellar Forge different from competitors?
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Proprietary fusion-powered propulsion technology</li>
                  <li>Sustainable space exploration practices</li>
                  <li>25% lower costs through innovative manufacturing</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent py-4">
            Welcome to Stellar Forge Corporation
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
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground text-center py-16">
              {/* Placeholder content area - ready for your content */}
              Stellar Forge Corporation (SFC) is the premier manufacturer of custom and fleet-class starships across the galaxy. With over 500 years of operational excellence, SFC delivers tailored engineering, end-to-end design, and precision manufacturing services from our orbital shipyards above Corellia, Kuat, and Mon Cala. Our clientele includes high-ranking members of the Galactic Senate, independent system monarchies, elite bounty guilds, and even select Imperial and New Republic commissions.

              From Nubian-influenced aesthetic cruisers to Corellian-modified heavy freighters, Stellar Forge is synonymous with elite craftsmanship, hyperspace-capable reliability, and seamless galactic delivery.

            </p>
          </CardContent>
        </Card>

        {/* Section 2: Client Portfolio */}
        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader >
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Core Services
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground py-16">
              {/* Placeholder content area - ready for your content */}
              <ol className="list-decimal list-inside space-y-4 text-foreground">
                <li className="font-medium">
                  <strong>Starship Conceptual Design</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Holotable Ideation Sessions with our Master Shipwrights</li>
                    <li>Fleet Needs Analysis (FNA) using proprietary SFC Galactic Scenario Engines</li>
                    <li>Bespoke Interiors: Kyber crystal lighting, Coruscant-style executive lounges, Wookiee-hide upholstery</li>
                    <li>External design inspired by famed engineers of the Mon Calamari schools</li>
                  </ul>
                </li>

                <li className="font-medium">
                  Custom Engineering & Fabrication
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Droid-integrated CAD blueprints based on holoscanned terrain and combat profiles</li>
                    <li>Chassis options: Beskar-titanium alloy, Duralium-reinforced plating, transparisteel cockpits</li>
                    <li>
                      Shield Generator Options:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                        <li>SFC-Deflex Mark IX for planetary defense cruisers</li>
                        <li>Aegis Veil Series for stealth-class infiltration vessels</li>
                      </ul>
                    </li>
                    <li>
                      Engines & Propulsion:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                        <li>Quadex Kyros-Hyperspeed Cores for long-haul travel</li>
                        <li>SFC Custom Ion Drives with modulation stability across gravity wells</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="font-medium">
                  Weapons & Defensive Systems
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Sienar-inspired Twin Laser Cannons (TLC) with auto-targeting arrays</li>
                    <li>Advanced Countermeasure Suites (ACS) with ECM cloaking and flare drone dispersal</li>
                    <li>Modular Torpedo Bays (Proton, Concussion, Seeker-class)</li>
                  </ul>
                </li>

                <li className="font-medium">
                  Interstellar Compliance & Certification
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>SFC-compliant across all major jurisdictions: Galactic Republic, Empire, New Republic, and Hutt-controlled territories</li>
                    <li>Certified by the Galactic Shipwrights’ Guild and the Corellian Engineering Trust</li>
                  </ul>
                </li>

                <li className="font-medium">
                  Testing & Calibration
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Atmosphere-to-space transitions tested in the Kessel Drift simulator</li>
                    <li>Live-fire weapon testing zones at the Mandalorian Defense Ring</li>
                    <li>Real-world cargo stress tests in the Maelstrom Passage and the Hoth run</li>
                  </ul>
                </li>

                <li className="font-medium">
                  Delivery & Deployment
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Sector-wide drop ship and drone tug services</li>
                    <li>Gravity-assist orbital insertion</li>
                    <li>Complimentary in-system navigation tuning and astrography updates</li>
                    <li>On-demand starfighter escort available for volatile systems (Outer Rim and Unknown Regions)</li>
                  </ul>
                </li>
              </ol>

            </p>
          </CardContent>
        </Card>

        {/* Section 3: Frequently Asked Questions */}
        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Fleet Packages
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground py-16">
              {/* Placeholder content area - ready for your content */}
              <ol className="list-decimal list-inside space-y-4 text-foreground">
                <li className="font-medium">
                  <strong>Executive Series (XS-Class)</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Ideal for corporate diplomats, Core World emissaries, and planetary governors</li>
                    <li>Includes full crew droid support, holoconferencing suite, and escape pod fleet</li>
                  </ul>
                </li>
                <li className="font-medium">
                  <strong>Tactical Combat Series (TCS-Class)</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Popular among Mandalorian clans and sector militias</li>
                    <li>Configurable to house elite strike teams, hover tanks, and TIE fighter hangars</li>
                  </ul>
                </li>
                <li className="font-medium">
                  <strong>Freighter Series (FS-Class)</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Durable and upgrade-friendly</li>
                    <li>Docking compatibility with Trade Federation spaceports and Rebel Alliance drop platforms</li>
                  </ul>
                </li>
                <li className="font-medium">
                  <strong>Stealth Recon Series (SRS-Class)</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Equipped with stealth plating, subspace dampeners, and SFC Ghost Drives</li>
                    <li>Ideal for intelligence operations, bounty retrieval, and Jedi artifact acquisition</li>
                  </ul>
                </li>
                <li className="font-medium">
                  <strong>Luxury Leisure Series (LLS-Class)</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                    <li>10,000+ hyperlane itineraries pre-programmed by Canto Bight Navigators’ Circle</li>
                    <li>Onboard Gungan-style spas, Alderaanian cuisine replicators, and live holo-theatres</li>
                  </ul>
                </li>
              </ol>
            </p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Support & Maintenance Services
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground  py-16">
              {/* Placeholder content area - ready for your content */}
              <ol className="list-decimal list-inside space-y-4 text-foreground">
                <li><strong>Galaxy-wide service centers in 60+ systems, including Naboo, Ord Mantell, and Rishi</strong></li>
                <li><strong>Remote diagnostic support via Holonet relay</strong></li>
                <li> <strong>Kyber core refocusing & deflector shield remapping</strong></li>
                <li><strong>In-warranty refurbishments using clone-grade parts</strong></li>
                <li><strong>Subscription-based starlog upgrade packs</strong></li>
              </ol>
            </p>
          </CardContent>
        </Card>


        <Card className="border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              Client Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground  py-16">
              {/* Placeholder content area - ready for your content */}
              <ol className="list-decimal list-inside space-y-4 text-foreground">
                <li><strong>House Organa (Alderaan)</strong></li>
                <li><strong>Zygerrian Royal Fleet</strong></li>
                <li> <strong>Sith Eternal Vanguard</strong></li>
                <li><strong>New Republic Defense Command</strong></li>
                <li><strong>Sundari Remnant Clans</strong></li>
                <li><strong>Trade Federation Post-War Council</strong></li>
              </ol>
            </p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardHeader >
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="min-h-[200px]">
            <p className="text-muted-foreground py-16">
              {/* Placeholder content area - ready for your content */}
              <ol className="list-inside space-y-4 text-foreground">
                <li className="font-medium">
                  Q: Do you offer hybrid designs with elements from other shipwrights like Kuat Drive Yards or Incom Corporation?
                  <ul className=" list-inside  mt-2 space-y-1 text-muted-foreground">
                    <li>A: Absolutely. We have licensed fusion templates and design partnerships allowing hybrid configurations compliant with local and imperial regulations.</li>
                  </ul>
                </li>

                <li className="font-medium">
                  Q: Can you deliver ships to embargoed sectors?
                  <ul className=" list-inside  mt-2 space-y-1 text-muted-foreground">
                    <li>A: While we adhere to Republic and Senate-imposed embargoes, we do offer encrypted private delivery missions under diplomatic charters upon request.</li>
                  </ul>
                </li>

                <li className="font-medium">
                  Q: Do your ships support Sith holocron power cores?
                  <ul className=" list-inside  mt-2 space-y-1 text-muted-foreground">
                    <li>A: We do not officially support Sith-aligned dark energy cores, but certain legacy vessels may contain compatibility layers for artifact-class modules.</li>
                  </ul>
                </li>

                <li className="font-medium">
                  Q: Do you maintain legacy support for Clone Wars-era hardware?
                  <ul className=" list-inside  mt-2 space-y-1 text-muted-foreground">
                    <li>A: Yes. We stock replacement parts for LAAT/i, Venator-class variants, and Naboo starfighters.</li>
                  </ul>
                </li>

              </ol>

            </p>
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
              To request a quote or initiate a holoconference with one of our Starship Architects, please initiate a Holonet transmission with clearance level 3 or above.<br/>

              Encrypted Channel: `SFC-ComNet://Hypernode.77/Forge`<br/>

              May your path through hyperspace be stable and swift.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
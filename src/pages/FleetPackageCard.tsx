const FleetPackageCard = ({ title, items, icon, color="primary" }) => (
  <div className="border rounded-lg p-4 bg-muted/10 hover:bg-muted/20 transition">
    <h3 className={color=='primary'?"flex items-center gap-2 text-lg font-semibold text-primary":"flex items-center gap-2 text-lg font-semibold text-accent"}>
      {icon} {title}
    </h3>
    <ul className="list-disc ml-6 mt-2 space-y-1 text-muted-foreground">
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>
);

export default FleetPackageCard;
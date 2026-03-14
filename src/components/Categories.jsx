import Card from "./Card";
import ScrollReveal from "./ScrollReveal";

const primary = [
  "New & Featured",
  "Mobile",
  "TV & AV",
  "Appliances",
  "Computing & Displays",
  "Wearables",
  "Accessories",
];

const detailGroups = [
  ["Galaxy Z", "Galaxy S", "Galaxy A", "Galaxy M", "Galaxy Tab", "Mobile Accessories"],
  ["Neo QLED", "OLED TV", "QLED TV", "Crystal UHD", "The Frame", "Audio Devices"],
  ["Refrigerators", "Microwave Ovens", "Washers and Dryers", "Air Conditioners", "Vacuum Cleaners", "Accessories"],
  ["Galaxy Book", "Monitors", "Memory & Storage", "Computing Accessories", "Displays", "Business Devices"],
];

const Categories = () => {
  return (
    <ScrollReveal className="category-section">
      <h2 className="reveal-item">Samsung essentials</h2>

      <div className="essential-tabs reveal-item">
        {primary.map((item, index) => (
          <a href="#" className={index === 0 ? "active" : ""} key={item}>
            {item}
          </a>
        ))}
      </div>

      <div className="essential-grid">
        {detailGroups.map((group, idx) => (
          <div className="reveal-item" key={idx}>
            <Card title={group[0]} text={group.slice(1).join(" | ")} linkLabel="Explore" compact />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default Categories;

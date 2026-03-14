import Card from "./Card";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    title: "Samsung Rewards",
    text: "Earn up to 2% Samsung Rewards points on your purchase",
  },
  {
    title: "Samsung Care+",
    text: "Add SC+ for peace of mind from accidental damage",
  },
  {
    title: "Free Delivery",
    text: "Sign in or sign up to get free delivery",
  },
  {
    title: "Flexible Finance",
    text: "Spread the cost to suit your budget",
  },
];

const guides = [
  "Find your smartphone",
  "Find your TV",
  "Find your laundry appliance",
  "Find your monitor",
];

const ProductSection = () => {
  return (
    <main className="content-wrap">
      <ScrollReveal className="reasons-section">
        <h2 className="reveal-item">Buy direct. Get more.</h2>
        <div className="reasons-grid">
          {reasons.map((item) => (
            <div className="reveal-item" key={item.title}>
              <Card title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="recommend-section">
        <h2 className="reveal-item">Recommended for you</h2>
        <div className="recommend-grid">
          {guides.map((guide) => (
            <div className="reveal-item" key={guide}>
              <Card title={guide} text="Get product guidance based on your lifestyle and usage." />
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="stores-section">
        <h2 className="reveal-item">Special stores</h2>
        <div className="stores-grid">
          <div className="reveal-item">
            <Card title="For students and educators" text="Save more with verified student and educator programs." />
          </div>
          <div className="reveal-item">
            <Card title="For Business" text="Solutions and special pricing for modern organizations." />
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
};

export default ProductSection;

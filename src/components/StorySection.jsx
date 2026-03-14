import Card from "./Card";
import ScrollReveal from "./ScrollReveal";

const stories = [
  {
    title: "Connected Living",
    text: "See how SmartThings syncs your phone, TV and home devices.",
  },
  {
    title: "Galaxy AI Tips",
    text: "Explore practical ways to use AI features every day.",
  },
  {
    title: "Bespoke Home",
    text: "Design a home setup that matches your style and needs.",
  },
];

const StorySection = () => {
  return (
    <ScrollReveal className="story-section">
      <h2 className="reveal-item">Explore Samsung stories</h2>
      <div className="story-grid">
        {stories.map((story) => (
          <div className="reveal-item" key={story.title}>
            <Card title={story.title} text={story.text} />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};

export default StorySection;

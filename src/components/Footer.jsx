const groups = [
  {
    title: "Product & Service",
    links: ["Smartphones", "Tablets", "TVs", "Laptops", "Home Appliances"],
  },
  {
    title: "Shop",
    links: ["Offers", "Samsung Rewards", "Store Locator", "Samsung Care+", "Corporate Program"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Email Support", "Community", "Track Repair", "Product Registration"],
  },
  {
    title: "About Us",
    links: ["Company Info", "Careers", "Newsroom", "Ethics", "Sustainability"],
  },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {groups.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            {group.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>Copyright 1995-2026 Samsung. All rights reserved.</p>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

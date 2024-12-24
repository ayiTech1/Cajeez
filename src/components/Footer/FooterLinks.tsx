import React from 'react';

const FooterLinks: React.FC = () => {
  const linkSections = [
    {
      title: 'Quick Links',
      links: ['Browse Jobs', 'Browse Companies', 'Salaries', 'My Account', 'About Cajeex'],
    },
    {
      title: 'Employers',
      links: ['Post A Job', 'Offer Internship'],
    },
    {
      title: 'Job Seekers',
      links: ['Post Resume', 'Career Advice', 'CV Review Services'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms', 'FAQs'],
    },
    {
      title: 'Popular Searches',
      links: ['Remote Jobs', 'Software Designers', 'Data Analysts', 'Part Time', 'Student Jobs'],
    },
  ];

  return (
    <div className="footer-links">
      {linkSections.map((section) => (
        <div key={section.title}>
          <h4>{section.title}</h4>
          {section.links.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;

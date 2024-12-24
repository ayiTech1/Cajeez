import React from 'react';

const SocialLinks: React.FC = () => {
  const links = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <div className="social-links">
      {links.map((link) => (
        <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

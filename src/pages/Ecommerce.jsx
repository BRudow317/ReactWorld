import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

const EcommerceSite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={styles.container}>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Footer />
    </div>
  );
};

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      zIndex: 50
    },
    container: {
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
      color: '#111'
    },
    nav: {
      display: 'none',
      gap: '2rem',
      '@media (min-width: 768px)': {
        display: 'flex'
      }
    },
    navLink: {
      fontSize: '0.875rem',
      color: '#111',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 500
    },
    icons: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },
    iconButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem'
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <button 
          style={styles.iconButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div style={styles.logo}>ETQ AMSTERDAM</div>
        
        <div style={styles.icons}>
          <button style={styles.iconButton}><Search size={20} /></button>
          <button style={styles.iconButton}><ShoppingBag size={20} /></button>
        </div>
      </div>
    </header>
  );
};

const MobileMenu = ({ setMobileMenuOpen }) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: '65px',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      zIndex: 40,
      overflowY: 'auto',
      padding: '2rem 1.5rem'
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    navLink: {
      fontSize: '1rem',
      color: '#111',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 500,
      paddingBottom: '1rem',
      borderBottom: '1px solid #e5e7eb'
    }
  };

  return (
    <div style={styles.overlay}>
      <nav style={styles.nav}>
        <a href="#" style={styles.navLink}>Footwear</a>
        <a href="#" style={styles.navLink}>Menswear</a>
        <a href="#" style={styles.navLink}>Sale</a>
        <a href="#" style={styles.navLink}>About</a>
      </nav>
    </div>
  );
};

const Hero = () => {
  const styles = {
    hero: {
      position: 'relative',
      height: '60vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    content: {
      textAlign: 'center',
      zIndex: 1,
      padding: '2rem'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 300,
      marginBottom: '1rem',
      letterSpacing: '0.02em',
      color: '#111'
    },
    subtitle: {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '2rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    button: {
      padding: '1rem 2.5rem',
      backgroundColor: '#111',
      color: 'white',
      border: 'none',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>■ Wardrobe Essentials</h1>
        <p style={styles.subtitle}>Timeless pieces for every season</p>
        <button 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#111'}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

const CategoryGrid = () => {
  const categories = [
    { name: 'Sneakers', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400' },
    { name: 'T-Shirts', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
    { name: 'Loafers', img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400' },
    { name: 'Trousers', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400' }
  ];

  const styles = {
    section: {
      padding: '4rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    title: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#111'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    },
    category: {
      position: 'relative',
      aspectRatio: '1',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease'
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      textAlign: 'center'
    },
    categoryName: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 500
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Explore Our Collections</h2>
      <div style={styles.grid}>
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            style={styles.category}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
          >
            <img src={cat.img} alt={cat.name} style={styles.image} />
            <div style={styles.overlay}>
              <span style={styles.categoryName}>{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProductGrid = () => {
  const products = [
    { name: 'LT 03 Premium Nappa White', price: 224, oldPrice: 321, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400' },
    { name: 'CB 01 Rugged Suede', price: 207, oldPrice: 345, img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400' },
    { name: 'LT 01 Shades Nubuck', price: 257, oldPrice: 321, img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400' },
    { name: 'DS 01 Rugged Black', price: 208, oldPrice: 297, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' }
  ];

  const styles = {
    section: {
      padding: '2rem 1.5rem 4rem',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '2rem'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const styles = {
    card: {
      cursor: 'pointer'
    },
    imageWrapper: {
      position: 'relative',
      aspectRatio: '3/4',
      backgroundColor: '#f5f5f5',
      marginBottom: '1rem',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease'
    },
    badge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      padding: '0.25rem 0.75rem',
      backgroundColor: '#111',
      color: 'white',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    info: {
      padding: '0 0.5rem'
    },
    name: {
      fontSize: '0.875rem',
      marginBottom: '0.5rem',
      color: '#111'
    },
    priceWrapper: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center'
    },
    price: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#111'
    },
    oldPrice: {
      fontSize: '0.875rem',
      color: '#999',
      textDecoration: 'line-through'
    }
  };

  const discount = Math.round((1 - product.price / product.oldPrice) * 100);

  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      <div style={styles.imageWrapper}>
        <img src={product.img} alt={product.name} style={styles.image} />
        <div style={styles.badge}>-{discount}%</div>
      </div>
      <div style={styles.info}>
        <div style={styles.name}>{product.name}</div>
        <div style={styles.priceWrapper}>
          <span style={styles.price}>${product.price}</span>
          <span style={styles.oldPrice}>${product.oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f9f9f9',
      padding: '3rem 1.5rem 2rem',
      borderTop: '1px solid #e5e7eb'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    heading: {
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 600,
      marginBottom: '0.5rem'
    },
    link: {
      fontSize: '0.875rem',
      color: '#666',
      textDecoration: 'none'
    },
    copyright: {
      textAlign: 'center',
      fontSize: '0.75rem',
      color: '#999',
      paddingTop: '2rem',
      borderTop: '1px solid #e5e7eb'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.column}>
            <div style={styles.heading}>Shop</div>
            <a href="#" style={styles.link}>Footwear</a>
            <a href="#" style={styles.link}>Menswear</a>
            <a href="#" style={styles.link}>Sale</a>
          </div>
          <div style={styles.column}>
            <div style={styles.heading}>Info</div>
            <a href="#" style={styles.link}>Shipping & Delivery</a>
            <a href="#" style={styles.link}>Returns & Exchanges</a>
            <a href="#" style={styles.link}>Size Guide</a>
          </div>
          <div style={styles.column}>
            <div style={styles.heading}>Contact</div>
            <a href="#" style={styles.link}>Email us</a>
            <a href="#" style={styles.link}>+31 85 40 13 553</a>
          </div>
        </div>
        <div style={styles.copyright}>
          © 2024 ETQ Amsterdam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: 'white'
  }
};

export default EcommerceSite;
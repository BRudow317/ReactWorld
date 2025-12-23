import { CarouselCard } from "./CarouselCard";
//import { CarouselStyles } from "./CarouselStyles";
/**
 * Demo implementation showing how to use the component
 */
export const CarouselCardDemo = () => {
  // Example media items array
  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      alt: 'Mountain landscape',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800',
      alt: 'Ocean sunset',
    },
    {
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      alt: 'Sample video',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
      alt: 'Forest path',
    },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>
        Card Carousel Component
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        Supports images and videos with lazy loading
      </p>
      
      <CarouselCard 
        items={mediaItems} 
        cardWidth={600} 
        cardHeight={400}
        autoPlay={true}
        autoPlayInterval={4000}
      />

      <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>Usage Example:</h2>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
{`<CarouselCard 
  items={[
    { type: 'image', src: 'url', alt: 'desc' },
    { type: 'video', src: 'url', alt: 'desc' }
  ]}
  cardWidth={600}
  cardHeight={400}
  autoPlay={true}
  autoPlayInterval={4000}
/>`}
        </pre>
      </div>
    </div>
  );
};
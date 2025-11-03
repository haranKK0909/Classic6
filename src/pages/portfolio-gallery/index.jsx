import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import CategoryFilter from './components/CategoryFilter';
import FeaturedSlideshow from './components/FeaturedSlideshow';
import ImageLightbox from './components/ImageLightbox';
import CallToAction from './components/CallToAction';
import Icon from '../../components/AppIcon';

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'engagement', name: 'Engagements' },
    { id: 'baby-shower', name: 'Baby Showers' },
    { id: 'baby', name: 'Baby portraits' },
    { id: 'family', name: 'Family Portraits' },
    { id: 'school', name: 'School Events' },
  ];

  // Mock data for featured slideshow images
  const featuredImages = [
    {
      id: 'featured-1',
      src: "https://images.unsplash.com/photo-1600243224541-0d53bb1f872b",
      alt: 'Elegant bride in flowing white dress walking through sunlit garden with trailing bouquet',
      title: 'Garden Romance Wedding',
      description: 'A dreamy outdoor celebration where love bloomed among the roses. Sarah and Michael\'s intimate garden wedding captured the essence of timeless romance.',
      category: 'Wedding'
    },
    {
      id: 'featured-2',
      src: "https://images.unsplash.com/photo-1661810013625-fdfb7a43d3a3",
      alt: 'Expecting mother in flowing cream dress cradling baby bump in golden hour light',
      title: 'Expecting Miracles',
      description: 'The anticipation and joy of new life beautifully documented. Emma\'s maternity session celebrated the wonder of motherhood in soft, natural light.',
      category: 'Maternity'
    },
    {
      id: 'featured-3',
      src: "https://images.unsplash.com/photo-1634048893928-2de412922aed",
      alt: 'Multi-generational family of six laughing together on wooden dock by lake at sunset',
      title: 'Legacy Moments',
      description: 'Three generations united in laughter and love. The Johnson family\'s annual reunion captured precious bonds that span decades.',
      category: 'Family'
    },
  ];

  // Mock data for gallery images
  const galleryImages = [
    {
      id: 'img-1',
      src: "assets/images/wed1.jpg",
      alt: 'Bride and groom sharing first dance under string lights in rustic barn venue',
      title: 'First Dance Magic',
      description: 'The moment when two hearts become one, surrounded by the warm glow of celebration.',
      category: 'Wedding',
      client: 'Sarah & Michael Thompson'
    },
    {
      id: 'img-2',
      src: "assets/images/eng1.jpg",
      alt: 'Pregnant woman in pink dress holding ultrasound photo while partner kisses her forehead',
      title: 'Sweet Anticipation',
      description: 'The joy of expecting parents sharing their first glimpse of their little miracle.',
      category: 'Engagement',
      client: 'Emma & David Rodriguez'
    },
    {
      id: 'img-3',
      src: "assets/images/eng3.JPG",
      alt: 'Five-year-old girl in princess dress blowing out candles on rainbow birthday cake',
      title: 'Princess Birthday Dreams',
      description: 'Every little girl deserves to feel like royalty on her special day.',
      category: 'Engagement',
      client: 'Isabella Chen - 5th Birthday'
    },
    {
      id: 'img-4',
      src: "assets/images/bs2.jpg",
      alt: 'Couple embracing on beach at sunset with waves gently lapping at their feet',
      title: 'Seaside Romance',
      description: 'Love as endless as the ocean, captured in the golden hour of their engagement.',
      category: 'Baby Shower',
      client: 'Jessica & Ryan Martinez'
    },
    {
      id: 'img-5',
      src: "assets/images/eng2.jpg",
      alt: 'Pregnant woman in white dress surrounded by pink and gold balloons and baby shower decorations',
      title: 'Baby Shower Bliss',
      description: 'Celebrating the upcoming arrival with friends, family, and endless love.',
      category: 'Engagement',
      client: 'Amanda Foster Baby Shower'
    },
    {
      id: 'img-6',
      src: "assets/images/baby1.jpg",
      alt: 'Family of four walking hand in hand through autumn leaves in park',
      title: 'Autumn Family Stroll',
      description: 'The beauty of family bonds captured among nature\'s golden palette.',
      category: 'baby',
      client: 'The Williams Family'
    },
    {
      id: 'img-7',
      src: "assets/images/p1.jpg",
      alt: 'Bride in vintage lace dress holding bouquet of white peonies and greenery',
      title: 'Vintage Elegance',
      description: 'Timeless beauty captured in delicate lace and fresh blooms.',
      category: 'family',
      client: 'Catherine & James Wilson'
    },
    {
      id: 'img-8',
      src: "assets/images/wed2.jpg",
      alt: 'Toddler boy in suspenders and bow tie reaching for colorful birthday balloons',
      title: 'Little Gentleman',
      description: 'The wonder and excitement of childhood celebrations.',
      category: 'Wedding',
      client: 'Oliver Johnson - 2nd Birthday'
    },
    {
      id: 'img-9',
      src: "assets/images/baby2.jpg",
      alt: 'Couple laughing together while sitting on vintage blanket during picnic engagement session',
      title: 'Picnic Proposal',
      description: 'Love shared over simple moments and heartfelt laughter.',
      category: 'baby',
      client: 'Sophia & Marcus Taylor'
    },
    {
      id: 'img-10',
      src: "assets/images/wed3.jpg",
      alt: 'Expecting mother in flowing blue dress standing in field of wildflowers at golden hour',
      title: 'Wildflower Dreams',
      description: 'The natural beauty of motherhood blooming like flowers in the field.',
      category: 'Wedding',
      client: 'Rachel & Tom Anderson'
    },
    {
      id: 'img-11',
      src: "assets/images/baby3.jpg",
      alt: 'Baby shower setup with pastel decorations, gift table, and expecting mother opening presents',
      title: 'Pastel Paradise',
      description: 'A celebration of new life surrounded by love and anticipation.',
      category: 'baby ',
      client: 'Maria Santos Baby Shower'
    },
    {
      id: 'img-12',
      src: "assets/images/bs1.jpg",
      alt: 'Three generations of women - grandmother, mother, and daughter - embracing in garden',
      title: 'Generations of Love',
      description: 'The beautiful legacy of love passed down through generations.',
      category: 'Baby Shower',
      client: 'The Peterson Women'
    },
  ];

  const testimonials = [
    {
      id: 'testimonial-1',
      name: 'Sarah Thompson',
      avatar: "https://images.unsplash.com/photo-1725271765764-669af9988700",
      avatarAlt: 'Professional headshot of young woman with brown hair and warm smile in white blouse',
      quote: 'VisualStory didn\'t just photograph our wedding - they captured our love story. Every image tells the tale of our perfect day with such artistry and emotion.',
      event: 'Garden Wedding',
      date: 'September 2024',
      rating: 5
    },
    {
      id: 'testimonial-2',
      name: 'Emma Rodriguez',
      avatar: "https://images.unsplash.com/photo-1507532459814-b32f63cf4497",
      avatarAlt: 'Portrait of Hispanic woman with long dark hair smiling warmly at camera',
      quote: 'The maternity session was magical. They made me feel beautiful and confident, capturing this precious time in our lives with such grace and creativity.',
      event: 'Maternity Session',
      date: 'October 2024',
      rating: 5
    },
  ];

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return galleryImages;
    }
    return galleryImages?.filter((image) =>
      image?.category?.toLowerCase()?.replace(' ', '-') === activeCategory
    );
  }, [activeCategory, galleryImages]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages?.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages?.length) % filteredImages?.length);
  };

  // Inline GalleryGrid component for completeness (or import from ./components/GalleryGrid)
  const GalleryGrid = ({ images, onImageClick }) => {
    if (!images || images.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="font-body text-muted-foreground">No images found for this category.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"> {/* Matches the 3x3 grid style from the image */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg border border-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer aspect-square"
            onClick={() => onImageClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Optional hover overlay for title */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                {image.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section with Featured Slideshow */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              The Secret Story Teller
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every celebration tells a unique story deserving to be captured with artistic excellence. 
              Discover our portfolio of life's most precious moments, beautifully preserved for generations.
            </p>
          </div>

          {/* <FeaturedSlideshow featuredImages={featuredImages} /> */}
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory} 
          />

          <div className="mb-8">
            <p className="font-body text-sm text-muted-foreground text-center">
              Showing {filteredImages?.length} {filteredImages?.length === 1 ? 'image' : 'images'}
              {activeCategory !== 'all' &&
                <span> in {categories?.find((cat) => cat?.id === activeCategory)?.name}</span>
              }
            </p>
          </div>

          <GalleryGrid
            images={filteredImages}
            onImageClick={handleImageClick} 
          />
        </div>
      </section>
      {/* Client Testimonials */}
      {/* <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Stories From Our Clients
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Hear what our clients say about their VisualStory experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials?.map((testimonial) =>
              <ClientTestimonial
                key={testimonial?.id}
                testimonial={testimonial} />
            )}
          </div>
        </div>
      </section> */}
      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <CallToAction />
        </div>
      </section>
      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage} 
      />
    </div>
  );
};

export default PortfolioGallery;
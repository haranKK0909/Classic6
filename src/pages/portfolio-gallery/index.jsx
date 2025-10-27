import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import CategoryFilter from './components/CategoryFilter';
import FeaturedSlideshow from './components/FeaturedSlideshow';
import GalleryGrid from './components/GalleryGrid';
import ImageLightbox from './components/ImageLightbox';
// import ClientTestimonial from './components/ClientTestimonial';
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
  { id: 'baby-shower', name: 'Baby Showers' },
  { id: 'birthday', name: 'Birthdays' },
  { id: 'family', name: 'Family Portraits' },
  { id: 'maternity', name: 'Maternity' },
  { id: 'engagement', name: 'Engagements' }];


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
  }];


  // Mock data for gallery images
  const galleryImages = [
  {
    id: 'img-1',
    src: "https://images.unsplash.com/photo-1723652871570-5a69ce779d7e",
    alt: 'Bride and groom sharing first dance under string lights in rustic barn venue',
    title: 'First Dance Magic',
    description: 'The moment when two hearts become one, surrounded by the warm glow of celebration.',
    category: 'Wedding',
    client: 'Sarah & Michael Thompson'
  },
  {
    id: 'img-2',
    src: "https://images.unsplash.com/photo-1702360681320-b98ddd6ab13b",
    alt: 'Pregnant woman in pink dress holding ultrasound photo while partner kisses her forehead',
    title: 'Sweet Anticipation',
    description: 'The joy of expecting parents sharing their first glimpse of their little miracle.',
    category: 'Maternity',
    client: 'Emma & David Rodriguez'
  },
  {
    id: 'img-3',
    src: "https://images.unsplash.com/photo-1553710131-0da5880ba2d7",
    alt: 'Five-year-old girl in princess dress blowing out candles on rainbow birthday cake',
    title: 'Princess Birthday Dreams',
    description: 'Every little girl deserves to feel like royalty on her special day.',
    category: 'Birthday',
    client: 'Isabella Chen - 5th Birthday'
  },
  {
    id: 'img-4',
    src: "https://images.unsplash.com/photo-1719766507230-838568d68659",
    alt: 'Couple embracing on beach at sunset with waves gently lapping at their feet',
    title: 'Seaside Romance',
    description: 'Love as endless as the ocean, captured in the golden hour of their engagement.',
    category: 'Engagement',
    client: 'Jessica & Ryan Martinez'
  },
  {
    id: 'img-5',
    src: "https://images.unsplash.com/photo-1635929328741-d89b44824e09",
    alt: 'Pregnant woman in white dress surrounded by pink and gold balloons and baby shower decorations',
    title: 'Baby Shower Bliss',
    description: 'Celebrating the upcoming arrival with friends, family, and endless love.',
    category: 'Baby Shower',
    client: 'Amanda Foster Baby Shower'
  },
  {
    id: 'img-6',
    src: "https://images.unsplash.com/photo-1576921875269-41c7778aa938",
    alt: 'Family of four walking hand in hand through autumn leaves in park',
    title: 'Autumn Family Stroll',
    description: 'The beauty of family bonds captured among nature\'s golden palette.',
    category: 'Family',
    client: 'The Williams Family'
  },
  {
    id: 'img-7',
    src: "https://images.unsplash.com/photo-1482954727730-2c843ce77718",
    alt: 'Bride in vintage lace dress holding bouquet of white peonies and greenery',
    title: 'Vintage Elegance',
    description: 'Timeless beauty captured in delicate lace and fresh blooms.',
    category: 'Wedding',
    client: 'Catherine & James Wilson'
  },
  {
    id: 'img-8',
    src: "https://images.unsplash.com/photo-1676491697722-1ced8f1c6ac4",
    alt: 'Toddler boy in suspenders and bow tie reaching for colorful birthday balloons',
    title: 'Little Gentleman',
    description: 'The wonder and excitement of childhood celebrations.',
    category: 'Birthday',
    client: 'Oliver Johnson - 2nd Birthday'
  },
  {
    id: 'img-9',
    src: "https://images.unsplash.com/photo-1695852372577-b4c9565e0649",
    alt: 'Couple laughing together while sitting on vintage blanket during picnic engagement session',
    title: 'Picnic Proposal',
    description: 'Love shared over simple moments and heartfelt laughter.',
    category: 'Engagement',
    client: 'Sophia & Marcus Taylor'
  },
  {
    id: 'img-10',
    src: "https://images.unsplash.com/photo-1600153208802-9bf790cdff42",
    alt: 'Expecting mother in flowing blue dress standing in field of wildflowers at golden hour',
    title: 'Wildflower Dreams',
    description: 'The natural beauty of motherhood blooming like flowers in the field.',
    category: 'Maternity',
    client: 'Rachel & Tom Anderson'
  },
  {
    id: 'img-11',
    src: "https://images.unsplash.com/photo-1681497397524-0dabeca42094",
    alt: 'Baby shower setup with pastel decorations, gift table, and expecting mother opening presents',
    title: 'Pastel Paradise',
    description: 'A celebration of new life surrounded by love and anticipation.',
    category: 'Baby Shower',
    client: 'Maria Santos Baby Shower'
  },
  {
    id: 'img-12',
    src: "https://images.unsplash.com/photo-1609259359977-a5a4865f3df4",
    alt: 'Three generations of women - grandmother, mother, and daughter - embracing in garden',
    title: 'Generations of Love',
    description: 'The beautiful legacy of love passed down through generations.',
    category: 'Family',
    client: 'The Peterson Women'
  }];


  // Mock testimonials data
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
  }];


  // Filter images based on active category
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section with Featured Slideshow */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Visual Stories That Last Forever
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every celebration tells a unique story deserving to be captured with artistic excellence. 
              Discover our portfolio of life's most precious moments, beautifully preserved for generations.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Camera" size={16} className="mr-2 text-accent" />
                <span>500+ Stories Captured</span>
              </div>
              <div className="flex items-center">
                <Icon name="Heart" size={16} className="mr-2 text-accent" />
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={16} className="mr-2 text-accent" />
                <span>Award-Winning Photography</span>
              </div>
            </div>
          </div>

          <FeaturedSlideshow featuredImages={featuredImages} />
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Explore Our Portfolio
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of captured moments, each telling a unique story of love, joy, and celebration.
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory} />


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
            onImageClick={handleImageClick} />

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
        onPrevious={handlePreviousImage} />

    </div>);

};

export default PortfolioGallery;
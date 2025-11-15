import React, { useState, useMemo, useEffect } from "react";
import Header from "../../components/ui/Header";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedSlideshow from "./components/FeaturedSlideshow";
import ImageLightbox from "./components/ImageLightbox";
import CallToAction from "./components/CallToAction";
import "./index.css";

import Icon from "../../components/AppIcon";

const PortfolioGallery = () => {
  // Slideshow images
  const slideshowImages = [
    "/assets/images/wed2.jpg",
    "/assets/images/eng2.jpg",
    "/assets/images/wed1.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto slideshow
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % slideshowImages.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);


  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Stories" },
    { id: "wedding", name: "Weddings" },
    { id: "engagement", name: "Engagements" },
    { id: "baby-shower", name: "Baby Showers" },
    { id: "baby", name: "Baby Portraits" },
    { id: "family", name: "Family Portraits" },
    { id: "school", name: "School Events" },
  ];

  const galleryImages = [
    {
      id: "img-1",
      src: "/assets/images/wed1.jpg",
      alt: "Bride and groom sharing first dance",
      title: "First Dance Magic",
      description: "The moment when two hearts become one.",
      category: "Wedding",
      client: "Sarah & Michael Thompson",
    },
    {
      id: "img-2",
      src: "/assets/images/eng1.jpg",
      alt: "Couple maternity moment",
      title: "Sweet Anticipation",
      description: "The joy of expecting parents.",
      category: "Engagement",
      client: "Emma & David Rodriguez",
    },
    {
      id: "img-3",
      src: "/assets/images/eng3.JPG",
      alt: "Birthday celebration",
      title: "Princess Birthday Dreams",
      description: "A magical birthday moment.",
      category: "Engagement",
      client: "Isabella Chen",
    },
    {
      id: "img-4",
      src: "/assets/images/bs2.jpg",
      alt: "Couple on beach",
      title: "Seaside Romance",
      description: "Golden hour love story.",
      category: "Baby Shower",
      client: "Jessica & Ryan",
    },
    {
      id: "img-5",
      src: "/assets/images/eng2.jpg",
      alt: "Baby shower",
      title: "Baby Shower Bliss",
      description: "Celebrating a new beginning.",
      category: "Engagement",
      client: "Amanda Foster",
    },
    {
      id: "img-6",
      src: "/assets/images/baby1.jpg",
      alt: "Family walking",
      title: "Autumn Family Stroll",
      description: "Precious family moments.",
      category: "baby",
      client: "Williams Family",
    },
    {
      id: "img-7",
      src: "/assets/images/p1.jpg",
      alt: "Vintage bridal portrait",
      title: "Vintage Elegance",
      description: "Timeless beauty captured.",
      category: "family",
      client: "Catherine & James",
    },
    {
      id: "img-8",
      src: "/assets/images/wed2.jpg",
      alt: "Toddler birthday",
      title: "Little Gentleman",
      description: "The charm of childhood.",
      category: "Wedding",
      client: "Oliver Johnson",
    },
    {
      id: "img-9",
      src: "/assets/images/baby2.jpg",
      alt: "Picnic couple",
      title: "Picnic Proposal",
      description: "Love in simple moments.",
      category: "baby",
      client: "Sophia & Marcus",
    },
    {
      id: "img-10",
      src: "/assets/images/wed3.jpg",
      alt: "Mother in wildflowers",
      title: "Wildflower Dreams",
      description: "Motherhood in nature.",
      category: "Wedding",
      client: "Rachel & Tom",
    },
    {
      id: "img-11",
      src: "/assets/images/baby3.jpg",
      alt: "Baby shower gifts",
      title: "Pastel Paradise",
      description: "A pastel celebration.",
      category: "baby",
      client: "Maria Santos",
    },
    {
      id: "img-12",
      src: "/assets/images/bs1.jpg",
      alt: "Generations portrait",
      title: "Generations of Love",
      description: "Legacy of love.",
      category: "Baby Shower",
      client: "Peterson Family",
    },
  ];

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;

    return galleryImages.filter(
      (image) =>
        image.category?.toLowerCase()?.replace(" ", "-") === activeCategory
    );
  }, [activeCategory]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  const GalleryGrid = ({ images, onImageClick }) => {
    if (!images || images.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="font-accent text-muted-foreground">
            No images found for this category.
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg border border-white hover:shadow-lg transition-all"
            onClick={() => onImageClick(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end p-4">
              <p className="font-accent text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION with slideshow */}
      <section
        className="pt-24 pb-16 px-6 lg:px-8 relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('${slideshowImages[currentImage]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-teal-900/20 mix-blend-multiply"></div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-script text-6xl text-foreground mb-2">
            The Secret Story Teller
          </h1>

          <p className="font-accent text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every celebration tells a unique story deserving to be captured with
            artistic excellence. Discover our portfolio of life’s most precious
            moments.
          </p>

          <button className="mt-8 border-2 border-foreground px-8 py-3 rounded-full font-accent hover:bg-foreground hover:text-background transition">
            Explore Our Work
          </button>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <p className="font-accent text-sm text-muted-foreground text-center my-6">
            Showing {filteredImages.length}{" "}
            {filteredImages.length === 1 ? "image" : "images"}
            {activeCategory !== "all" && (
              <>
                {" "}
                in{" "}
                <span className="font-script">
                  {categories.find((c) => c.id === activeCategory)?.name}
                </span>
              </>
            )}
          </p>

          <GalleryGrid
            images={filteredImages}
            onImageClick={handleImageClick}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <CallToAction />
        </div>
      </section>

      {/* Lightbox */}
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

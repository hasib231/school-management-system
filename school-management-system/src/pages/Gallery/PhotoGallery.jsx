import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1504711331083-9c895941bf81",
  "https://images.unsplash.com/photo-1506102383123-c8ef1e872756",
  "https://images.unsplash.com/photo-1506729623306-b5a934d88b53",
];

 

const PhotoGallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenModal = (image) => {
      setSelectedImage(image);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setSelectedImage(null);
      setShowModal(false);
    };
  return (
    <div className="container mx-auto px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-lg transform hover:scale-105 hover:ease-in duration-200 shadow-lg"
            onClick={() => handleOpenModal(image)}
          >
            <figure>
              <img
                className="rounded-lg h-72 w-full"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </figure>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-7xl">
            <img src={selectedImage} alt="Selected image" />
            <div className="modal-action">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;

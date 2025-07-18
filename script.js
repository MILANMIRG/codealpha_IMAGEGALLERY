const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    let currentIndex = 0;

    galleryItems.forEach((img, index) => {
      img.addEventListener('click', () => {
        showImage(index);
      });
    });

    function showImage(index) {
      currentIndex = index;
      lightboxImg.src = galleryItems[index].src;
      lightbox.style.display = 'flex';
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      showImage(currentIndex);
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      showImage(currentIndex);
    }

    function closeLightbox() {
      lightbox.style.display = 'none';
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxImg.parentElement) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    });
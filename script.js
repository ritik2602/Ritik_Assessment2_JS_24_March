let currentIndex = 0;
        const images = document.querySelectorAll(".gallery-item");
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");

        function openModal(index) {
            currentIndex = index;
            modal.style.display = "flex";
            modal.classList.add("active"); // Show navigation buttons
            modalImage.src = images[currentIndex].src;
        }

        images.forEach((img, index) => {
            img.addEventListener("click", () => openModal(index));
        });

        function closeModal() {
            modal.style.display = "none";
            modal.classList.remove("active");
        }

        function changeImage(direction) {
            currentIndex += direction;

            if (currentIndex >= images.length) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }

            modalImage.src = images[currentIndex].src;
        }

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (modal.style.display === "flex") {
                if (e.key === "ArrowRight") changeImage(1);
                if (e.key === "ArrowLeft") changeImage(-1);
                if (e.key === "Escape") closeModal();
            }
        });
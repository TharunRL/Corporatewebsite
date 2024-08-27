const list = document.querySelector(".list");
        const items = document.querySelectorAll(".item");
        const itemWidth = items[0].offsetWidth;
        const dotsContainer = document.querySelector(".dots");

        // Generate dots based on the number of items
        items.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                list.scrollTo({ left: itemWidth * index, behavior: "smooth" });
                updateDots(index);
            });
            dotsContainer.appendChild(dot);
        });

        function handleClick(direction) {
            const currentScroll = list.scrollLeft;
            const index = Math.round(currentScroll / itemWidth);
            if (direction === "previous") {
                list.scrollBy({ left: -itemWidth, behavior: "smooth" });
                updateDots(Math.max(index - 1, 0));
            } else {
                list.scrollBy({ left: itemWidth, behavior: "smooth" });
                updateDots(Math.min(index + 1, items.length - 1));
            }
        }

        function updateDots(activeIndex) {
            document.querySelectorAll(".dot").forEach((dot, index) => {
                dot.classList.toggle("active", index === activeIndex);
            });
        }

        function autoScroll() {
            const currentScroll = list.scrollLeft;
            const index = Math.round(currentScroll / itemWidth);
            const nextIndex = (index + 1) % items.length;
            list.scrollTo({ left: itemWidth * nextIndex, behavior: "smooth" });
            updateDots(nextIndex);
        }

        // Set interval for automatic scrolling
        const interval = 3000; // 3 seconds
        setInterval(autoScroll, interval);
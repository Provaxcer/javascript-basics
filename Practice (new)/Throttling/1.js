function handleScroll() {
  console.log("Scroll event handled at", Date.now());
}

const throttledScroll = throttle(handleScroll, 300);

window.addEventListener("scroll", throttledScroll);
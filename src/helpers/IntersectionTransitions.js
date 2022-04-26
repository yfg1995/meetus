class IntersectionTransitions {
  constructor(el) {
    this.threshold = 0.35;
    this.rootMargin = "80px 0px 0px 0px";
    this.selectorToObserve = el;
    this.classInView = "inView";
    this.observeIntersections = this.observeIntersections.bind(this);
    this.init();
  }

  observeIntersections() {
    const observable = this.selectorToObserve;
    const options = {
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(this.classInView);
        } else if (entry.target.dataset.inOut) {
          entry.target.classList.remove(this.classInView);
        }
      });
    };

    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(observable);
    }
  }

  init() {
    this.observeIntersections();
  }
}

export { IntersectionTransitions }
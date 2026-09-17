// Adds jest-dom matchers such as toBeInTheDocument() to Vitest's expect.
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// jsdom implements none of matchMedia, ResizeObserver or IntersectionObserver,
// all of which Embla needs to construct a carousel. Stub them so the project
// cards can render.
if (!window.matchMedia) {
    window.matchMedia = (query: string) =>
        ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: () => {},
            removeEventListener: () => {},
            addListener: () => {},
            removeListener: () => {},
            dispatchEvent: () => false,
        }) as unknown as MediaQueryList;
}

if (!window.ResizeObserver) {
    window.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}

if (!window.IntersectionObserver) {
    window.IntersectionObserver = class {
        readonly root = null;
        readonly rootMargin = '';
        readonly scrollMargin = '';
        readonly thresholds = [];
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords(): IntersectionObserverEntry[] {
            return [];
        }
    };
}

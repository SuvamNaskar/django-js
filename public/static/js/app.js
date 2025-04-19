// barba.init({
//   transitions: [{
//     name: 'fade',
//     leave(data) {
//       return gsap.to(data.current.container, {
//         opacity: 0,
//         duration: 0.4
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0,
//         duration: 0.4,
//         onComplete: () => {
//           window.scrollTo(0, 0); // Reset scroll position
//         }
//       });
//     }
//   }]
// });

barba.init({
  transitions: [{
    name: 'slide-left',
    leave(data) {
      return gsap.to(data.current.container, {
        x: '-100vw', // Move out to the left
        duration: 0.6
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        x: '100vw', // Start from the right
        duration: 0.6,
        onComplete: () => {
          window.scrollTo(0, 0);
        }
      });
    }
  }]
});

// barba.init({
//   transitions: [{
//     name: 'zoom-out-in',
//     leave(data) {
//       return gsap.to(data.current.container, {
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.4
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         scale: 1.2,
//         opacity: 0,
//         duration: 0.4,
//         onComplete: () => {
//           gsap.to(data.next.container, { scale: 1, duration: 0.2 }); // Final zoom in
//           window.scrollTo(0, 0);
//         }
//       });
//     }
//   }]
// });

// barba.init({
//     transitions: [{
//       name: 'page-peel',
//       async leave(data) {
//         const currentPage = data.current.container;
//         const foldOverlay = document.createElement('div');
//         foldOverlay.classList.add('fold-overlay');
//         currentPage.appendChild(foldOverlay);
//
//         return gsap.timeline()
//           .to(foldOverlay, { width: '50%', height: '50%', duration: 0.4, ease: 'Power2.easeInOut' })
//           .to(currentPage, { rotationZ: -20, transformOrigin: 'top right', duration: 0.4, ease: 'Power2.easeInOut' }, 0);
//       },
//       async enter(data) {
//         const nextPage = data.next.container;
//         gsap.set(nextPage, { opacity: 0 });
//         document.body.appendChild(nextPage);
//
//         const foldOverlay = data.current.container.querySelector('.fold-overlay');
//
//         return gsap.timeline()
//           .to(data.current.container, { rotationZ: 0, duration: 0.3, ease: 'Power2.easeOut', onComplete: () => data.current.container.remove() })
//           .to(foldOverlay, { width: '0%', height: '0%', duration: 0.3, ease: 'Power2.easeOut' }, 0)
//           .to(nextPage, { opacity: 1, duration: 0.4, onComplete: () => window.scrollTo(0, 0) }, 0.2);
//       }
//     }]
//   });
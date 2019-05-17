import habitat from 'preact-habitat';
import Widget from './components/widget';

function init() {
  let movieCard = habitat(Widget);
  /**
   * option 1: render inline
  */
 movieCard.render({
    inline: true,
    clean: false
  });

  /**
   * option 2: render in selector
  */
  // movieCard.render({
  //   selector: ".widget-container",
  //   inline: false,
  //   clean: false
  // });

  /**
   * option 3: render in cleinet specified
  */
  // movieCard.render({
  //   clientSpecified: true
  //   inline: false,
  //   clean: false
  // });
}

// in development, set up HMR:
if (module.hot) {
  require('preact/devtools'); // enables React DevTools, be careful on IE
  module.hot.accept('./components/widget', () => requestAnimationFrame(init));
}

init();

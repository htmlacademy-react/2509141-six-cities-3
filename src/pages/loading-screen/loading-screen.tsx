import { useEffect, useRef } from 'react';
import { Spinner } from 'spin.js';
import SpinnerOptions from './spinner-options';
import 'spin.js/spin.css';


function LoadingScreen() {
  const container = useRef(null);


  useEffect(() => {
    const spinner = new Spinner(SpinnerOptions);

    if (container.current !== null) {
      spinner.spin(container.current);
    }

    return function stop() {
      spinner.stop();
    };
  }, [container]);


  return (
    <span ref={container} />
  );
}


export default LoadingScreen;

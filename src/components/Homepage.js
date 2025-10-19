import './App.css';
import { useRef } from 'react';
import HeaderStarting from './HeaderStarting';
import Butt from './butt';
import Text from './Text';
import TextVP from './VariableProximity';
import Footerr from './footer';
import InstallPWA from './InstallPWA';

export default function Homepage() {
  const bodycolor = () => {
    document.body.style.backgroundColor = 'rgb(28, 20, 52)';
  };

  const containerRef = useRef(null);

  return (
    <>
      {bodycolor()}
      <div className="page-wrapper">
        <InstallPWA />
        <HeaderStarting />
        



        <div className="page-content">
          <div className="container my-3 text-white">
            <div className="toptext">
              <Text text="Welcome to Texterio" tag="h1" />
            </div>

            <div className="Mid">
              <div ref={containerRef} style={{ position: 'relative' }}></div>
              <TextVP
                label="This is a simple text editor built with React. You can use it to write and edit text."
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>

            <div className="Mid">
              <div ref={containerRef} style={{ position: 'relative' }}></div>
              <TextVP
                label="Enjoy using Texterio!"
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </div>
          <Butt />
        </div>

       
        <Footerr />
      </div>
    </>
  );
}

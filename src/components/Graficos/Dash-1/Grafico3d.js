import React, { useState, useRef,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardContent } from '@material-ui/core';
import Plot from 'react-plotly.js';

const Grafico3D = () => {
  const [fullWidth, setFullWidth] = useState(true);
  const [alto, setAlto] = useState(300);



  const plotRef = useRef(null);
  const toggleWidth = () => {
    setFullWidth(
      (state) => !state,
      () => plotRef.current.resizeHandler(),
    );
  };

  const changeAlto = () => {
    setAlto(800)
    //plotRef.current.resizeHandler(),
    console.log('cambiando')
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <button onClick={changeAlto}>okk</button>
      <Plot
        ref={plotRef}
        useResizeHandler='true'             
        data={[
          {
            x: [
              0,
              0,
              0.25,
              0.54,
              0.83,
              0.96,
              1.08,
              1.21,
              1.29,
              1.78,
              2.18,
              2.38,
              2.48,
              2.39,
              2.27,
              1.9,
              0.33,
              -1.94,
              -4.4,
              -7.3,
              -10.78,
              -13.86,
              -16.94,
              -22.36,
              -31.18,
              -35.05,
              -39.45,
              -58.52,
              -62.07,
              -65.34,
              -69.65,
              -71.43,
              -72.62,
              -72.92,
              -71.3,
              -68.24,
              -64.37,
              -60.02,
              -55.16,
              -49.13,
              -42.25,
              -34.42,
              -25.39,
              -14.67,
              -4.08,
              8.17,
              20.65,
              34.38,
              49.28,
              64.77,
              80.25,
              98.8,
              118.84,
              130.38,
              143.35,
              163.8,
              185.3,
              204.01,
              226.14,
              244.66,
              264.68,
              284.95,
              311.59,
              330.28,
              351.66,
              380.47,
              401,
              422.47,
              443.95,
              465.27,
              488.51,
              509.62,
              532.34,
              549.99,
              574.17,
              593.65,
              613.12,
              631.94,
              652.59,
              672.94,
              697.2,
              722.28,
              745.36,
              766.4,
              783.1,
              802,
              823.51,
              844.84,
              862.79,
              878.62,
              894.02,
            ],
            y: [
              0,
              0,
              0.15,
              0.24,
              0.39,
              0.47,
              0.56,
              0.61,
              0.66,
              0.9,
              1.38,
              1.9,
              2.01,
              2.27,
              2.51,
              3.26,
              7.13,
              11.28,
              15.5,
              20.59,
              26.95,
              32.5,
              38.04,
              47.68,
              64.29,
              71.82,
              79.8,
              120.68,
              127.84,
              134.57,
              147.65,
              153.94,
              159.66,
              165.89,
              170.92,
              173.93,
              174.91,
              174.41,
              172.34,
              169.25,
              165.27,
              160.16,
              153.99,
              145.98,
              137.94,
              128.31,
              118.5,
              107.45,
              95.33,
              82.44,
              70.44,
              55.9,
              39.33,
              29.18,
              17.56,
              -0.93,
              -21.54,
              -39.55,
              -60.18,
              -77.05,
              -95.51,
              -113.84,
              -138.44,
              -155.94,
              -176.57,
              -204.1,
              -221.61,
              -239.56,
              -257.51,
              -275.66,
              -296.17,
              -319.85,
              -347.56,
              -366.9,
              -393.55,
              -413.92,
              -433.14,
              -451.59,
              -469.99,
              -490.49,
              -515.99,
              -540.61,
              -562.41,
              -583.24,
              -601.31,
              -620.31,
              -641.29,
              -662.9,
              -681.83,
              -698.38,
              -714.47,
            ],
            z: [
              0,
              0,
              40.64,
              60.86,
              81.38,
              90.38,
              99.19,
              108.84,
              116.17,
              147.69,
              175.19,
              201.82,
              212.43,
              230.29,
              241.19,
              258.58,
              296.56,
              325.15,
              352,
              379.39,
              406.66,
              426.86,
              445.29,
              475.32,
              527,
              551.58,
              578.06,
              721.12,
              748.99,
              775.97,
              829.22,
              856.45,
              882.81,
              912.15,
              940.67,
              969.35,
              996.05,
              1023.71,
              1052.22,
              1080.42,
              1107.27,
              1133.66,
              1159.44,
              1186.28,
              1209.78,
              1234.24,
              1256.08,
              1277.85,
              1299.56,
              1320.43,
              1339.01,
              1359.14,
              1379.46,
              1390.63,
              1402.37,
              1418.61,
              1432.82,
              1443.31,
              1453.73,
              1460.68,
              1467.21,
              1473.27,
              1480.65,
              1485.16,
              1489.34,
              1492.83,
              1493.77,
              1494.5,
              1495.23,
              1495.72,
              1495.99,
              1496.37,
              1496.67,
              1496.63,
              1497.13,
              1497.41,
              1498.24,
              1499.43,
              1499.55,
              1499.14,
              1499.02,
              1499.18,
              1499.35,
              1499.21,
              1499.22,
              1499.26,
              1499.02,
              1498.89,
              1498.97,
              1499.26,
              1499.58,
            ],
            type: 'scatter3d',
            mode: 'lines',
            line: { width: 10 },
          },
        ]}
        layout={{
          showlegend: false,          
          autosize: true,
          height:alto,
          width:alto,
          margin: {
            l: 10,
            r: 10,
            b: 10,
            t: 10,
          },
          scene: {
            camera: {
              eye: {
                x: -1.0,
                y: -1.0,
                z: -1.0,
              },
              center: {
                x: 0.0,
                y: 0.0,
                z: 0.0,
              },
              up: {
                x: 0.0,
                y: 0.0,
                z: 1.0,
              },
            },
            xaxis: {
              title: '<==X.X==>',
              range: [-1000, 1000],
            },
            yaxis: {
              title: '<==Y.Y==>',
              range: [-1000, 1000],
            },
            zaxis: {
              title: '<==Z.Z==>',
              range: [2000, 0],
            },
          },
        }}
        config={{}}
      />
    </div>
  );
};

export default Grafico3D;

// layout={{
//     autosize: true
//   }}

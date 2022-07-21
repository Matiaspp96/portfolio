import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function App() {
  return (
      <Spline scene="https://prod.spline.design/kRL5ZS2Ui00h5T7k/scene.splinecode" />
  );
}
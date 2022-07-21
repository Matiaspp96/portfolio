import Spline from '@splinetool/react-spline';

export function WrappedSpline({ splineRef, ...props }) {
  return <Spline ref={splineRef} {...props} />;
}
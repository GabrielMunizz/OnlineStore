import { ColorRing } from 'react-loader-spinner';

function Loading() {
  return (
    <ColorRing
      visible
      height="150"
      width="150"
      ariaLabel="blocks-loading"
      wrapperStyle={ {} }
      wrapperClass="blocks-wrapper"
      colors={ ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87'] }
    />
  );
}

export default Loading;

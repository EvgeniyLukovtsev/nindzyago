import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={320}
    height={300}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="65" y="15" rx="10" ry="10" width="242" height="240" />
    <rect x="112" y="315" rx="0" ry="0" width="1" height="0" />
    <rect x="115" y="262" rx="10" ry="10" width="143" height="22" />
    <rect x="5" y="299" rx="10" ry="10" width="364" height="32" />
    <rect x="7" y="343" rx="10" ry="10" width="100" height="35" />
    <rect x="270" y="336" rx="10" ry="10" width="99" height="45" />
  </ContentLoader>
);

export default Skeleton;

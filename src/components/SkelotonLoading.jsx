import skeletonImage from '../assets/skeleton-img.gif'

function SkeletonLoading() {
  return (
    <div className="skeleton">
      <img src={skeletonImage} alt="Loading..." />
    </div>
  );
}

export default SkeletonLoading;

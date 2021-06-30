import React, { Suspense } from 'react'

// * Custom Hook
import { useNearScreen } from 'hooks/useNearScreen';
import Spinner from 'components/Spinner/Spinner';

// * Components
const TrendingSearches = React.lazy(
  () => import('components/TrendingSearches/TrendingSearches')
)

const LazyTrending = () => {
  const {isNearScreen, elementRef} = useNearScreen();

  return(
    <div ref={elementRef}>
      <Suspense fallback={<Spinner/>}>
        { isNearScreen? <TrendingSearches/> : <Spinner/> }
      </Suspense>
    </div>
  );
}

export default LazyTrending;

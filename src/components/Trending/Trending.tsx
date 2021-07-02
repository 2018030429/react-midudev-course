import React, { Suspense } from 'react'

// * Custom Hook
import { useNearScreen } from 'hooks/useNearScreen';
import Spinner from 'components/Spinner/Spinner';

// * Components
const TrendingSearches = React.lazy(
  () => import('components/TrendingSearches/TrendingSearches')
)

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen<HTMLDivElement>({ distance: '0px' });

  return(
    <div ref={fromRef}>
      <Suspense fallback={<Spinner/>}>
        { isNearScreen? <TrendingSearches/> : <Spinner/> }
      </Suspense>
    </div>
  );
}

export default LazyTrending;

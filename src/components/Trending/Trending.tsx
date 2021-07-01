import React, { Suspense, useRef } from 'react'

// * Custom Hook
import { useNearScreen } from 'hooks/useNearScreen';
import Spinner from 'components/Spinner/Spinner';

// * Components
const TrendingSearches = React.lazy(
  () => import('components/TrendingSearches/TrendingSearches')
)

const LazyTrending = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { isNearScreen } = useNearScreen({ externalRef: elementRef? elementRef: null  });

  return(
    <div ref={elementRef}>
      <Suspense fallback={<Spinner/>}>
        { isNearScreen? <TrendingSearches/> : <Spinner/> }
      </Suspense>
    </div>
  );
}

export default LazyTrending;

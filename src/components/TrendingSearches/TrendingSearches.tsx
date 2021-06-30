import Category from "components/Category/Category";
import { useEffect, useState } from "react";
import getTrendingTermsService from "services/getTrendingTermsService";

const TrendingSearches = () => {
  const [trends, setTrends] = useState<string[]>([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);

  return (
    <div>
      <Category options={trends} name='Trends' />
    </div>
  )
}

export default TrendingSearches;

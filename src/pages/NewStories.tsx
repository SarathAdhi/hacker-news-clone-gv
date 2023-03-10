import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContainer } from "../common/components/NewsContainer";
import { useFetchApi } from "../common/hooks/useFetchApi";
import { PageLayout } from "../common/layouts/PageLayout";

export const NewStoriesPage = () => {
  const {
    newsData,
    isLoading,
    fetchNews,
    currentPage,
    setCurrentPage,
    paginationCount,
    hideNews,
  } = useFetchApi();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/new?page=${currentPage}`, { replace: true });

    const unixTime = Date.now();

    fetchNews(
      `/search_by_date?tags=story&numericFilters=created_at_i<=${unixTime}&hitsPerPage=12`
    );
  }, [currentPage]);

  return (
    <PageLayout title="New Stories">
      <NewsContainer
        isLoading={isLoading}
        newsData={newsData}
        paginationCount={paginationCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hideNews={hideNews}
      />
    </PageLayout>
  );
};

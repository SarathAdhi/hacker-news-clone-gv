import { useEffect } from "react";
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

  async function fetchApiAsync() {
    const unixTime = Date.now();

    await fetchNews(
      `/search_by_date?tags=story&numericFilters=created_at_i<=${unixTime}&hitsPerPage=12`
    );
  }

  useEffect(() => {
    fetchApiAsync();
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

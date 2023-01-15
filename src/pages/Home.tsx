import { useEffect } from "react";
import { NewsContainer } from "../common/components/NewsContainer";
import { useFetchApi } from "../common/hooks/useFetchApi";
import { PageLayout } from "../common/layouts/PageLayout";

export const HomePage = () => {
  const {
    newsData,
    isLoading,
    fetchNews,
    currentPage,
    setCurrentPage,
    paginationCount,
    hideNews,
  } = useFetchApi();

  useEffect(() => {
    fetchNews("/search?tags=front_page&hitsPerPage=12");
  }, [currentPage]);

  return (
    <PageLayout title="">
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

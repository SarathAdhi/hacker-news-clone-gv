import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DialogBox } from "../common/components/DialogBox";
import { NewsContainer } from "../common/components/NewsContainer";
import { useFetchApi } from "../common/hooks/useFetchApi";
import { PageLayout } from "../common/layouts/PageLayout";
import { urlParser } from "../utils/url-parser";
import { FilterSettings } from "../modules/Search/FilterSettings";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export const SearchPage = () => {
  const {
    newsData,
    isLoading,
    fetchNews,
    currentPage,
    setCurrentPage,
    paginationCount,
    hideNews,
  } = useFetchApi();

  const location = useLocation();
  const navigate = useNavigate();

  const _sortBy = location.state?.sortBy;
  const _type = location.state?.type;
  const _dateRange = location.state?.dateRange;
  const _query = location.state?.query;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filters, setFilters] = useState({
    query: _query || "",
    type: _type || "All",
    sortBy: _sortBy || "popularity",
    dateRange: _dateRange || "All",
    page: currentPage,
  });

  const { query } = filters;

  useEffect(() => {
    const { urlParams, apiParams } = urlParser({
      ...filters,
      page: currentPage,
      currentUrlPath: "/search",
    });

    navigate(`${urlParams}`, { replace: true, state: filters });

    fetchNews(apiParams);
  }, [currentPage, filters]);

  return (
    <PageLayout title="Search & Filters" className="!flex flex-col gap-5">
      <div className="flex items-end lg:items-center gap-5 lg:gap-2 justify-between">
        <TextField
          className="w-full lg:w-1/2"
          label="Search stories by title, url or author"
          variant="standard"
          value={query}
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
        />

        <button
          className="block lg:hidden"
          onClick={() => setIsDialogOpen(true)}
        >
          <FilterAltIcon fontSize="large" />
        </button>

        <FilterSettings
          filters={filters}
          setFilters={setFilters}
          className="hidden lg:flex items-center gap-2"
        />
      </div>

      <NewsContainer
        isLoading={isLoading}
        newsData={newsData}
        paginationCount={paginationCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hideNews={hideNews}
      />

      <DialogBox
        title="Filters"
        onClose={() => setIsDialogOpen(false)}
        open={isDialogOpen}
        className="grid place-content-center"
      >
        <FilterSettings
          filters={filters}
          setFilters={setFilters}
          className="grid items-center gap-2"
        />
      </DialogBox>
    </PageLayout>
  );
};

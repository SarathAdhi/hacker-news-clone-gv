import { MenuItem, Select, InputLabel, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DialogBox } from "../common/components/DialogBox";
import { NewsContainer } from "../common/components/NewsContainer";
import { useFetchApi } from "../common/hooks/useFetchApi";
import { PageLayout } from "../common/layouts/PageLayout";
import { useFilterStore } from "../utils/store";
import { urlParser } from "../utils/url-parser";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Component } from "../common/types/page";

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

  const _sortBy = location.state?.sortBy;

  const _type = location.state?.type;

  const _dateRange = location.state?.dateRange;

  const query = location.state?.query;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [filters, setFilters] = useState({
    query: "",
    type: _type || "All",
    sortBy: _sortBy || "popularity",
    dateRange: _dateRange || "All",
  });

  const navigate = useNavigate();

  const { sortBy, dateRange, type } = filters;

  useEffect(() => {
    const { urlParams, apiParams } = urlParser({
      ...filters,
      currentUrlPath: "/search",
    });

    navigate(`${urlParams}`, { replace: true, state: filters });

    fetchNews(apiParams);
  }, [currentPage, filters]);

  const FilterSettings: React.FC<Component> = ({ className }) => (
    <div className={className}>
      <FormControl variant="standard" sx={{ width: 150 }}>
        <InputLabel>Search Tags</InputLabel>

        <Select
          value={type}
          onChange={(e) => {
            setFilters({ ...filters, type: `${e.target.value}` });
          }}
          label="type"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="story">Stories</MenuItem>
          <MenuItem value="comment">Comments</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ width: 150 }}>
        <InputLabel>Sort By</InputLabel>

        <Select
          value={sortBy}
          onChange={(e) => {
            setFilters({ ...filters, sortBy: e.target.value });
          }}
          label="sortBy"
        >
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ width: 150 }}>
        <InputLabel>Upload Date</InputLabel>

        <Select
          value={dateRange}
          onChange={(e) => {
            setFilters({ ...filters, dateRange: `${e.target.value}` });
          }}
          label="dateRange"
        >
          <MenuItem value="All">All Time</MenuItem>
          <MenuItem value="1d">Last 24h</MenuItem>
          <MenuItem value="7d">Past Week</MenuItem>
          <MenuItem value="31d">Past Month</MenuItem>
          <MenuItem value="355d">Past Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );

  return (
    <PageLayout title="" className="!flex flex-col gap-5">
      <div className="flex items-end lg:items-center gap-5 lg:gap-2 justify-between">
        <TextField
          className="w-full lg:w-1/2"
          label="Search stories by title, url or author"
          variant="standard"
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
        />

        <button
          className="block lg:hidden"
          onClick={() => setIsDialogOpen(true)}
        >
          <FilterAltIcon fontSize="large" />
        </button>

        <FilterSettings className="hidden lg:flex items-center gap-2" />
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
        onClose={(value) => setIsDialogOpen(false)}
        open={isDialogOpen}
        className="grid place-content-center"
      >
        <FilterSettings className="grid items-center gap-2" />
      </DialogBox>
    </PageLayout>
  );
};

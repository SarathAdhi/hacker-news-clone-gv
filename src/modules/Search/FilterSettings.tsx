import React from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Component } from "../../common/types/page";

export type FilterParams = {
  type: string;
  sortBy: string;
  dateRange: string;
  query: string;
  page: number;
};

type Props = {
  filters: FilterParams;
  setFilters: (value: FilterParams) => void;
} & Component;

export const FilterSettings: React.FC<Props> = ({
  className,
  filters,
  setFilters,
}) => {
  const { type, dateRange, sortBy } = filters;

  return (
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

      <Button
        className="!text-sm"
        onClick={() => {
          setFilters({
            query: "",
            type: "All",
            sortBy: "popularity",
            dateRange: "All",
            page: 1,
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

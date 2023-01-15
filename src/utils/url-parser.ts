import { UrlParams } from "../common/types/url-params";
import { getTimestampUsingDates } from "./unix-timestamp";

export function urlParser(params: UrlParams) {
  const sortBy = `${
    params.sortBy === "popularity" ? "search" : "search_by_date"
  }`;

  const query = `${params.query ? `&query=${params.query}` : ""}`;

  const type = `${
    !!params.type && params.type !== "All" ? `&tags=${params.type}` : ""
  }`;

  const time = `${
    !!params.dateRange
      ? params.dateRange === "All"
        ? ""
        : `&numericFilters=${getTimestampUsingDates(params.dateRange)}`
      : ""
  }`;

  const currentUrlPath = params.currentUrlPath
    ? `${params.currentUrlPath}`
    : "";

  return {
    apiParams: `${sortBy}?${query + type + time}`,
    urlParams: `${currentUrlPath}?sortBy=${sortBy}${query + type + time}`,
  };
}

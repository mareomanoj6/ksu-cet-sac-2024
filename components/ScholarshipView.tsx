"use client";

import { useState, useMemo } from "react";
import type { ReactElement } from "react";
import type { Scholarship, DeadlineDate } from "@/data/scholarships";

type FilterType = "all" | "general" | "girl";
type FilterSource = "all" | "government" | "private";
type SortOrder = "none" | "asc" | "desc";

function parseDate(dateStr: string): Date | null {
  if (!dateStr || typeof dateStr !== "string") return null;

  if (dateStr.toLowerCase() === "closed" || !dateStr.includes("/")) {
    return null;
  }

  const parts = dateStr.split("/");
  if (parts.length !== 3) return null;

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

  const fullYear = year < 50 ? 2000 + year : 1900 + year;
  return new Date(fullYear, month, day);
}

function getEarliestDate(scholarship: Scholarship): Date | null {
  if (!scholarship.lastDate) return null;

  if (Array.isArray(scholarship.lastDate)) {
    const dates = scholarship.lastDate
      .map((item) => parseDate(item.date))
      .filter((date) => date !== null) as Date[];
    if (dates.length === 0) return null;
    return dates.reduce((earliest, current) =>
      current < earliest ? current : earliest
    );
  }

  return parseDate(scholarship.lastDate);
}

function fuzzyMatch(str: string, pattern: string): boolean {
  if (!pattern) return true;
  const lowerStr = str.toLowerCase();
  const lowerPattern = pattern.toLowerCase();

  if (lowerStr.includes(lowerPattern)) return true;

  let strIndex = 0;
  let patternIndex = 0;

  while (strIndex < lowerStr.length && patternIndex < lowerPattern.length) {
    if (lowerStr[strIndex] === lowerPattern[patternIndex]) {
      patternIndex++;
    }
    strIndex++;
  }

  return patternIndex === lowerPattern.length;
}

function formatDeadline(lastDate: DeadlineDate): ReactElement[] {
  if (!lastDate) {
    return [
      <span key="na" className="scholarship-tag scholarship-deadline">
        Deadline: N/A
      </span>,
    ];
  }

  if (Array.isArray(lastDate)) {
    return lastDate.map((item, idx) => {
      const isClosed = item.date && item.date.toLowerCase() === "closed";
      const deadlineClass = isClosed
        ? "scholarship-tag"
        : "scholarship-tag scholarship-deadline";
      return (
        <span
          key={idx}
          className={deadlineClass}
          style={{ display: "block", marginBottom: "0.25rem" }}
        >
          {item.category}: {item.date}
        </span>
      );
    });
  }

  const isClosed = lastDate.toLowerCase() === "closed";
  const deadlineClass = isClosed
    ? "scholarship-tag"
    : "scholarship-tag scholarship-deadline";
  return [
    <span key="deadline" className={deadlineClass}>
      Deadline: {lastDate}
    </span>,
  ];
}

interface ScholarshipViewProps {
  scholarships: Scholarship[];
}

export function ScholarshipView({ scholarships }: ScholarshipViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [sourceFilter, setSourceFilter] = useState<FilterSource>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  const filteredAndSorted = useMemo(() => {
    let filtered = scholarships.filter((scholarship) => {
      const typeMatch =
        typeFilter === "all" || scholarship.type === typeFilter;
      const sourceMatch =
        sourceFilter === "all" || scholarship.source === sourceFilter;
      const searchMatch =
        !searchTerm || fuzzyMatch(scholarship.title, searchTerm);
      return typeMatch && sourceMatch && searchMatch;
    });

    if (sortOrder === "none") {
      return filtered;
    }

    return [...filtered].sort((a, b) => {
      const dateA = getEarliestDate(a);
      const dateB = getEarliestDate(b);

      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;

      const comparison = dateA.getTime() - dateB.getTime();
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [searchTerm, typeFilter, sourceFilter, sortOrder, scholarships]);

  const handleTypeFilter = (value: FilterType) => {
    setTypeFilter((prev) => (prev === value ? "all" : value));
  };

  const handleSourceFilter = (value: FilterSource) => {
    setSourceFilter((prev) => (prev === value ? "all" : value));
  };

  return (
    <div className="scholarship-container">
      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="Search scholarships by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            <i className="fas fa-times" aria-hidden />
          </button>
        )}
      </div>

      {/* Filter Section */}
      <h3 className="filter-title">Filter by:</h3>
      <div className="filter-section">
        <div className="filter-group">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${typeFilter === "general" ? "active" : ""}`}
              onClick={() => handleTypeFilter("general")}
            >
              General
            </button>
            <button
              className={`filter-btn ${typeFilter === "girl" ? "active" : ""}`}
              onClick={() => handleTypeFilter("girl")}
            >
              Girl Scholarships
            </button>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${sourceFilter === "government" ? "active" : ""}`}
              onClick={() => handleSourceFilter("government")}
            >
              Government
            </button>
            <button
              className={`filter-btn ${sourceFilter === "private" ? "active" : ""}`}
              onClick={() => handleSourceFilter("private")}
            >
              Private
            </button>
          </div>
        </div>
      </div>

      {/* Sort Section */}
      <div className="sort-section">
        <label>Sort by Date:</label>
        <div className="sort-buttons">
          <button
            className={`sort-btn ${sortOrder === "none" ? "active" : ""}`}
            onClick={() => setSortOrder("none")}
          >
            None
          </button>
          <button
            className={`sort-btn ${sortOrder === "asc" ? "active" : ""}`}
            onClick={() => setSortOrder("asc")}
          >
            Earliest First
          </button>
          <button
            className={`sort-btn ${sortOrder === "desc" ? "active" : ""}`}
            onClick={() => setSortOrder("desc")}
          >
            Latest First
          </button>
        </div>
      </div>

      {/* Scholarship Grid */}
      {filteredAndSorted.length === 0 ? (
        <div className="no-results">
          <i className="fas fa-search" aria-hidden />
          <h3>No scholarships found</h3>
          <p>Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="scholarship-grid">
          {filteredAndSorted.map((scholarship) => (
            <div key={scholarship.id} className="scholarship-card">
              <div className="scholarship-header">
                <h3 className="scholarship-title">{scholarship.title}</h3>
                <div className="scholarship-amount">{scholarship.amount}</div>
                <div className="scholarship-tags">
                  <span className="scholarship-tag">
                    {scholarship.type === "girl"
                      ? "Girl Scholarship"
                      : "General"}
                  </span>
                  <span className="scholarship-tag">
                    {scholarship.source === "government"
                      ? "Government"
                      : "Private"}
                  </span>
                  {formatDeadline(scholarship.lastDate)}
                </div>
              </div>
              <div className="scholarship-description">
                {scholarship.description}
              </div>
              <div className="scholarship-requirements">
                <h4>Requirements:</h4>
                <ul>
                  {scholarship.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="scholarship-actions">
                <a
                  href={scholarship.applyLink}
                  className="apply-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <a
                  href={scholarship.infoLink}
                  className="info-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

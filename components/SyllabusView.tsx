"use client";

import { useMemo, useState } from "react";
import type { DeptKey, TypeKey } from "@/data/syllabus";

type TypeValue = "" | TypeKey;
type DeptValue = "" | DeptKey;
type SemValue = "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

interface SyllabusViewProps {
  driveLinks: {
    curriculum: Record<string, string>;
    syllabus: Record<string, Record<number, string>>;
  };
}

export function SyllabusView({ driveLinks }: SyllabusViewProps) {
  const [type, setType] = useState<TypeValue>("");
  const [dept, setDept] = useState<DeptValue>("");
  const [sem, setSem] = useState<SemValue>("");

  const showDept = type !== "";
  const showSem = type === "syllabus";
  const ready =
    type !== "" && dept !== "" && (type === "curriculum" || sem !== "");

  const url = useMemo(() => {
    if (!ready) return "";
    if (type === "curriculum") return driveLinks.curriculum[dept];
    const semesterNum = Number(sem) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    return driveLinks.syllabus[dept]?.[semesterNum] || "";
  }, [dept, ready, sem, type, driveLinks]);

  function onTypeChange(v: TypeValue) {
    setType(v);
    setDept("");
    setSem("");
  }

  return (
    <div className="syllabus-center-container">
      <div className="syllabus-select-row" id="typeSelectRow">
        <label className="sr-only" htmlFor="typeSelect">
          Select Type
        </label>
        <select
          className="syllabus-select"
          id="typeSelect"
          value={type}
          onChange={(e) => onTypeChange(e.target.value as TypeValue)}
        >
          <option value="">Select Type</option>
          <option value="syllabus">Syllabus</option>
          <option value="curriculum">Curriculum</option>
        </select>
      </div>

      <div
        className="syllabus-select-row"
        id="departmentSelectRow"
        style={{ display: showDept ? "" : "none" }}
      >
        <label className="sr-only" htmlFor="departmentSelect">
          Select Department
        </label>
        <select
          className="syllabus-select"
          id="departmentSelect"
          value={dept}
          onChange={(e) => setDept(e.target.value as DeptValue)}
        >
          <option value="">Select Department</option>
          <option value="cse">CSE</option>
          <option value="ece">ECE</option>
          <option value="eee">EEE</option>
          <option value="aei">AEI</option>
          <option value="el">EL</option>
          <option value="ce">CE</option>
          <option value="ie">IE</option>
          <option value="me">ME</option>
        </select>
      </div>

      <div
        className="syllabus-select-row"
        id="semesterSelectRow"
        style={{ display: showSem ? "" : "none" }}
      >
        <label className="sr-only" htmlFor="semesterSelect">
          Select Semester
        </label>
        <select
          className="syllabus-select"
          id="semesterSelect"
          value={sem}
          onChange={(e) => setSem(e.target.value as SemValue)}
        >
          <option value="">Select Semester</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
          <option value="5">Semester 5</option>
          <option value="6">Semester 6</option>
          <option value="7">Semester 7</option>
          <option value="8">Semester 8</option>
        </select>
      </div>

      <div
        className="syllabus-btn-row"
        id="viewBtnRow"
        style={{ display: ready ? "" : "none" }}
      >
        <button
          className="syllabus-btn"
          id="viewBtn"
          type="button"
          onClick={() => {
            if (!url) {
              alert(
                "No link configured yet. Please paste the Google Drive link into the driveLinks map in this page."
              );
              return;
            }
            window.open(url, "_blank", "noopener,noreferrer");
          }}
        >
          View
        </button>
      </div>
    </div>
  );
}


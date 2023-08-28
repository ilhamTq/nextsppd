"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "7";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  return (
    <div className="flex justify-end p-3">
      <div className="join">
        <button
          className="join-item btn"
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(
              `/golongan?page=${Number(page) - 1}&per_page=${per_page}`
            );
          }}
        >
          «
        </button>

        <button className="join-item btn">PAGE {page}</button>

        <button
          className="join-item btn"
          disabled={!hasNextPage}
          onClick={() => {
            router.push(
              `/golongan?page=${Number(page) + 1}&per_page=${per_page}`
            );
          }}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;

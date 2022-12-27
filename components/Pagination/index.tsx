import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PaginateBody } from "./styles";

interface PaginationProps {
  data: any[];
  items: number;
  setCurrentItems: Dispatch<SetStateAction<any>>;
}

export function Pagination({ data, items, setCurrentItems }: PaginationProps) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = items;

  function handlePageClick(event: any) {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data, setCurrentItems]);

  return (
    <PaginateBody>
      <ReactPaginate
        breakLabel="..."
        nextLabel="»"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="«"
        renderOnZeroPageCount={() => null}
        activeLinkClassName="active__page"
      />
    </PaginateBody>
  );
}

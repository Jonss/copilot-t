import React, { FC } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/Pagination';
import { POKEMON_QTY } from '../utils/consts';

type Props = {
  page: number;
  handleNext(): void;
  handlePrev(): void;
  hasNext: boolean;
};

export const PoketablePagination: FC<Props> = ({
  page,
  hasNext,
  handleNext,
  handlePrev,
}) => {
  const pageSymbol = page === 0 ? 0 : page / POKEMON_QTY;
  const showNext = page === 0 || hasNext;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {page > 0 && (
            <PaginationPrevious
              size="lg"
              onClick={handlePrev}
              className="cursor-pointer"
            />
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink size="lg">{pageSymbol + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          {showNext && (
            <PaginationNext
              size="lg"
              onClick={handleNext}
              className="cursor-pointer"
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

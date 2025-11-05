import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Pagination({ page, count, onChange }) {
  const pages = [];
  for (let i = 1; i <= count; i++) pages.push(i);
  return (
    <Stack direction="row" spacing={1} sx={{ p: 2 }}>
      <Button disabled={page <= 1} onClick={() => onChange(page - 1)}>
        Prev
      </Button>
      {pages.map((p) => (
        <Button
          key={p}
          variant={p === page ? "contained" : "outlined"}
          onClick={() => onChange(p)}
        >
          {p}
        </Button>
      ))}
      <Button disabled={page >= count} onClick={() => onChange(page + 1)}>
        Next
      </Button>
    </Stack>
  );
}

export default Pagination;

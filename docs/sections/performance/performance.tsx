import React, { FunctionComponent } from "react";

import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { StyledContent } from "../../components/content/content.style";
import { StyledHeading } from "../../components/heading/heading.style";

import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
} from "./performance.style";

export const Performance: FunctionComponent = () => (
  <StyledContent>
    <StyledHeading as={"h2"}>Performance</StyledHeading>
    <TableContainer>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Board</StyledTableCell>
            <StyledTableCell align="right">15min load avg</StyledTableCell>
          </TableRow>
        </TableHead>
        <StyledTableBody>
          <TableRow>
            <StyledTableCell>Raspberry Pi A+</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Raspberry Pi 3B</StyledTableCell>
            <StyledTableCell align="right">0.60 ~ 15%</StyledTableCell>
          </TableRow>
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  </StyledContent>
);

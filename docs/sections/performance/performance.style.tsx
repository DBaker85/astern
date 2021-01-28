import styled from "styled-components";
import { darken } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

export const StyledTable = styled(Table)`
  background-color: ${(props) => props.theme.dark};
  max-width: 500px;
  border-radius: 5px;
`;

export const StyledTableCell = styled(TableCell)`
  color: ${(props) => props.theme.text};
  border-bottom: ${(props) => `2px solid ${props.theme.dark}`};
`;

export const StyledTableBody = styled(TableBody)`
  background-color: ${(props) => darken(props.theme.background, 0.3)};
`;

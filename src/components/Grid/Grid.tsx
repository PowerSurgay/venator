import { Direction } from "../../types"
import styled from "styled-components";

export type GridProps = {
    direction: Direction;
    bordered: boolean
}

export const Grid = styled.div<GridProps>`
    display: flex;
    flex-direction: ${({ direction }) =>  direction}
`
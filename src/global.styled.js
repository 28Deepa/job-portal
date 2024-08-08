import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8rem;
`;

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* MUI spacing unit 2 translates to 16px */
  padding: 16px; /* MUI spacing unit 2 translates to 16px */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  position: sticky;
  top: 3.5rem;
  z-index: 1000;
  width: 100%;
  margin-bottom: 16px;
  background: white;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

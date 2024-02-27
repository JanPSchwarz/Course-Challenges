import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  allLightsOn,
  allLightsOff,
  numberOfLightsOn,
}) {
  return (
    <StyledQuickActions>
      {numberOfLightsOn === 0 ? null : (
        <Button
          type="button"
          onClick={() => {
            allLightsOff();
          }}>
          Turn all lights off
        </Button>
      )}

      {numberOfLightsOn === 8 ? null : (
        <Button
          type="button"
          onClick={() => {
            allLightsOn();
          }}>
          Turn all lights on
        </Button>
      )}
    </StyledQuickActions>
  );
}

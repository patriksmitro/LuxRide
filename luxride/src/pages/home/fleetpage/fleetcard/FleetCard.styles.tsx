import styled from "styled-components";

interface FleetCardProps {
  backGroundColor: string;
}

export const FleetCardWrapper = styled.div<FleetCardProps>`
  min-width: 400px;
  max-width: 400px;
  height: 400px;
  border: 1px solid ${({ backGroundColor }) => backGroundColor};
  border-radius: 6px;
  padding: 30px;
  box-sizing: border-box;
`;

export const FleetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 120px;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const FeaturesContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

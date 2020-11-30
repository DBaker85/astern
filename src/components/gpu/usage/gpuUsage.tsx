import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";



import { gpuNameSelector } from "../../../store/moBro/mobroSelectors";

import { Card } from "../../common/card/card";


import { UsageChart } from "../../common/usageChart/usageChart";


const StyledUsageCard = styled(Card)`
  grid-column-start: 4;
  grid-column-end: 6;
`;

export const GpuUsage = () => {
  const [usage, setUsage] = useState(0);
  
  const name = useSelector(gpuNameSelector);

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.GRAPHICS.USAGE,
      (data) => {
        setUsage(Math.round(data.payload.value));
        
      }
    );
  }, []);

  return (
    <StyledUsageCard title={name}>
     
            <UsageChart usage={usage} />
         
    </StyledUsageCard>
  );
};

import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


import {
  processorCoreCountSelector,
  processorNameSelector,
} from "../../../store/moBro/mobroSelectors";
import { Card } from "../../common/card/card";
import { UsageChart } from "../../common/usageChart/usageChart";




const StyledUsageCard = styled(Card)`
  grid-column: span 2;
`;

export const CpuUsage: FunctionComponent = () => {
  const name = useSelector(processorNameSelector);
  const [usage, setUsage] = useState(0);
  

  useEffect(() => {
    window.MobroSDK.addChannelListener(
      window.MobroSDK.generalChannels.PROCESSOR.USAGE,
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

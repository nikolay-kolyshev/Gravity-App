import React from "react"
import {StatisticsStyled, Title} from "./Statistics-styled";
import {Typography} from "../../../../styles/common-components/Typography-styled";
import Count from "./Count";
import {Devider} from "../../WeightProgram-styled";

export default ({color, title, count, countPrefix, countPostfix, children, disabledDevider, ...restProps}) => {

    return (
        <StatisticsStyled {...restProps}>
            <Title>
                <Typography size="24px" weight={500} style={{marginRight: "10px"}}>
                    {title}
                </Typography>
                {
                    !!count &&
                        <Count
                            prefix={countPrefix}
                            postfix={countPostfix}
                            color={color}
                            size={36}
                            weight={500}
                        >
                            {count}
                        </Count>
                }
            </Title>
            <div>
                {children}
            </div>
            {
                !disabledDevider &&
                    <Devider style={{marginTop: "48px"}}/>
            }
        </StatisticsStyled>
    )

}
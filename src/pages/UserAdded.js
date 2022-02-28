import {StyledFormArea, StyledTitle, colors, ExtraText, TextLink, StyledContainer} from './../components/Styles'
import React from 'react';

const UserAdded = () => {
    return(
        <StyledContainer>
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size={30}>
                    User Added Successfully
                </StyledTitle>
                <ExtraText>
                    Please continue with <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
        </div>
        </StyledContainer>
    )
}
export default UserAdded;
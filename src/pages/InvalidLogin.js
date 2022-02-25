import {StyledFormArea, StyledTitle, colors, ExtraText, TextLink, StyledContainer} from './../components/Styles'
import React from 'react';

const InvalidLogin = () => {
    return(
        <StyledContainer>
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size={25}>
                    Invalid Username or Password
                </StyledTitle>
                <StyledTitle color={colors.dark2} size={15}>
                    New Member ? <TextLink to="/signup">Signup</TextLink>
                </StyledTitle>
                <StyledTitle color={colors.dark2} size={15}>
                    Already Registered ? <TextLink to="/login">Login</TextLink>
                </StyledTitle>
            </StyledFormArea>
        </div>
        </StyledContainer>
    )
}
export default InvalidLogin;
import {StyledFormArea, StyledTitle, colors, ExtraText, TextLink} from './../components/Styles'
import React from 'react';

const UsernotAdded = () => {
    return(
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size={30}>
                    User Already Exists
                </StyledTitle>
                <ExtraText>
                    Please continue with <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
        </div>
    )
}
export default UsernotAdded;
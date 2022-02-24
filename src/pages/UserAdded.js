import {StyledFormArea, StyledTitle, colors, ExtraText, TextLink} from './../components/Styles'
import React from 'react';

const UserAdded = () => {
    return(
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
    )
}
export default UserAdded;
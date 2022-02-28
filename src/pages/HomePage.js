import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, CopyrightText} from "../components/Styles";
import RambosLogo from './../assets/RambosLogo.jpg';

const HomePage = () => {
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 90,
                right: 500,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px"
            }}>
                <Avatar image={RambosLogo} />
            </div>
            <StyledTitle size={65}>
                Welcome to RAMBOS Admission 
            </StyledTitle>
            <StyledSubTitle size={27}>
                India's #1 Web Admission Portal
            </StyledSubTitle>
            <CopyrightText>
                All rights reserved &copy; 2022
            </CopyrightText>
        </div>
    );
}

export default HomePage;
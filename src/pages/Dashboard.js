import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors} from "../components/Styles";
import RambosLogo from './../assets/RambosLogo.jpg';

const Dashboard = () => {
    return(
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                right: 500,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px"
            }}>
                <Avatar image={RambosLogo} />
            </div>
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome, User 
                </StyledTitle>
                <ButtonGroup>
                    <StyledButton to="/">Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
}

export default Dashboard;
import { StyledTitle, StyledSubTitle, Avatar, StyledButton} from "../components/Styles";
import RambosLogo from './../assets/RambosLogo.jpg';

const Home = () => {
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
            <StyledTitle size={65}>
                Welcome to RAMBOS Admission 
            </StyledTitle>
            <StyledSubTitle size={27}>
                India's #1 Web Admission Portal
            </StyledSubTitle>
            <StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">Signup</StyledButton>
        </div>
    );
}

export default Home;
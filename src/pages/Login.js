import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText, StyledContainer} from './../components/Styles'
import RambosLogo from './../assets/RambosLogo.jpg';
import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import {FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom'
import React, { useState } from 'react';

let logresp=""
let authorized=false

const Login = () => {
    const history  = useHistory();
    const [message, setMessage] = useState("");
    return(
        <StyledContainer>
        <div>
            <StyledFormArea>
                <Avatar image={RambosLogo} />
                <StyledTitle color={colors.theme} size={30}>Login</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        pwd: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email id")
                            .required("Required"),
                            pwd: Yup.string().min(8, "Password is too short").max(15, "Password is too long")
                            .required("Required")
                        })
                    }
                    onSubmit={(values) => {
                        console.log(JSON.stringify(values, null, 4));
                        fetch("http://localhost:8080/user/login",{
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body:JSON.stringify(values)

                            }).then((response) => {
                                response.text().then(d => {
                                    console.log(d)
                                    if(d==='Admin Page')
                                    {
                                        logresp=d
                                        authorized=true
                                        history.push('/admin')
                                    }
                                    else if(d==='User Page')
                                    {
                                        logresp=d
                                        authorized=true
                                        history.push('/user')
                                    }
                                    else
                                    {
                                        authorized=false
                                        setMessage(d)
                                    }
                                })
                            })
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="xyz@example.com"
                                icon={<FiMail />}
                            >

                            </TextInput>

                            <TextInput
                                name="pwd"
                                type="password"
                                label="Password"
                                placeholder="******"
                                icon={<FiLock />}
                            >

                            </TextInput>

                            <ButtonGroup>
                                <StyledFormButton type="submit">Login</StyledFormButton>
                                <StyledFormButton type="reset">Reset</StyledFormButton>
                            </ButtonGroup>
                            {message && (
                                <div>
                                <StyledFormArea>
                                    <StyledTitle color={colors.theme} size={30}>
                                        {message}
                                    </StyledTitle>
                                </StyledFormArea>
                                </div>
                            )}
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New Member ? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy; 2022
            </CopyrightText>
        </div>
        </StyledContainer>
    )
}
export {logresp, authorized};
export default Login;
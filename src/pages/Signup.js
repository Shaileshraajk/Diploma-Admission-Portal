import {StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText, StyledContainer} from './../components/Styles'
import RambosLogo from './../assets/RambosLogo.jpg';
import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import {FiMail, FiLock, FiUser, FiSmartphone} from 'react-icons/fi';
import * as Yup from 'yup';
import "yup-phone";
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'



const Signup = () => {   
    
    const [message, setMessage] = useState("");
    const history  = useHistory();
    return(
        <StyledContainer>
        <div>
            <StyledFormArea>
                <Avatar image={RambosLogo} />
                <StyledTitle color={colors.theme} size={30}>Signup</StyledTitle>
                <Formik
                    initialValues={{
                        user_type: "",
                        email: "",
                        name: "",
                        mobno: "",
                        pwd: "",
                        confirmpwd: ""
                    }}
                    validationSchema={
                        Yup.object({
                            user_type: Yup.string().required("Required"),
                            email: Yup.string().email("Invalid email id")
                                .required("Required"),
                            pwd: Yup.string().min(8, "Password is too short").max(15, "Password is too long")
                                .required("Required"),
                            name: Yup.string().required("Required"),
                            mobno: Yup.string().phone('IN', true, 'Mobile Number is invalid'),
                            confirmpwd: Yup.string().required("Required").oneOf([Yup.ref("pwd")], "Passwords do not match")
                        })
                    }
                    onSubmit={(fields) => {
                        // console.log(JSON.stringify(fields, null, 4));
                        fetch("http://localhost:8080/user/add",{
                            method:"POST",
                            headers:{"Content-Type":"application/json"},
                            body:JSON.stringify(fields)

                            }).then((response)=>{
                                response.text().then(d => {
                                    setMessage(d)
                                    if(d==='User added successfully')
                                    {
                                        history.push('/useradded')
                                    }
                                    else
                                    {
                                        history.push('/usernotadded')
                                    }
                                })
                            })
                    }} 
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="user_type"
                                type="text"
                                label="User Type -  1 for Admin, 2 for User"
                                placeholder="1 or 2"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Daniel"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="mobno"
                                type="text"
                                label="Mobile Number"
                                placeholder="9999999999"
                                icon={<FiSmartphone />}
                            />


                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="xyz@example.com"
                                icon={<FiMail />}
                            />

                            <TextInput
                                name="pwd"
                                type="password"
                                label="Password"
                                placeholder="******"
                                icon={<FiLock />}
                            />

                            <TextInput
                                name="confirmpwd"
                                type="password"
                                label="Repeat Password"
                                placeholder="******"
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">Signup</StyledFormButton>
                                <StyledFormButton type="reset">Reset</StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    Already a Member ? <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy; 2022
            </CopyrightText>
        </div>
        </StyledContainer>
    )
}
export default Signup;
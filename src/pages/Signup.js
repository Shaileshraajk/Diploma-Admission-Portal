import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from './../components/Styles'
import RambosLogo from './../assets/RambosLogo.jpg';
import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import {FiMail, FiLock, FiUser, FiSmartphone} from 'react-icons/fi';
import * as Yup from 'yup';
import "yup-phone";
import {Rings} from 'react-loader-spinner';
import React from 'react';

const Signup = () => {
    return(
        <div>
            <StyledFormArea>
                <Avatar image={RambosLogo} />
                <StyledTitle color={colors.theme} size={30}>Signup</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                        mobileNumber: "",
                        username: "",
                        usertype: ""
                    }}
                    validationSchema={
                        Yup.object({
                            usertype: Yup.string().required("Required"),
                            email: Yup.string().email("Invalid email id")
                                .required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(15, "Password is too long")
                                .required("Required"),
                            username: Yup.string().required("Required"),
                            mobileNumber: Yup.string().phone('IN', true, 'Mobile Number is invalid'),
                            confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords do not match")
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>

                            <TextInput
                                name="usertype"
                                type="text"
                                label="User Type -  1 for Admin, 2 for User"
                                placeholder="1 or 2"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="username"
                                type="text"
                                label="Full Name"
                                placeholder="Daniel"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="mobileNumber"
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
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="******"
                                icon={<FiLock />}
                            />

                            <TextInput
                                name="confirmPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="******"
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">Signup</StyledFormButton>)}

                                {isSubmitting && (
                                    <Rings 
                                        type="ThreeDots"
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}

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
    )
}

export default Signup;
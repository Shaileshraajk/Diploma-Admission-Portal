import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from './../components/Styles'
import RambosLogo from './../assets/RambosLogo.jpg';
import {Formik, Form} from 'formik';
import {TextInput} from './../components/FormLib';
import {FiMail, FiLock, FiUser, FiSmartphone} from 'react-icons/fi';
import * as Yup from 'yup';
import "yup-phone";
import {Rings} from 'react-loader-spinner';

const Signup = () => {
    return(
        <div>
            <StyledFormArea>
                <Avatar image={RambosLogo} />
                <StyledTitle color={colors.theme} size={30}>Admin Signup</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        mobileno: "",
                        name: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email id")
                                .required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(15, "Password is too long")
                                .required("Required"),
                            name: Yup.string().required("Required"),
                            mobileno: Yup.string().phone('IN', true, 'Mobile Number is invalid'),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords do not match")
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="name"
                                type="text"
                                label="Full Name"
                                placeholder="Daniel"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="mobileno"
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
                                name="repeatPassword"
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
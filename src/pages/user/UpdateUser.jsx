import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback,
  CButton,
  CSelect,
  CInputRadio,
} from "@coreui/react";
import UserModel from "../../models/User";
import {
  validate,
  valid,
  printMessage,
} from "../../library/validation/validationHelper";
class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        middleName: "",
        dob: "",
        username: "",
        gender: "",
        password: "",
        confirmPassword: "",
      },
      modelError: {},
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLoadUserData = this.handleLoadUserData.bind(this);
  }
  componentDidMount() {
    if ("id" in this.props.match.params) {
      this.handleLoadUserData(this.props.match.params.id);
    }
  }
  //Load data in edit user case
  handleLoadUserData(id) {}
  //Handle onchange event for form element
  handleOnChange(e) {
    let { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }

  handleReset() {}
  handleOnSubmit() {
    let { user } = this.state;
    const { valid, error } = validate(UserModel, user);
    console.log(valid, error)
    if (valid) {
      //Form Submit API Call -
      alert("Valid");
    } else {
      this.setState({ modelError: error });
    }
  }
  render() {
    const { user, modelError } = this.state;
    return (
      <CRow>
        <CCol lg={12}>
          <CCard>
            <CCardHeader>Create User</CCardHeader>
            <CCardBody>
              <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first_name">First Name</CLabel>
                    <CInput
                      id="first_name"
                      name="firstName"
                      value={user.userName}
                      onChange={this.handleOnChange}
                      placeholder="First Name"
                    />
                    <CInvalidFeedback>
                      {printMessage(modelError, "firstName")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="middle_name">Middle Name</CLabel>
                    <CInput
                      id="middle_name"
                      name="middleName"
                      value={user.middleName}
                      onChange={this.handleOnChange}
                      placeholder="Middle Name"
                    />
                    <CInvalidFeedback>
                      {printMessage(modelError, "middleName")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last_name">Last Name</CLabel>
                    <CInput
                      id="last_name"
                      name="lastName"
                      value={user.lastName}
                      onChange={this.handleOnChange}
                      placeholder="Last Name"
                    />
                    <CInvalidFeedback>
                      {printMessage(modelError, "lastName")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
              </CFormGroup>

              <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="username">Username</CLabel>
                    <CInput
                      id="username"
                      name="username"
                      value={user.username}
                      onChange={this.handleOnChange}
                      placeholder="Enter your company name"
                    />
                    <CInvalidFeedback>
                      {printMessage(modelError, "username")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="email">Email</CLabel>
                    <CInput
                      invalid={valid(modelError, "email")}
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={this.handleOnChange}
                      placeholder="abc@xyz.com"
                    />
                    <CInvalidFeedback>
                      {printMessage(modelError, "email")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="phone_no">Phone No.</CLabel>
                    <CInput
                      id="phone_no"
                      name="phone"
                      value={user.phone}
                      onChange={this.handleOnChange}
                      placeholder="Phone No."
                    />
                   <CInvalidFeedback>
                      {printMessage(modelError, "phone")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="date-input">
                      Date of Birth (DD/MM/YYYY)
                    </CLabel>
                    <CInput
                      type="date"
                      id="date-input"
                      name="dob"
                      value={user.dob}
                      placeholder="date"
                      onChange={this.handleOnChange}
                    />
                    <CInvalidFeedback>
                      {printMessage(modelError, "dob")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="8">
                  <CFormGroup>
                    <CCol md="3">
                      <CLabel>Gender</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio1"
                          name="gender"
                          value="male"
                          onChange={this.handleOnChange}
                          checked={user.gender === "male" ? true : false}
                        />
                       
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio1"
                        >
                          Male
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio2"
                          name="gender"
                          value="female"
                          onChange={this.handleOnChange}
                          checked={user.gender === "female" ? true : false}
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio2"
                        >
                          Female
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio3"
                          name="gender"
                          value="others"
                          onChange={this.handleOnChange}
                          checked={user.gender === "others" ? true : false}
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio3"
                        >
                          Others
                        </CLabel>
                      </CFormGroup>
                      <CInvalidFeedback>
                      {printMessage(modelError, "gender")}
                    </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="role">Role Access</CLabel>
                    <CSelect
                      onChange={this.handleOnChange}
                      custom
                      name="role"
                      id="role"
                      value={user.role}
                    >
                      <option value="1">Super Admin</option>
                      <option value="2">Maker</option>
                      <option value="3">Checker</option>
                    </CSelect>
                    <CInvalidFeedback>
                      {printMessage(modelError, "role")}
                    </CInvalidFeedback>
                  </CFormGroup>
                </CCol>
                <CCol xs="8">
                  <CFormGroup>
                    <CCol md="3">
                      <CLabel>Status</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio1"
                          name="status"
                          value="active"
                          onChange={this.handleOnChange}
                          checked={user.status === "active" ? true : false}
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio1"
                        >
                          Active
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio2"
                          name="status"
                          value="inactive"
                          onChange={this.handleOnChange}
                          checked={user.status === "inactive" ? true : false}
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio2"
                        >
                          Inactive
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                        <CInputRadio
                          custom
                          id="inline-radio3"
                          name="status"
                          value="block"
                          onChange={this.handleOnChange}
                          checked={user.status === "Block " ? true : false}
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-radio3"
                        >
                          Block
                        </CLabel>
                      </CFormGroup>
                      <CInvalidFeedback>
                      {printMessage(modelError, "status")}
                    </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>
                </CCol>
              </CFormGroup>

              <CFormGroup>
                <CButton
                  type="submit"
                  size="sm"
                  color="info"
                  onClick={this.handleOnSubmit}
                >
                  Submit
                </CButton>{" "}
                <CButton
                  type="submit"
                  size="sm"
                  color="warning"
                  onClick={this.handleReset}
                >
                  Reset
                </CButton>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    );
  }
}

export default UpdateUser;

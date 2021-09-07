import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CForm,
  CFormGroup,
  CInput,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import usersData from "./UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const UsersList = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/user?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            <CCard>
              <CCardHeader>Filter</CCardHeader>
              <CCardBody>
                <CForm action="" method="post" inline>
                  <CFormGroup className="pr-1">
                    <CInput
                      id="exampleInputName2"
                      placeholder="Search"
                      required
                    />
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CButton type="submit" size="sm" color="primary">
                      Search
                    </CButton>{" "}
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CButton type="reset" size="sm" color="danger">
                      Reset
                    </CButton>
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CButton
                      onClick={() => {
                        history.push(`/user/create`);
                      }}
                      type="reset"
                      size="sm"
                      color="primary"
                    >
                      Create New User
                    </CButton>
                  </CFormGroup>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={[
                { key: "name", _classes: "font-weight-bold" },
                "registered",
                "role",
                "status",
                "action",
              ]}
              hover
              striped
              bordered
              itemsPerPage={10}
              activePage={page}
              // onRowClick={(item) => history.push(`/users/${item.id}`)}
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                action: (item) => (
                  <td>
                    <CButton
                      onClick={() => {
                        history.push(`/user/update/${item.id}`);
                      }}
                    >
                      <CIcon name="cil-pencil" />
                    </CButton>
                    <CButton>
                      <CIcon name="cil-trash" />
                    </CButton>
                    <CButton>
                      <CIcon name="cil-file" />
                    </CButton>
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="start"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default UsersList;

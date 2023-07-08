export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Cell:(cell)=>{
      console.log(cell)
    }
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];

export const HEADER_GROUPS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "info",
    columns: [
      {
        Header: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
  },
];

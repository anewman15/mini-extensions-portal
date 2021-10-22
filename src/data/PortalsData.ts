export type AirtableTextField = {
  type: "text" | "password";
  name: string;
};

export type AirtablePercentageField = {
  type: "percent";
  name: string;
};

export type AirtableLinkedRecordsField = {
  type: "linkedRecords";
  name: string;
  linkedTableId: string;
  linkedTablePrimaryFieldName: string;
};

export type AirtableField =
  | AirtableTextField
  | AirtablePercentageField
  | AirtableLinkedRecordsField;

export type Portal = {
  id: string;
  tableId: string;
  usersTableId: string;
  inverseLinkedRecordFieldInUsersTable: string;
  loginFields: AirtableField[];
  fieldsToDisplay: AirtableField[];
};

const classesPortalWithoutPassword: Portal = {
  id: "bjBi3ns",
  tableId: "tblKuYGAIcFy2sONm",
  usersTableId: "tblcM02oqFyPD18aX",
  inverseLinkedRecordFieldInUsersTable: "Classes",
  loginFields: [
    {
      type: "text",
      name: "Name",
    },
  ],
  fieldsToDisplay: [
    {
      type: "text",
      name: "Name",
    },
    {
      type: "linkedRecords",
      name: "Students",
      linkedTableId: "tblcM02oqFyPD18aX",
      linkedTablePrimaryFieldName: "Name",
    },
  ],
};

const classesPortalWithPassword: Portal = {
  id: "kniUvoubiw",
  tableId: "tblKuYGAIcFy2sONm",
  usersTableId: "tblcM02oqFyPD18aX",
  inverseLinkedRecordFieldInUsersTable: "Classes",
  loginFields: [
    {
      type: "text",
      name: "Name",
    },
    {
      type: "password",
      name: "Password",
    },
  ],
  fieldsToDisplay: [
    {
      type: "text",
      name: "Name",
    },
    {
      type: "linkedRecords",
      name: "Students",
      linkedTableId: "tblcM02oqFyPD18aX",
      linkedTablePrimaryFieldName: "Name",
    },
  ],
};

const examScoresPortalWithoutPassword: Portal = {
  id: "iuwh3vu",
  tableId: "tblC0JBsoni0KvePn",
  usersTableId: "tblcM02oqFyPD18aX",
  inverseLinkedRecordFieldInUsersTable: "Exam Scores",
  loginFields: [
    {
      type: "text",
      name: "Name",
    },
  ],
  fieldsToDisplay: [
    {
      type: "percent",
      name: "Score",
    },
    {
      type: "linkedRecords",
      name: "Student",
      linkedTableId: "tblcM02oqFyPD18aX",
      linkedTablePrimaryFieldName: "Name",
    },
  ],
};

const examScoresPortalWithPassword: Portal = {
  id: "JKNoi23bh2",
  tableId: "tblC0JBsoni0KvePn",
  usersTableId: "tblcM02oqFyPD18aX",
  inverseLinkedRecordFieldInUsersTable: "Exam Scores",
  loginFields: [
    {
      type: "text",
      name: "Name",
    },
    {
      type: "password",
      name: "Password",
    },
  ],
  fieldsToDisplay: [
    {
      type: "percent",
      name: "Score",
    },
    {
      type: "linkedRecords",
      name: "Student",
      linkedTableId: "tblcM02oqFyPD18aX",
      linkedTablePrimaryFieldName: "Name",
    },
  ],
};

export const portals: Portal[] = [
  classesPortalWithoutPassword,
  classesPortalWithPassword,
  examScoresPortalWithoutPassword,
  examScoresPortalWithPassword,
];

// In a real world scenario, this encryption secret key would be only used on the backend
// and never shared with users on the frontend. To keep this project simple and not require
// any backend work, we'll keep this on the frontend for this project.
export const loginTokensEncryptionSecretKey = "BJkui93bi13oioom9u239hubu9avKJB";

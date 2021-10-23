import { Record, Records, FieldSet } from "airtable";
import { Portal } from "../data/PortalsData";

const createLinkedRecordsIdsArray = (portal: Portal, records: Records<FieldSet>) => {
  return records.map((record: Record<FieldSet> | any) => record.fields[portal.fieldsToDisplay[1].name]).flat();
};

export default createLinkedRecordsIdsArray;

import { PortalDataType } from "../../components/Login";
import { Portal } from "../../data/PortalsData";

const portalDataAction = (portal: Portal) => {
  const SAVE_PORTAL_DATA = `SAVE_${portal.id.toUpperCase()}`;

  return (portalData: PortalDataType) => (
    {
      type: SAVE_PORTAL_DATA,
      payload: {
        portalData,
      }
    }
  );
};
export default portalDataAction;

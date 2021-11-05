import { AnyAction } from "redux";
import { Portal } from "../../data/PortalsData";

const portalDataReducer = (portal: Portal) => {
  const SAVE_PORTAL_DATA = `SAVE_${portal.id.toUpperCase()}`;

  return (state: any = [], action: AnyAction) => {
            switch (action.type) {
              case SAVE_PORTAL_DATA: {
                return action.payload.portalData;
              }
              default: {
                return state;
              }
            }
          }
};

export default portalDataReducer;

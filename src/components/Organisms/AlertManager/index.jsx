import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  console.log(AlertHandlerContext.visible);
  AlertHandlerContext.setAlert("message");

  return <Alert visible={} errorText={} />;
};

export default AlertManager;

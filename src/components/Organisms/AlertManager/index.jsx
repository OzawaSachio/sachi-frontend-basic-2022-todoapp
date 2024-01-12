import React, { useState, useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  const [timeoutHandler, setTimeoutHandler] = useState(null);

  useEffect(() => {
    if (timeoutHandler !== null) {
      window.clearTimeout(timeoutHandler);
    }
    const newTimeoutHandler = window.setTimeout(() => {
      AlertHandlerContext.closeAlert();
      setTimeoutHandler(null);
    }, 5000);

    setTimeoutHandler(newTimeoutHandler);
  }, [AlertHandlerContext]);

  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};

export default AlertManager;

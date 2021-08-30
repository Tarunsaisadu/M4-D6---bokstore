import React from "react";
import { Alert } from "react-bootstrap";

const WarningSign = (props) => {
  return (
    <div>
      <Alert variant="danger">
        <Alert.Heading>
          this is a warning 
        </Alert.Heading>
      </Alert>
    </div>
  );
};

export default WarningSign;

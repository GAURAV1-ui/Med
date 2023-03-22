import React from "react";
import { useUserAuth } from '../store/UserAuthContext';

  export const ComponentToPrint = React.forwardRef((props, ref) => {
    const {userTranslateInput} = useUserAuth();
    return (
      <div ref={ref}>
        <h1>MedInclude</h1>
        <br/>
        <div>
        {userTranslateInput}
        </div>
        </div>
    );
  });
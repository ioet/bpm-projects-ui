import React from "react"
import TextField from "@material-ui/core/TextField/TextField";

const TextFieldForm = props => {
  return(
      <form>
          <TextField
              id="mui-theme-provider-input"
              {...props}
          />
      </form>
  );
};

export default TextFieldForm;

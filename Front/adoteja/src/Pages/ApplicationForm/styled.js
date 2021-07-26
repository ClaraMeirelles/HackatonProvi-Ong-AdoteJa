import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { primaryColor } from "../../Constants/colors";

export const ApplicationFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: black !important;
    form{
        display: flex;
        flex-direction: column;
        width: 50vw;
        color:black !important;
        button{
            margin-top: 24px;
        }
    }
`

export const ApplicationButton = styled(Button)`
    border-radius: 30px;
`

export const InputText = styled(TextField)`
    color: ${primaryColor};
`
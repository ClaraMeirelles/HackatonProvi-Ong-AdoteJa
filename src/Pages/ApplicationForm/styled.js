import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ApplicationFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    form{
        display: flex;
        flex-direction: column;
        width: 50vw;
        
        button{
            margin-top: 24px;
        }
        
    }
`

export const ApplicationButton = styled(Button)`
    border-radius: 30px;
`
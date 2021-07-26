
import { TableFooter, Container, Toolbar, AppBar, Typography, Link } from '@material-ui/core';

export default function Footer() {
    return (
        <AppBar position="static" color="#ffffff">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="primary">
               Adote Já
              </Typography>
              
            </Toolbar>
          
          </Container>
          <Container> 
          <Typography>
              <Link href="#AboutPage" variant="body2" color="palette.text.primary" >
              Sobre Nós
           </Link>
           </Typography>
           <Typography>
              <Link href="#AboutPage" variant="body2" color="palette.text.primary" >
              Equipe

           </Link>
           </Typography>
           <Typography>
              <Link href="#AboutPage" variant="body2" color="pallete.text.primary" >
              Protetores

           </Link>
           </Typography>
           </Container>
        </AppBar>
    )
}
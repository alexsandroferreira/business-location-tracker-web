import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { AnimatedBackground } from '../../../components/AnimatedBackground'
import { Logo } from '../../../components/logo'
import { BackgroundWrapper, ContentWrapper, StyledHero } from './styles'

export function Hero() {
  return (
    <StyledHero>
      <Helmet title="Hero" />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <ContentWrapper>
              <Paper elevation={3} style={{ padding: '8px' }}>
                <Logo />
              </Paper>
            </ContentWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative">
              <BackgroundWrapper>
                <AnimatedBackground />
              </BackgroundWrapper>
              <ContentWrapper>
                <Paper elevation={3} style={{ padding: '12px' }}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    Business Tracker
                  </Typography>
                  <Typography variant="body1">
                    A aplicação foi desenvolvida com React e a biblioteca
                    Material UI para componentes. Para que o cadastro seja
                    bem-sucedido, os campos utilizados para consulta na API são:{' '}
                    <strong>rua</strong>, <strong>número</strong>,{' '}
                    <strong>cidade</strong>, <strong>estado</strong> e{' '}
                    <strong>país</strong>. Se o cadastro for realizado com
                    sucesso, um toast exibirá a mensagem Cadastro realizado com
                    sucesso. Em caso de erro, um toast mostrará a mensagem Houve
                    uma falha ao registrar a empresa. Por favor, verifique o
                    endereço informado. Após o registro no formulário, um pin
                    será adicionado ao mapa com a localização da empresa.
                  </Typography>
                </Paper>
              </ContentWrapper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  )
}

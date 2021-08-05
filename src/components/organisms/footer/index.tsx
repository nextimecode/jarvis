import React from 'react'
import { Box, Container, Grid } from '@chakra-ui/react'

type NextFooterProps = {
  label: string
}

const NextFooter = ({ label }: NextFooterProps) => {
  <footer>
    <Container>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
    </Container>
  </footer>
}

export default NextFooter

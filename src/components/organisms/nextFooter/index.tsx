import React from 'react'
import Image from 'next/image'
import {
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react'

type NextButtonProps = {
  bg?: 'primary' | undefined
}

const NextFooter = ({
  bg = 'primary'
}: NextButtonProps) => {
  return (
    <footer>
      <Grid height={629} pt={20} bg={bg} templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Text fontSize={40}>
            Fale com a gente
          </Text>
          <Text fontSize={40}>
            Serviços
          </Text>
        </GridItem>
        <GridItem colStart={4} colEnd={6}>
          <Image src="/images/logos/logo_footer.svg" alt="NeXTIME Logo" width={462} height={482} />
        </GridItem>
      </Grid>
    </footer>
  )
}

export default NextFooter

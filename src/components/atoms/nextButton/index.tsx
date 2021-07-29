import { Button } from "@chakra-ui/react"

type Props = {
  label: string
  colorScheme?: string
}

const NextButton = ({ 
  label,
  colorScheme="blue"
}: Props) => <Button colorScheme={colorScheme}>{ label }</Button>

export default NextButton

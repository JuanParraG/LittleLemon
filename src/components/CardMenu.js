import { Card, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,Button, CardBody, Image} from "@chakra-ui/react";
import greekSalad from "../sources/greek salad.jpg"
function CardMenu(props){
    return(
        <Card maxW='sm' id={props.id}>
        <CardBody>
            <Image
            src= {greekSalad}
             alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Greek salad</Heading>
            <Text>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                $12.99
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Order a Delivery
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
    )
}
export default CardMenu;
import { StackDivider, VStack, HStack, IconButton, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc"

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
            divider={<StackDivider />}
            color={{ sm:'red.600', md:'blue.400', lg:'green.400', xl:'red.300', '2xl':'green.100'}}
            borderColor="black.100"
            borderWidth="1px"
            borderRadius="3px"
            padding="5"
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing="5">
                        <IconButton onClick={() => complete(todo.id)} icon={<VscCheck />} isRound bgColor="cyan.100" opacity="0.5">完了</IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;
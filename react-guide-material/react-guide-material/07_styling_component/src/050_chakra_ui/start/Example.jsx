import Todo from "./components/Todo"
import { ChakraProvider } from "@chakra-ui/react"

const Example = () => {
  return (
    <>
      {/* <h2>Reminder</h2> */}
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;

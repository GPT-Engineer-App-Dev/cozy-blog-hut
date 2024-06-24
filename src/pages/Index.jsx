import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="150px">
          <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to my personal blog! I write about web development, tech, and my personal journey.
        </Text>
        <VStack spacing={2} direction="row">
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="30px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="30px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="30px" />
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
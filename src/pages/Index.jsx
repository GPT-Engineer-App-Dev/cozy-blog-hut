import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

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
        <Button as={RouterLink} to="/new-post" colorScheme="teal">New Post</Button>
        <VStack spacing={4} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <Text mt={4} fontSize="sm" color="gray.500">{new Date(post.date).toLocaleString()}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
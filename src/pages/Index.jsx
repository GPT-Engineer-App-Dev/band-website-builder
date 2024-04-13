import { Box, Container, VStack, Heading, Text, HStack, Image, Divider, Link, Input, Button, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaSpotify, FaApple, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBsYXlpbmclMjBsaXZlJTIwY29uY2VydHxlbnwwfHx8fDE3MTMwNTA5MzB8MA&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" h="100vh">
        <Box bgGradient="linear(to-r, blackAlpha.600, transparent)" h="100%">
          <Container maxW="4xl" h="100%" display="flex" alignItems="center">
            <Heading as="h1" size="4xl" color="white" mb={4}>
              The Band
            </Heading>
          </Container>
        </Box>
      </Box>

      {/* About Section */}
      <Container maxW="4xl" py={20}>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="2xl">
            About The Band
          </Heading>
          <Text fontSize="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.</Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Image borderRadius="full" src="https://images.unsplash.com/photo-1600962815726-457c46a12681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcm9jayUyMHNpbmdlciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzA1MDkzMHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Image borderRadius="full" src="https://images.unsplash.com/photo-1666078056875-2ae542f936c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjByb2NrJTIwZ3VpdGFyaXN0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDUwOTMxfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          </SimpleGrid>
        </VStack>
      </Container>

      <Divider />

      {/* Mailing List Section */}
      <Container maxW="4xl" py={20}>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="2xl">
            Join our mailing list
          </Heading>
          <HStack>
            <Input placeholder="Email address..." />
            <Button colorScheme="blue">Sign Up</Button>
          </HStack>
        </VStack>
      </Container>

      <Divider />

      {/* Music Links Section */}
      <Container maxW="4xl" py={20}>
        <VStack spacing={8}>
          <Heading as="h2" size="2xl">
            Listen to our music
          </Heading>
          <HStack spacing={8}>
            <Link href="#">
              <Icon as={FaSpotify} w={10} h={10} />
            </Link>
            <Link href="#">
              <Icon as={FaApple} w={10} h={10} />
            </Link>
          </HStack>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10}>
        <Container maxW="4xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <VStack align="start">
              <Heading size="md" mb={2}>
                The Band
              </Heading>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
            </VStack>
            <VStack align="start">
              <Heading size="md" mb={2}>
                Follow Us
              </Heading>
              <HStack spacing={4}>
                <Link href="#">
                  <Icon as={FaInstagram} />
                </Link>
                <Link href="#">
                  <Icon as={FaTwitter} />
                </Link>
                <Link href="#">
                  <Icon as={FaYoutube} />
                </Link>
              </HStack>
            </VStack>
            <VStack align="start">
              <Heading size="md" mb={2}>
                Contact Us
              </Heading>
              <Link href="mailto:info@theband.com">
                <Icon as={FaEnvelope} mr={2} />
                info@theband.com
              </Link>
            </VStack>
          </SimpleGrid>

          <Divider my={8} borderColor="gray.700" />

          <Text>&copy; {new Date().getFullYear()} The Band. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;

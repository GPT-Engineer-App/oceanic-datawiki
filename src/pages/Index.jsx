import { Box, Container, Flex, Heading, Image, Input, Select, SimpleGrid, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaFileUpload } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-analysis" element={<DataAnalysisPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="4xl" fontFamily="Bebas Neue">
            DataWiki
          </Heading>
          <Text fontSize="xl" mt={4}>
            Explore the world of data with ease
          </Text>
          <Image src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0fGVufDB8fHx8MTcxNDg1NDc1MXww&ixlib=rb-4.0.3&q=80&w=1080" mt={6} />
        </Box>
        <VStack spacing={6} alignItems="start">
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            Benefits of DataWiki
          </Text>
          <Box>
            <Text fontSize="lg" fontFamily="Bebas Neue">
              Comprehensive Data Analysis
            </Text>
            <Text>Access to advanced tools that simplify data analysis, making it accessible even for beginners.</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontFamily="Bebas Neue">
              Collaborative Environment
            </Text>
            <Text>Work together with experts and peers to enhance your research and data projects.</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontFamily="Bebas Neue">
              Real-Time Updates
            </Text>
            <Text>Stay updated with the latest trends and changes in data analysis techniques.</Text>
          </Box>
        </VStack>
        <Box>
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            Data Analysis for Beginners
          </Text>
          <Text mt={4}>Learn about the fundamental methods of data analysis to kickstart your journey in the data world.</Text>
          <Image src="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGRhdGElMjBhbmFseXNpc3xlbnwwfHx8fDE3MTQ4NTQ3NTF8MA&ixlib=rb-4.0.3&q=80&w=1080" mt={6} />
        </Box>
      </VStack>
    </Container>
  );
};

const DataAnalysisPage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <Flex justifyContent="space-between">
        <Box flex="1" mr={8}>
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            Upload Your Data
          </Text>
          <Input type="file" accept=".csv,.xlsx,.xls" leftIcon={<FaFileUpload />} placeholder="Upload data file" mt={4} />
          <Text fontSize="2xl" mt={8} fontFamily="Bebas Neue">
            Choose Analysis Operation
          </Text>
          <Select placeholder="Select operation" mt={4}>
            <option value="regression">Regression Analysis</option>
            <option value="classification">Classification</option>
            <option value="clustering">Clustering</option>
          </Select>
        </Box>
        <Box flex="1">
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            About Analysis Operations
          </Text>
          <Text mt={4}>Select an operation to perform on your data. If you encounter issues, ensure your data is properly formatted and try again.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

const AboutUsPage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontFamily="Bebas Neue">
          About Us
        </Text>
        <Text>At DataWiki, our mission is to democratize data analysis and make it accessible to everyone. We believe in the power of data to transform industries and improve lives.</Text>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE0ODU0NzUyfDA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text mt={4}>Our Team</Text>
            <Text>Meet the incredible team behind DataWiki, dedicated to bringing you the best data analysis experience.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbWlzc2lvbnxlbnwwfHx8fDE3MTQ4NTQ3NTN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text mt={4}>Our Mission</Text>
            <Text>We strive to provide intuitive, powerful tools that empower users to harness the potential of their data.</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const CollaboratePage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8}>
        <Text fontSize="3xl" fontFamily="Bebas Neue">
          Collaborate on Projects
        </Text>
        <Textarea placeholder="Write your article or start a research project..." size="lg" minHeight="200px" />
        <Box>
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            Community Guidelines
          </Text>
          <Text mt={4}>Share your knowledge, respect others' opinions, and collaborate effectively to make the most out of DataWiki.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

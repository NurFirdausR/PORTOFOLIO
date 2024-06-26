import * as React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Link,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { getTagColor,getTagColorType,getTagColorDevas } from "style/theme";
import LazyImage from "./lazy-image";

interface ProjectCardProps {
  title: string;
  type: string;
  developerAs: string;
  description: string;
  logo: string;
  blurHash: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  developerAs,
  description,
  logo,
  blurHash,
  link,
  technologies
}) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen}>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        w="100%"
        h="120px"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: "lg" }}
      >
        <LazyImage
          src={logo}
          blurHash={blurHash}
          size="sm"
          width={90}
          height={90}
          layout="fixed"
          rounded="md"
        />
        <VStack align="start" justify="flex-start">
          <VStack spacing={0} align="start">
            <motion.div layout>
              <SimpleGrid columns={2} spacingX='50%'  >
              <Box w='400px' >
                
                <Text 
                    as={Link}
                    href={link}
                    fontWeight="bold"
                    fontSize="md"
                    noOfLines={1}
                    onClick={e => e.stopPropagation()}
                    isExternal
                  >
                    {title}
                  </Text>
                  
              </Box>
              <Box w='400px' >
                  <HStack >
                      <Tag size="md" backgroundColor={getTagColorType(type)}>
                        {type}
                      </Tag>
                      <Tag size="md" backgroundColor={getTagColorDevas(developerAs)}>
                        {developerAs}
                      </Tag>
                  </HStack>
              </Box>
              </SimpleGrid >
                <HStack spacing="1">
                  {technologies.map(tech => (
                    <Tag size="sm" colorScheme={getTagColor(tech)}>
                      {tech}
                    </Tag>
                  ))}
                </HStack>
            </motion.div>
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                {!isOpen && (
                  <Text fontSize="sm" color={textColor} noOfLines={{ base: 2 }}>
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {isOpen && (
                  <Text
                    fontSize="sm"
                    color={textColor}
                    // noOfLines={{ base: isOpen ? 5 : 2 }}
                  >
                    {description}
                  </Text>
                )}
              </motion.div>
            </AnimatePresence>
          </VStack>
        </VStack>
      </HStack>
    </motion.div>
  );
};

export default ProjectCard;

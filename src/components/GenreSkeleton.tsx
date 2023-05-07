import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton width="100px" height="30px" borderRadius={5} />
        <SkeletonText width="100px" height="30px" />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;

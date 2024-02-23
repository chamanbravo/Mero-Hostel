import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hostelDetail } from "../features/UserDetailSlice";
import { CiStar } from "react-icons/ci";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Star } from "../components/Star";
const HostelDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hostelInfo } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(hostelDetail(id));
  }, []);
  const handleRegister = (value) => {
    navigate(`/hostel/book/${value}`);
  };

  return (
    <main className="container  md:w-max ">
      <section className="flex justify-center items-center flex-col  md:my-40 ">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          className=" "
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack>
            <CardBody>
              <Heading className="capitalize">{hostelInfo.hostelName}</Heading>
              <Text py="2 " className="flex flex-wrap break-words">
                {hostelInfo.hostelDescription}
              </Text>
              <div className="flex flex-wrap justify-between">
                <Text className="italic">{hostelInfo.hostelLocation}</Text>
                <Text className="italic">Rs.{hostelInfo.hostelPrice}</Text>
              </div>
              <div className="flex flex-wrap justify-between">
                <Text className="italic flex ">
                  <Star value={hostelInfo.hostelRating} />
                </Text>
                <Text className="italic">{hostelInfo.hostelContact}</Text>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => {
                  handleRegister(hostelInfo._id);
                }}
              >
                Book Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </section>
    </main>
  );
};

export default HostelDetail;

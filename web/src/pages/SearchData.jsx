import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  hostelDetail,
  searchHostel,
  searchHostelOne,
} from "../features/UserDetailSlice";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import DropDownFilter from "../components/DropDownFilter";
import Filter from "../components/Filter";

const SearchData = () => {
  const { searchItem, token } = useSelector((state) => state.userDetail);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const searchQuery = query.charAt(0).toUpperCase() + query.slice(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterMain, setFilterMain] = useState("Default");
  const [filterSecondary, setFilterSecondary] = useState("Default");
  const [sortedHostels, setSortedHostels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hostelsPerPage] = useState(4);
  const [stars, setStars] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (query === "all") {
      dispatch(searchHostel());
    } else {
      dispatch(searchHostelOne(searchQuery));
    }
  }, [query]);

  useEffect(() => {
    if (searchItem && searchItem.hostel) {
      let sortedData = applySecondaryFilter(searchItem.hostel);
      let sortedDataRating = sortedHostelsByRating(sortedData);
      const sortedDataPrice = sortedHostelsByPrice(sortedDataRating);
      setSortedHostels(sortedDataPrice);
      console.log(sortedHostels);
    }
  }, [searchItem, filterMain, filterSecondary, stars, price]);

  const handleDetail = (value) => {
    navigate(`/hostel/show/${value}`);
  };

  const handleRegister = (value) => {
    navigate(`/hostel/book/${value}`);
  };

  const handleMainFilterChange = (event) => {
    setFilterMain(event.target.value);
  };

  const handleSecondaryFilterChange = (event) => {
    setFilterSecondary(event.target.value);
  };

  const handleStars = (e) => {
    setStars(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
  };

  const applySecondaryFilter = (filteredData) => {
    let sortedData = [...filteredData];
    switch (filterMain) {
      case "Name":
        switch (filterSecondary) {
          case "Ascending":
            sortedData.sort((a, b) => a.hostelName.localeCompare(b.hostelName));
            break;
          case "Descending":
            sortedData.sort((a, b) => b.hostelName.localeCompare(a.hostelName));
            break;
          default:
            break;
        }
        break;
      case "Price":
        switch (filterSecondary) {
          case "Low-To-High":
            sortedData.sort((a, b) => a.hostelPrice - b.hostelPrice);
            break;
          case "High-To-Low":
            sortedData.sort((a, b) => b.hostelPrice - a.hostelPrice);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    return sortedData;
  };

  const sortedHostelsByRating = (filteredData) => {
    switch (parseInt(stars)) {
      case 5:
        return filteredData.filter((hostel) => hostel.hostelRating === 5);

      case 4:
        return filteredData.filter((hostel) => hostel.hostelRating === 4);

      case 3:
        return filteredData.filter((hostel) => hostel.hostelRating === 3);

      case 2:
        return filteredData.filter((hostel) => hostel.hostelRating === 2);

      case 1:
        return filteredData.filter((hostel) => hostel.hostelRating === 1);

      default:
        return filteredData;
    }
  };

  const sortedHostelsByPrice = (filteredData) => {
    switch (parseInt(price)) {
      case 5:
        return filteredData.filter((hostel) => hostel.hostelPrice >= 5000);

      case 4:
        return filteredData.filter((hostel) => hostel.hostelPrice >= 4000);

      case 3:
        return filteredData.filter((hostel) => hostel.hostelPrice >= 3000);

      case 2:
        return filteredData.filter((hostel) => hostel.hostelPrice >= 2000);

      case 1:
        return filteredData.filter((hostel) => hostel.hostelPrice >= 1000);

      default:
        return filteredData;
    }
  };

  const indexOfLastHostel = currentPage * hostelsPerPage;
  const indexOfFirstHostel = indexOfLastHostel - hostelsPerPage;
  const currentHostels = sortedHostels.slice(
    indexOfFirstHostel,
    indexOfLastHostel
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <main className="container mt-10">
        <div>
          {query === "all" ? (
            <h1 className="text-2xl font-bold text-center capitalize">
              All Hostels
            </h1>
          ) : (
            <h1 className="text-2xl font-bold text-center capitalize">
              Search Result {query}
            </h1>
          )}
        </div>
        <hr className="my-10" />

        <section className=" flex justify-evenly items-center">
          <h1 className="font-bold text-2xl">Filter</h1>

          <DropDownFilter
            filterMain={filterMain}
            handleMainFilterChange={handleMainFilterChange}
            filterSecondary={filterSecondary}
            handleSecondaryFilterChange={handleSecondaryFilterChange}
          />
        </section>
        <hr className=" my-10" />

        <div className="flex  gap-6 flex-wrap justify-center mt-10 ">
          <Filter handlePrice={handlePrice} handleStars={handleStars} />

          {currentHostels.map((hostel, index) => {
            return (
              <Card maxW="sm" key={index} className="my-10 w-full sm:w-5/6">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" className="capitalize">
                      {hostel.hostelName}
                    </Heading>
                    <Text className="capitalize text-lg ">
                      {hostel.hostelDescription}
                    </Text>
                    <div className="flex gap-16">
                      <Text color="blue.600" fontSize="2xl">
                        {hostel.hostelLocation}
                      </Text>

                      <Text color="blue.600" fontSize="2xl">
                        Rs.{hostel.hostelPrice}
                      </Text>
                    </div>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => {
                        handleRegister(hostel._id);
                      }}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      onClick={() => {
                        handleDetail(hostel._id);
                      }}
                    >
                      View Details
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-5 ">
          {Array.from({
            length: Math.ceil(sortedHostels.length / hostelsPerPage),
          }).map((_, index) => (
            <li
              key={index}
              onClick={() => paginate(index + 1)}
              className={`border px-4 py-2 ${
                currentPage === index + 1 ? "bg-blue-600 text-white" : ""
              } list-none`}
            >
              <button className="page-link">{index + 1}</button>
            </li>
          ))}
        </div>
      </main>
    </>
  );
};

export default SearchData;

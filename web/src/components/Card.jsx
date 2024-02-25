import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Card = () => {


  const {isLoggedIn}=useSelector((state)=>state.userDetail)
  const imagesDetails = [
    {
      img: "/places/anamnagar.jpg",
      title: "Anamnagar",
      link: "/hostel/search?q=anamnagar",
    },
    {
      img: "/places/baneshwor.jpg",
      title: "Baneshwor",
      link: "/hostel/search?q=baneshwor",
    },
    {
      img: "/places/bhaktapur.jpg",
      title: "Bhaktapur",
      link: "/hostel/search?q=bhaktapur",
    },
    {
      img: "/places/kritipur.jpg",
      title: "Kritipur",
      link: "/hostel/search?q=kritipur",
    },
    {
      img: "/places/maitidevi.jpg",
      title: "Maitidevi",
      link: "/hostel/search?q=maitidevi",
    },
    {
      img: "/places/patan.jpg",
      title: "Patan",
      link: "/hostel/search?q=patan",
    },
    {
      img: "/places/putalisadak.jpg",
      title: "Putalisadak",
      link: "/hostel/search?q=putalisadak",
    },
    {
      img: "/places/sankhamul.jpg",
      title: "Sankhamul",
      link: "/hostel/search?q=sankhamul",
    },
  ];
  

  const navigate = useNavigate();
  const handleLink=()=>{
    toast.error('Please login to continue')
  }
  return (
    <main className="grid md:grid-cols-4 grid-cols-2 pointer  ">
      {imagesDetails.map((curElem, index) => {
        return (
          <div className="flex gap-4  items-center mt-4 " key={index}>
            <img
              src={`${curElem.img}`}
              className="w-20 rounded-md "
              alt={curElem.title}
            />

          {
            isLoggedIn ? (
              <h5
              className="text-lg font-semibold"
              onClick={() => {
                navigate(`${curElem.link}`);
              }}
            >
              {curElem.title}
            </h5>
            ):(
              <h5
              className="text-lg font-semibold"
              onClick={handleLink}
            >
              {curElem.title}
            </h5>
            )
          }
          </div>
        );
      })}
    </main>
  );
};

export default Card;

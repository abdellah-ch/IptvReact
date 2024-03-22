import image from "/images/tutoimage.webp";

const Tutorial = () => {
  return (
    <div className="sm:h-[80vh]">
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-bold  text-center mb-4">
          Welcome to the IPTV Tutorial Page
        </h1>
        <p className="text-lg mb-4 text-center font-bold text-primary">
          This tutorial will guide you through the basics of using our IPTV
          service.
        </p>
        <ol className="list-decimal list-inside bg-white rounded-lg shadow-md p-4 text-red-500">
          <img
            src={image}
            alt="IPTV Tutorial"
            className="rounded-lg shadow-md mx-auto my-8"
          />
        </ol>
        <p className="text-lg mt-4 text-center ">
          For more detailed information, please refer to our user guide or
          contact support.
        </p>
      </div>
    </div>
  );
};

export default Tutorial;

import AddProductForm from "../components/AddProductForm";

function Form() {
  return (
    <div className="pt-32 pb-12 lg:py-32 h-[150vh] flex  justify-start">
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto w-full">
          {" "}
          <h1 className="text-gray-900 font-semibold text-center text-[3rem] leading-[5.4rem]">
            Add A Product
          </h1>
          <AddProductForm />
        </div>
      </div>
    </div>
  );
}

export default Form;

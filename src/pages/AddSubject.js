import TextArea from "../components/add_subject/text_area";
import Header from "../components/widget/Header";

const AddSubject = () => {
  return (
    <div>
      <Header />
      <div className="text-center bg-darkColor h-full w-full 2xl:w-3/4 mx-auto rounded-3xl 2xl:px-44 px-12">
        <TextArea />
      </div>
    </div>
  );
};

export default AddSubject;

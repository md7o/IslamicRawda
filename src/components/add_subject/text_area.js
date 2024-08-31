import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IconLoader2 } from "@tabler/icons-react";
import TextEditor from "./widget/text_editor";

const TextArea = () => {
  const [formState, setFormState] = useState({
    title: "",
    body: "",
    publishDate: "",
    loading: false,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const previousBlogs = location.state?.blogs || [];
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const getCurrentDate = () => {
    const current = new Date();
    return `${current.toLocaleString("default", {
      month: "long",
    })} ${current.getDate()}, ${current.getFullYear()}`;
  };

  return (
    <div>
      <p className="text-4xl my-10 text-white pt-10 text-center">إضافة موضوع</p>
      <form className="w-full 3xl:w-3/4  mx-auto">
        <label className="flex justify-end text-3xl text-white ">
          :نص الموضوع
        </label>
        <input
          className="mt-10 mb-24 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
          type="text"
          name="title"
          placeholder="Title"
          required
          value={formState.title}
          onChange={handleChange}
        />
        <label className="flex justify-end text-3xl mb-5 text-white">
          :الموضوع
        </label>
        <TextEditor
          onChange={(value) => setFormState({ ...formState, body: value })}
          value={formState.body}
        />

        {formState.publishDate && (
          <p className="text-3xl text-white">{formState.publishDate}</p>
        )}

        <button
          className="text-white bg-primaryColor text-2xl bg-customPurble rounded-xl p-3 w-1/2 my-16"
          type="submit"
          disabled={formState.loading} // Disable the button when loading
        >
          {formState.loading ? (
            <img
              src={<IconLoader2 />}
              alt="Loading..."
              className="animate-spin w-10 mx-auto"
            />
          ) : (
            "Publish"
          )}
        </button>
      </form>
    </div>
  );
};

export default TextArea;

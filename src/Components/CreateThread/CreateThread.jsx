import { FileMosaic, FileInputButton } from "@files-ui/react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useState } from "react";

const CreateThread = () => {
  const [feedText, setFeedText] = useState("");
  const [feedFiles, setFeedFiles] = useState([]);
  return (
    <dialog id="my_modal_2" className="modal">
      <h2 className="absolute top-[33%] font-bold">New thread</h2>
      <div className="modal-box bg-dark border border-gray-700">
        <div className="relative w-full flex items-center gap-3">
          <div className="relative w-10 min-w-10 h-10 overflow-hidden flex items-center justify-center border-2 rounded-full border-gray-600 focus:border-white transition-all duration-300 select-none">
            <img
              src="https://www.electricallicenserenewal.com/app-assets/images/user/12.jpg"
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-full">
            <h5 className="font-semibold">vicky027_</h5>
            <input
              type="text"
              placeholder="Start a thread..."
              className="w-full text-sm bg-transparent outline-none placeholder:text-gray-600"
              onChange={(e) => setFeedText(e.target.value)}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-start mt-4 pl-12 before:content-[''] before:absolute before:left-5 before:top-0 before:w-px before:h-full before:bg-gray-600">
          <div className="flex items-center gap-2">
            {feedFiles.map((file) => (
              <FileMosaic
                key={file.id}
                {...file}
                preview
                darkMode={true}
                className="text-xs font-light"
              />
            ))}
          </div>
          <div className="relative w-6 h-6 inline-flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300">
            <FileInputButton
              onChange={(files) => setFeedFiles(files)}
              value={feedFiles}
              maxFiles={2}
              className="absolute left-0 top-0 w-full h-full opacity-0"
            />
            <FeatherIcon icon="image" width={22} height={22} />
          </div>
        </div>
        <div className="relative w-full flex items-center justify-end">
          <button
            type="button"
            className="relative py-2 px-6 text-sm font-semibold rounded-badge bg-white text-black disabled:cursor-not-allowed disabled:bg-black disabled:text-white transition-all duration-300"
            disabled={!feedText.length}
          >
            Post
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CreateThread;

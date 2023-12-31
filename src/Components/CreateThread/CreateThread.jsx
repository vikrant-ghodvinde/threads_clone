import { FileInputButton, Avatar } from "@files-ui/react";
import { TextField } from "@mui/material";
import axios from "axios";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useState } from "react";
import { useSelector } from "react-redux";

const CreateThread = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [feed, setFeed] = useState({
    feedText: "",
    feedFile: "",
  });

  const formData = new FormData();
  formData.append("userName", user.userName);
  formData.append("feedText", feed.feedText);
  formData.append("feedImage", feed.feedFile[0]?.file);

  const handlePost = () => {
    axios
      .post("http://localhost:5000/post/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        document.getElementById("my_modal_2").close();
        setFeed({
          feedText: "",
          feedFile: "",
        });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <dialog id="my_modal_2" className="modal bg-modal-backdrop">
      <h2 className="absolute top-[33%] font-bold">New thread</h2>
      <div className="modal-box bg-dark border border-gray-700">
        <div className="relative w-full flex items-center gap-3">
          <div className="relative w-10 min-w-10 h-10 overflow-hidden flex items-center justify-center border-2 rounded-full border-gray-600 focus:border-white transition-all duration-300 select-none">
            <img
              src={`http://localhost:5000/${user.userImage}`}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-full">
            <h5 className="font-semibold">vicky027_</h5>
            <TextField
              id="outlined-textarea"
              value={feed.feedText}
              placeholder="Start a thread..."
              multiline
              className="mui-textarea"
              onChange={(e) => {
                setFeed({
                  ...feed,
                  feedText: e.target.value,
                });
                console.log(feed.feedFile);
              }}
            />
          </div>
        </div>
        <div className="relative flex flex-col gap-y-3 items-start mt-4 pl-12 before:content-[''] before:absolute before:left-5 before:top-0 before:w-px before:h-full before:bg-gray-600">
          <Avatar
            readOnly
            src={feed.feedFile[0]?.file}
            className="relative w-full"
          />
          <div className="relative w-6 h-6 inline-flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300">
            <FileInputButton
              onChange={(image) => setFeed({ ...feed, feedFile: image })}
              // src={feed.feedFile}
              maxFiles={1}
              className="absolute left-0 top-0 w-full h-full opacity-0"
            />
            <FeatherIcon icon="image" width={22} height={22} />
          </div>
        </div>
        <div className="relative w-full flex items-center justify-end">
          <button
            type="button"
            className="relative py-2 px-6 text-sm font-semibold rounded-badge bg-white text-black disabled:cursor-not-allowed disabled:bg-black disabled:text-white transition-all duration-300"
            onClick={handlePost}
            disabled={!feed.feedText && !feed.feedFile}
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

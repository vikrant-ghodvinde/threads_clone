import { setPosts } from "@/States/reducers/authReducer";
import axios from "axios";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.token);
  const likes = post.likes ? JSON.parse(post.likes) : [];
  const handlePostLike = (postId) => {
    const requestData = { userId };
    axios
      .patch(`http://localhost:5000/post/${postId}/like`, requestData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(
          setPosts({
            posts: res.data,
          })
        );
      })
      .catch((error) => console.log(error.message));
  };

  const getTimeDifference = (timestamp) => {
    const current = new Date();
    const previous = new Date(timestamp);
    const timeDifference = Math.floor((current - previous) / 1000);

    const minutes = Math.floor(timeDifference / 60) % 60;
    const hours = Math.floor(timeDifference / 3600) % 24;
    const days = Math.floor(timeDifference / (3600 * 24));

    if (days > 0) {
      return `${days}d`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return `Just now`;
    }
  };
  return (
    <div className="relative w-full border-t border-gray-700 py-4">
      <div className="relative w-full flex flex-col gap-y-4">
        <div className="relative flex items-center gap-3">
          <div className="relative w-10 min-w-10 h-10 overflow-hidden flex items-center justify-center border-2 rounded-full border-gray-600 focus:border-white transition-all duration-300 select-none">
            <img
              src={`http://localhost:5000/${post?.userImage}`}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h5 className="text-sm font-bold mb-1">{post?.userName}</h5>
            <p className="text-xs text-gray-600">
              {getTimeDifference(post.createdAt)}
            </p>
          </div>
        </div>
        <div className="relative text-sm text-white pl-12 before:content-[''] before:absolute before:left-5 before:top-0 before:w-px before:h-full before:bg-gray-600">
          <div className="relative flex flex-col gap-y-5">
            <div className="relative flex flex-col gap-y-4">
              <p>{post.feedText}</p>
              {post.feedImage && (
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={`http://localhost:5000/${post?.feedImage}`}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
            <ul className="relative flex items-center gap-x-2">
              <li>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-full w-8 min-w-8 h-8 bg-transparent hover:bg-dark transition-all duration-300"
                  onClick={() => handlePostLike(post.id)}
                >
                  {likes.some(like => like.userId === userId) ? (
                    <FeatherIcon icon="heart" width={18} height={18} fill="#f00" color="#f00" />
                  ) : (
                    <FeatherIcon icon="heart" width={18} height={18} />
                  )}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-full w-8 min-w-8 h-8 bg-transparent hover:bg-dark transition-all duration-300"
                >
                  <FeatherIcon icon="message-circle" width={18} height={18} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-full w-8 min-w-8 h-8 bg-transparent hover:bg-dark transition-all duration-300"
                >
                  <FeatherIcon icon="share-2" width={18} height={18} />
                </button>
              </li>
            </ul>
          </div>
          <ul className="relative flex gap-x-5">
            <li className="relative text-xs text-gray-600">0 replies</li>
            <li className="relative text-xs text-gray-600 before:content-[''] before:absolute before:left-[-10px] before:top-[50%] before:translate-y-[-50%] before:w-0.5 before:h-0.5 before:rounded-full before:bg-gray-600">
              {likes.length} {likes.length <= 1 ? "like" : "likes"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    userName: PropTypes.string,
    userImage: PropTypes.string,
    feedText: PropTypes.string,
    feedImage: PropTypes.string,
    likes: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default PostCard;

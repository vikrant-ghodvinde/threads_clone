import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import PropTypes from "prop-types";

const PostCard = ({ post }) => {
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
            <p className="text-xs text-gray-600">16h ago</p>
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
                >
                  <FeatherIcon icon="heart" width={18} height={18} />
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
            <li className="relative text-xs text-gray-600">72 replies</li>
            <li className="relative text-xs text-gray-600 before:content-[''] before:absolute before:left-[-10px] before:top-[50%] before:translate-y-[-50%] before:w-0.5 before:h-0.5 before:rounded-full before:bg-gray-600">
              120 likes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    userName: PropTypes.string,
    userImage: PropTypes.string,
    feedText: PropTypes.string,
    feedImage: PropTypes.string,
  }).isRequired,
};

export default PostCard;

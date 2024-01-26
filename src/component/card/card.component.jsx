import { Typography, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import { CardStyle, ContentContainer } from "./card.style";

const Post = ({ post, users }) => {
  return (
    <div>
      <CardStyle raised>
        <CardMedia
          component="img"
          height="100%"
          image={`https://picsum.photos/600/300/?image=${post?.id}`}
          alt="Post Image"
        />
        <ContentContainer>
          <Typography variant="h6" fontWeight="bold">
            {post?.title}
          </Typography>
          <Typography color="text.primary" variant="h6">
            user name : {users[post?.userId]?.username}{" "}
          </Typography>
          <Typography color="text.primary" variant="h6">
            Phone: {users[post?.userId]?.phone}{" "}
          </Typography>
        </ContentContainer>
      </CardStyle>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
  }),
  users: PropTypes.objectOf(
    PropTypes.shape({
      username: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
export default Post;

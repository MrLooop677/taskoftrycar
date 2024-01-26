import { useState, useEffect } from "react";
import { Container, Grid, Pagination, Box, Typography } from "@mui/material";
import Post from "./component/card/card.component";
import { getAllPosts, getAllUsers } from "./services/api/posts.service";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const postsWrapper = currentPosts?.map((post) => (
    <Grid item xs={12} sm={6} md={4} key={post.id}>
      <Post post={post} users={users} key={post.id} />
    </Grid>
  ));
  const usersMap = {};

  const fetchPosts = async () => {
    try {
      const postsResponse = await getAllPosts();
      const userResponse = await getAllUsers();
      setPosts(postsResponse?.data);
      userResponse?.data?.forEach((user) => {
        usersMap[user?.id] = user;
      });
      setUsers(usersMap);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Box py={3}>
      <Container>
        <Typography
          color="text.primary"
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={2}
        >
          List Of Posts With Their Users Details
        </Typography>
        <Grid container spacing={3}>
          {postsWrapper}
        </Grid>
        {posts?.length > 0 && (
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        )}
      </Container>
    </Box>
  );
};

export default App;

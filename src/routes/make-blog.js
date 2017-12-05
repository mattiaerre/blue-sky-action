const butter = require('buttercms')(process.env.BUTTER_CMS_API_TOKEN);

async function makePost(slug) {
  const data = await butter.post.retrieve(slug).then(response => response.data);
  return {
    title: data.data.title,
    post: data.data,
    published: new Date(data.data.published)
  };
}

async function makePosts() {
  const data = await butter.post
    .list({ page: 1, page_size: 10 })
    .then(response => response.data);
  return {
    next_page: data.meta.next_page,
    posts: data.data,
    previous_page: data.meta.previous_page
  };
}

module.exports = { makePost, makePosts };

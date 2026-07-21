import { updateBlogContent as apiUpdateBlog } from "../../api/client";

export async function updateBlogContent(blogId, longHTML) {
  const response = await apiUpdateBlog(blogId, longHTML, "blogs_uk");
  console.log("Update:", response);
}

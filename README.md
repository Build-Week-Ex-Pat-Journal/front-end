# Expat Journal

## Using the website

Deployed project link: https://front-end-nine-sooty.vercel.app/

This is the front-end of the Expat Journal app built by tt_webft_34 for the build week of 1/1/21 to 1/8/21.

This web application is designed to function as a social commons for registered users to post images and text ("stories"). To use the application, the user must first register and log in. On logging in, the user is redirected to `/all-posts` ("All Posts" being the corresponding nav bar link), which is the location at which all of the Expat Journal community's posts are displayed. The logged in user may also navigate to `/new-post` ("New Post" on the nav bar) and create a new post by filling out a form with the new post's image url and story text. On submitting a new post, the user is again redirected to `/all-posts`, which now includes the user's submitted post. At `/my-posts` ("My Posts" on the nav bar) are located all posts submitted by the user. While in `/my-posts`, the user may edit, delete, or (redundantly, but in accordance with the given specification) delete, individually, the image or the story of the user's listed posts. Posts and registration credentials are stored in the back-end and thus persist through multiple sessions and computer IP addresses. The token for a successful login persists in localstorage through page refreshes.

The back-end is located [here](https://github.com/Build-Week-Ex-Pat-Journal/back-end).

As usual, there is plenty of room for extension of and iteration on this project (e.g., refinement of styling, commenting and liking, chat between logged-in users, filters for sorting community-wide posts by data and time of posting or by likes). One outstanding bug is the occasional duplication of new posts. This duplication does not always occur, and it is difficult to predict when it will occur. Presumably, it originates from the front-end, because, when it does occur, duplicates disappear when the `/all-posts` page is refreshed. The fact that the duplicate posts have the same `id` as one another, coupled with the fact that the duplication only occurs when a new post is submitted (not, for example, when a post is edited, nor on the initial rendering of the `/all-posts` page or indeed any subsequent rendering, except that which occurs after a new post has been submitted and the user is redirected from `/new-post` to `/all-posts`) seems to suggest that the the new post form (`NewPostForm.js`) is being submitted twice.

## Using the repository locally

1. Fork
2. `git clone https://github.com/Build-Week-Ex-Pat-Journal/front-end.git`
3. `npm install`
4. `npm start`

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

import { getLoggedInUser } from "../data/DataManager.js"

export const Post = (postObject) => {
  const currentUser = getLoggedInUser().id
  if (currentUser === postObject.userId) {
    return `
      <section class="post">
        <header>
        <h3 class="post__author">Posted By: ${postObject.user.name}</h3>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <button id="delete__${postObject.id}">Delete</button>
        <button id="edit__${postObject.id}">Edit</button>
      </section>
    `
  } else {
    return `
    <section class="post">
      <header>
      <h3 class="post__author">Posted By: ${postObject.user.name}</h3>
          <h2 class="post__title">${postObject.title}</h2>
      </header>
      <img class="post__image" src="${postObject.imageURL}" />
    </section>
  `
  }
  }
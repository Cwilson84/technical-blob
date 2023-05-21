const editFormHandler = async (event) => {
  event.preventDefault();

  const post_text = document
    .querySelector('textarea[name="post-text"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  try {
    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        post_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      document.location.replace("/dashboard/");
    } else {
      throw new Error(res.statusText);
    }
  } catch (err) {
    console.error(err);
    alert("An error has occurred. Please try again.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".edit-post-form")
    .addEventListener("submit", editFormHandler);
});

const editFormHandler = async (event) => {
  event.preventDefault();

  const post_text = document
    .querySelector('textarea [name="post-text"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

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
    alert(res.statusText);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
